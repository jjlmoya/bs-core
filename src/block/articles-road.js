import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {LoadingComponent} from '../models/loading.model';
import {BasicTitle, CommonsElements, DescriptionComponent, GroupPostComponent, TitleComponent} from "../services/basic";
import {Categories, PostTypes} from "../api/core";
import {Icons} from "../assets/icons";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Artículos Road');
const BlockUrl = __('articulos-road');


registerBlockType('bonseo/block-bs-articles-road', {
    title: BlockTitle,
    icon: Icons.writer,
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
                {BasicTitle(className, attributes, setAttributes)}
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
