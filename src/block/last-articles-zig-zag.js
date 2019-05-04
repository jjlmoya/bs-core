const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const {withSelect} = wp.data;
const BlockTitle = __('Artículos en Zig Zag');
const BlockUrl = __('articulos-zig-zag');

import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BasicTitle, BasicMaxEntries, BasicCta, TitleComponent, DescriptionComponent} from "../services/basic";
import {BrandSelection, PostTypeSelection} from '../services/selects';
import {LoadingComponent} from "../services/ux";
import {PostTypes} from "../api/core";


registerBlockType('bonseo/block-bs-last-articles-zig-zag', {
	title: BlockTitle,
	icon: Icons.list,
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
				{BasicCta(className, attributes, setAttributes)}
				<TextControl
					className={`${className}__words`}
					type="number"
					label={__('Palabras')}
					value={attributes.words}
					onChange={words => setAttributes({words})}
				/>
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	},
});
