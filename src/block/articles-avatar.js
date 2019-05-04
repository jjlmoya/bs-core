const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Artículos con Avatar');
const BlockUrl = __('articulos-avatar');

import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {LoadingComponent} from '../services/ux';
import {BasicTitle, BasicMaxEntries, TitleComponent, DescriptionComponent} from "../services/basic";
import {BrandSelection, PostTypeSelection, CategorySelection} from '../services/selects';
import {PostTypes, Categories} from "../api/core";

registerBlockType('bonseo/block-bs-articles-avatar', {
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
				{BasicMaxEntries(className, attributes, setAttributes)}
				{CategorySelection(className, attributes, setAttributes, props.categories)}
				{PostTypeSelection(className, attributes, setAttributes, props.types)}
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	}
});
