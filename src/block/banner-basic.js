const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const BlockTitle = __('Banner Basic');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BasicTitle} from "../controller/basic";
import {BrandSelection} from '../controller/selects';


registerBlockType('bonseo/block-bs-banner-basic', {
	title: BlockTitle,
	icon: Icons.minus,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className={EditorClass}>
				<h2> {BlockTitle} </h2>
				{BasicTitle(className, attributes, setAttributes)}
				<TextControl
					className={`${className}__content`}
					label={__('Frase del banner')}
					value={attributes.content}
					onChange={content => setAttributes({content})}
				/>
				<TextControl
					className={`${className}__cta`}
					label={__('CTA')}
					value={attributes.cta}
					onChange={cta => setAttributes({cta})}
				/>
				<TextControl
					className={`${className}__url`}
					label={__('Url o Email(mailto:)')}
					value={attributes.url}
					onChange={url => setAttributes({url})}
				/>
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
