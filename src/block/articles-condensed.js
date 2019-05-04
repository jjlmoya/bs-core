const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Artículos Condensados');
const BlockUrl = __('articulos-condensados');

import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {LoadingComponent} from '../services/ux';
import {
	BasicTitle, BasicMaxEntries, BasicSeoDescription, TitleComponent,
	DescriptionComponent
} from "../services/basic";
import {BrandSelection, PostTypeSelection} from '../services/selects';
import {PostTypes} from "../api/core";

registerBlockType('bonseo/block-bs-articles-condensed', {
	title: BlockTitle,
	icon: Icons.pile,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: withSelect((select) => {
		return {
			types: PostTypes(select)
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
				{BasicSeoDescription(className, attributes, setAttributes)}
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	}
});
