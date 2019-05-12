const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Artículos Quark');
const BlockUrl = __('articulos-quark');

import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {LoadingComponent} from '../services/ux';
import {
    BasicTitle,
    TitleComponent,
    DescriptionComponent,
    CommonsElements,
    GroupPostComponent
} from "../services/basic";
import {PostTypes, Categories} from "../api/core";

registerBlockType('bonseo/block-bs-articles-quark', {
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
