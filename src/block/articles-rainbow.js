import {Icons} from "../assets/icons";
import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {LoadingComponent} from '../models/loading.model';
import {
    BasicCta,
    BasicSeoDescription,
    BasicTitle,
    CommonsElements,
    DescriptionComponent,
    GroupPostComponent,
    TitleComponent
} from "../services/basic";
import {Categories, PostTypes} from "../api/core";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Artículos rainbow');
const BlockUrl = __('articulos-rainbow');


registerBlockType('bonseo/block-bs-articles-rainbow', {
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
                {BasicSeoDescription(className, attributes, setAttributes)}
                {BasicCta(className, attributes, setAttributes)}
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
