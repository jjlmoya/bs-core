const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const BlockTitle = __('Banner Flecha');
const BlockUrl = __('banner-flecha');

import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BasicTitle, BasicCta, BasicUrl, TitleComponent, DescriptionComponent} from "../services/basic";
import {BrandSelection} from '../services/selects';

registerBlockType('bonseo/block-bs-arrow-banner', {
	title: BlockTitle,
	icon: Icons.down,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className={EditorClass}>
				{TitleComponent(BlockTitle)}
				{DescriptionComponent(BlockUrl)}
				{BasicTitle(className, attributes, setAttributes)}
				{BasicCta(className, attributes, setAttributes)}
				{BasicUrl(className, attributes, setAttributes)}
				<TextControl
					className={`${className}__content`}
					label={__('Frase del banner')}
					value={attributes.content}
					onChange={content => setAttributes({content})}
				/>
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	},
	save: function () {
		return null;
	}
});
