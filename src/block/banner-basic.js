const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const BlockTitle = __('Banner Básico');
const BlockUrl = __('banner-basico');

import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BasicTitle, BasicCta, BasicUrl, TitleComponent, DescriptionComponent, CommonsElements} from "../services/basic";
registerBlockType('bonseo/block-bs-banner-basic', {
	title: BlockTitle,
	icon: Icons.minus,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className={EditorClass}>
				{TitleComponent(BlockTitle)}
				{DescriptionComponent(BlockUrl)}
				{BasicTitle(className, attributes, setAttributes)}
				<TextControl
					className={`${className}__content`}
					label={__('Frase del banner')}
					value={attributes.content}
					onChange={content => setAttributes({content})}
				/>
				{BasicCta(className, attributes, setAttributes)}
				{BasicUrl(className, attributes, setAttributes)}
                {CommonsElements(className, attributes, setAttributes)}
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
