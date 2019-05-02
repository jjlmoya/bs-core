const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Product Curved (H1, Image Transparent)');
import {CoreKeywords, Icons, EditorClass, CategoryGroup} from '../settings';
import {BrandSelection} from '../controller/selects';
import {BasicTitle, BasicImage, BasicClaim, BasicCta, BasicUrl} from '../controller/basic';

registerBlockType('bonseo/block-bs-product-curved', {
	title: BlockTitle,
	icon: Icons.slides,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className="">
				<h2>{BlockTitle}</h2>
				<div className={EditorClass}>
					{BasicTitle(className, attributes, setAttributes)}
					{BasicClaim(className, attributes, setAttributes)}
					{BrandSelection(className, attributes, setAttributes)}
					{BasicImage(className, attributes, setAttributes)}
					{BasicCta(className, attributes, setAttributes)}
					{BasicUrl(className, attributes, setAttributes)}
				</div>
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
