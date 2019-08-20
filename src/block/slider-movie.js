import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {LoadingComponent} from '../models/loading.model';
import {
    BasicCta, TitleComponent, DescriptionComponent, CommonsElements,
    GroupPostComponent
} from "../services/basic";
import {Categories, PostTypes} from '../api/core';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Slider Movie');
const BlockUrl = __('slider-movie');



registerBlockType('bonseo/block-bs-slider-movie', {
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
