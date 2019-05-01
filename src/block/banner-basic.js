const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const BlockTitle = __('Banner Basic');
import {CoreKeywords, Icons, CategoryGroup} from '../settings';
registerBlockType('bonseo/block-bs-banner-basic', {
	title: BlockTitle,
	icon: Icons.minus,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div>
				<h2> {BlockTitle} </h2>
				<TextControl
					className={`${className}__title`}
					label={__('Título del banner')}
					value={attributes.title}
					onChange={title => setAttributes({title})}
				/>
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
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
