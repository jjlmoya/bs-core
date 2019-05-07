const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Producto Curvado (H1, Image Transparente)');
const BlockUrl = __('producto-curvado');
import {CoreKeywords, Icons, EditorClass, CategoryGroup} from '../settings';
import {
    BasicTitle, BasicImage, BasicClaim, BasicCta, BasicUrl, TitleComponent,
    DescriptionComponent, CommonsElements
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
				{BasicImage(className, attributes, setAttributes)}
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
