import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {
    BasicCta,
    BasicTitle,
    BasicWords,
    CommonsElements,
    DescriptionComponent,
    GroupPostComponent,
    TitleComponent
} from "../services/basic";
import {LoadingComponent} from '../models/loading.model';
import {Categories, PostTypes} from "../api/core";
import {Icons} from "../assets/icons";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Artículos en Zig Zag');
const BlockUrl = __('articulos-zig-zag');

registerBlockType('bonseo/block-bs-last-articles-zig-zag', {
    title: BlockTitle,
    icon: Icons.list,
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
                {BasicWords(className, attributes, setAttributes)}
                {BasicCta(className, attributes, setAttributes)}

                {CommonsElements(className, attributes, setAttributes)}
            </div>
        );
    }),
    save: function () {
        return null;
    },
});
