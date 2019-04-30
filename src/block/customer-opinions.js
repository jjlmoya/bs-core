const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const BlockTitle = __('Customer Opinions');
import {CoreKeywords, Icons} from '../settings';

registerBlockType('bonseo/block-bs-customer-opinions', {
	title: BlockTitle,
	icon: Icons.pencil,
	category: 'bonseo-blocks',
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div>
				<h2>{BlockTitle}</h2>
				<TextControl
					className={`${className}__title`}
					label={__('Encabezado del bloque:')}
					value={attributes.title}
					onChange={title => setAttributes({title})}
				/>
				<TextControl
					className={`${className}__length`}
					type="number"
					label={__('Cuantas opiniones queire mostrar:')}
					value={attributes.max_opinions}
					onChange={max_opinions => setAttributes({max_opinions})}
				/>
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
