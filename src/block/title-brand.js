/**
 * BLOCK: bs-arrow-banner
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */


const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const BlockTitle = __('Title Brand');
import {CoreKeywords, Icons, Brands} from '../settings';
import {BrandSelection} from '../controller/selects';
import {BasicTitle, BasicContent, BasicImage} from '../controller/basic';

registerBlockType('bonseo/block-bs-title-brand', {
	title: BlockTitle,
	icon: Icons.tag,
	category: 'bonseo-blocks',
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className="">
				<h2>{BlockTitle}</h2>
				<divs>
					{BasicTitle(className, attributes, setAttributes)}
					<TextControl
						className={`${className}__claim`}
						label={__('Subtitulo')}
						value={attributes.claim}
						onChange={claim => setAttributes({claim})}
					/>
					{BasicContent(className, attributes, setAttributes)}
					{BrandSelection(className, attributes, setAttributes)}
					{BasicImage(className, attributes, setAttributes)}
				</divs>
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
