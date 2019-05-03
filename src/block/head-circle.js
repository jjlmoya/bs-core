const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Cabecera Circular (H1)');
const BlockUrl = __('cabecera-circulo');

import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {
	BasicTitle, BasicClaim, BasicSubtitle, BasicImage, TitleComponent,
	DescriptionComponent
} from "../controller/basic";
import {BrandSelection} from '../controller/selects';


registerBlockType('bonseo/block-bs-head-circle', {
	title: BlockTitle,
	icon: Icons.world,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className={EditorClass}>
				{TitleComponent(BlockTitle)}
				{DescriptionComponent(BlockUrl)}
				{BasicClaim(className, attributes, setAttributes)}
				{BasicTitle(className, attributes, setAttributes)}
				{BasicSubtitle(className, attributes, setAttributes)}
				{BasicImage(className, attributes, setAttributes)}
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	},
	save: function () {
		return null;
	}
});
