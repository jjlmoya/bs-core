/**
 * BLOCK: bs-arrow-banner
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */


const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Title Brand');
import {CoreKeywords, Icons, EditorClass, CategoryGroup} from '../settings';
import {BrandSelection} from '../controller/selects';
import {BasicTitle, BasicContent, BasicImage, BasicClaim} from '../controller/basic';

registerBlockType('bonseo/block-bs-title-brand', {
	title: BlockTitle,
	icon: Icons.tag,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className="">
				<h2>{BlockTitle}</h2>
				<div className={EditorClass}>
					{BasicTitle(className, attributes, setAttributes)}
					{BasicClaim(className, attributes, setAttributes)}
					{BasicContent(className, attributes, setAttributes)}
					{BrandSelection(className, attributes, setAttributes)}
					{BasicImage(className, attributes, setAttributes)}
				</div>
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
