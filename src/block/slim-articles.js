const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Extracto de Artículos Básicos');
const BlockUrl = __('articulos-basicos');
import {CoreKeywords, Icons, EditorClass, CategoryGroup} from '../settings';
import {BrandSelection, CategorySelection, PostTypeSelection} from '../services/selects';
import {BasicTitle, BasicMaxEntries, TitleComponent, DescriptionComponent} from '../services/basic';
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
})
;
