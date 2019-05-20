const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Extracto de Artículos Básicos');
const BlockUrl = __('articulos-basicos');

import {CoreKeywords, Icons, EditorClass, CategoryGroup} from '../settings';
import {
    BasicTitle, TitleComponent, DescriptionComponent, CommonsElements,
    GroupPostComponent
} from '../services/basic';
import {PostTypes, Categories} from '../api/core';
import {LoadingComponent} from '../services/ux';

registerBlockType('bonseo/block-bs-articles-slim', {
    title: BlockTitle,
    icon: Icons.feed,
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
})
;
