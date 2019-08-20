import {Icons} from "../assets/icons";
import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {LoadingComponent} from '../models/loading.model';
import {CommonsElements, DescriptionComponent, GroupPostComponent, TitleComponent} from "../services/basic";
import {Categories, PostTypes} from "../api/core";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Artículos en Imágenes');
const BlockUrl = __('articulos-en-imagenes');



registerBlockType('bonseo/block-bs-articles-image', {
    title: BlockTitle,
    icon: Icons.pile,
    category: CategoryGroup,
    keywords: CoreKeywords,
    edit: withSelect((select) => {
        return {
            categories: Categories(select),
            types: PostTypes(select)
        };
    })(function (props) {
        const {attributes, className, setAttributes} = props;
        if (!props.categories || !props.types) {
            return LoadingComponent();
        }
        return (
            <div className={EditorClass}>
                {TitleComponent(BlockTitle)}
                {DescriptionComponent(BlockUrl)}
                {GroupPostComponent(className, attributes, setAttributes, {
                    types: props.types,
                    categories: props.categories
                })}
                {CommonsElements(className, attributes, setAttributes)}
            </div>
        );
    }),
    save: function () {
        return null;
    }
});
