const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const BlockTitle = __('Last Articlez Zig Zag');
import {CoreKeywords, Icons} from '../settings';

registerBlockType('bonseo/block-bs-last-articles-zig-zag', {
	title: BlockTitle,
	icon: Icons.list,
	category: 'bonseo-blocks',
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div>
				<h2>{BlockTitle}</h2>
				<TextControl
					className={`${className}__title`}
					label={__('Encabezado del bloque:')}
					value={attributes.content}
					onChange={content => setAttributes({content})}
				/>
				<TextControl
					className={`${className}__number`}
					type="number"
					label={__('Entradas a mostrar:')}
					value={attributes.max_posts}
					onChange={max_posts => setAttributes({max_posts})}
				/>
				<TextControl
					className={`${className}__cta`}
					label={__('Boton CTA')}
					value={attributes.cta}
					onChange={cta => setAttributes({cta})}
				/>
				<TextControl
					className={`${className}__words`}
					type="number"
					label={__('Palabras')}
					value={attributes.words}
					onChange={words => setAttributes({words})}
				/>
			</div>
		);
	},
	save: function () {
		return null;
	}
	,
})
;
