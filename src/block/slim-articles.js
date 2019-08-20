import {Icons} from "../assets/icons";
import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {BasicTitle, CommonsElements, DescriptionComponent, GroupPostComponent, TitleComponent} from '../services/basic';
import {Categories, PostTypes} from '../api/core';
import {LoadingComponent} from '../models/loading.model';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Extracto de Artículos Básicos');
const BlockUrl = __('articulos-basicos');



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
