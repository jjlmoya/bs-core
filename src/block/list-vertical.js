const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Lista Vertical');
const BlockUrl = __('lista-vertical');

import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {LoadingComponent} from '../services/ux';
import {BasicTitle, BasicMaxEntries, TitleComponent, DescriptionComponent, CommonsElements} from '../services/basic';
import {PostTypes} from '../api/core';
import {PostTypeSelection} from '../services/selects';

registerBlockType('bonseo/block-bs-list-vertical', {
	title: BlockTitle,
	icon: Icons.vertical,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: withSelect((select) => {
		return {
			types: PostTypes(select),
		};
	})(function (props) {
		const {attributes, className, setAttributes} = props;
		if (!props.types) {
			return LoadingComponent();
		}
		return (
			<div className={EditorClass}>
				{TitleComponent(BlockTitle)}
				{DescriptionComponent(BlockUrl)}
				{BasicTitle(className, attributes, setAttributes)}
				{BasicMaxEntries(className, attributes, setAttributes)}
				{PostTypeSelection(className, attributes, setAttributes, props.types)}
                {CommonsElements(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	}
})
;
