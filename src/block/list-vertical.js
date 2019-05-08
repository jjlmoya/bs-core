const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Lista Vertical');
const BlockUrl = __('lista-vertical');

import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {LoadingComponent} from '../services/ux';
import {
    BasicTitle, TitleComponent, DescriptionComponent, CommonsElements,
    GroupPostComponent
} from '../services/basic';
import {Categories, PostTypes} from '../api/core';

registerBlockType('bonseo/block-bs-list-vertical', {
	title: BlockTitle,
	icon: Icons.vertical,
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
