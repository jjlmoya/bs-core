const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Anchor Navigation Links');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BasicTitle} from "../controller/basic";
import {BrandSelection} from '../controller/selects';
registerBlockType('bonseo/block-bs-anchor-links', {
	title: BlockTitle,
	icon: Icons.mark,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className={EditorClass}>
				<h2> {BlockTitle} </h2>
				{BasicTitle(className, attributes, setAttributes)}
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	},
	save: function () {
		return null;
	}
});
