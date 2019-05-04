const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Producto Curvado (H1, Image Transparente)');
const BlockUrl = __('producto-curvado');
import {CoreKeywords, Icons, EditorClass, CategoryGroup} from '../settings';
import {BrandSelection} from '../services/selects';
import {
	BasicTitle, BasicImage, BasicClaim, BasicCta, BasicUrl, TitleComponent,
	DescriptionComponent
} from '../services/basic';

registerBlockType('bonseo/block-bs-product-curved', {
	title: BlockTitle,
	icon: Icons.slides,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className={EditorClass}>
				{TitleComponent(BlockTitle)}
				{DescriptionComponent(BlockUrl)}
				{BasicTitle(className, attributes, setAttributes)}
				{BasicClaim(className, attributes, setAttributes)}
				{BrandSelection(className, attributes, setAttributes)}
				{BasicImage(className, attributes, setAttributes)}
				{BasicCta(className, attributes, setAttributes)}
				{BasicUrl(className, attributes, setAttributes)}
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
