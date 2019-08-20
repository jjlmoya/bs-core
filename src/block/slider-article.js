import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {
    BasicImage,
    BasicTitle,
    CommonsElements,
    DescriptionComponent,
    GroupPostComponent,
    TitleComponent
} from '../services/basic';
import {Categories, PostTypes} from '../api/core';
import {LoadingComponent} from '../models/loading.model';
import {Icons} from "../assets/icons";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Cabecera con Artículos');
const BlockUrl = __('cabecera-articulos');

registerBlockType('bonseo/block-bs-slider-article', {
    title: BlockTitle,
    icon: Icons.slides,
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
                {BasicImage(className, attributes, setAttributes)}
                {CommonsElements(className, attributes, setAttributes)}
            </div>
        );
    }),
    save: function () {
        return null;
    }
})
;
