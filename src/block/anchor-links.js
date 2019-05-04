const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Navegación de Contenido');
const BlockUrl = __('navegacion-contenido');

import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BasicTitle, DescriptionComponent, TitleComponent} from "../services/basic";
import {BrandSelection} from '../services/selects';
registerBlockType('bonseo/block-bs-anchor-links', {
	title: BlockTitle,
	icon: Icons.mark,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className={EditorClass}>
				{TitleComponent(BlockTitle)}
				{DescriptionComponent(BlockUrl)}
				{BasicTitle(className, attributes, setAttributes)}
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	},
	save: function () {
		return null;
	}
});
