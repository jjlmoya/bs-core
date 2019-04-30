/**
 * BLOCK: bs-arrow-banner
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */


const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const {MediaUpload, RichText} = wp.editor;
const BlockTitle = __('Title Brand');
import {CoreKeywords, Icons} from '../settings';

registerBlockType('bonseo/block-bs-title-brand', {
	title: BlockTitle,
	icon: Icons.tag,
	category: 'bonseo-blocks',
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		function onImageSelect(imageObject) {
			setAttributes({
				image: imageObject.sizes.full.url
			})
		};

		function drawImageButton(open) {
			var html;
			if (attributes.image) {
				html = <img src={attributes.image}/>;
			} else {
				html = "Upload";
			}

			return (<button onClick={open}>
				{html}
			</button>)

		}

		return (
			<div>
				<h2>{BlockTitle}</h2>
				<TextControl
					className={`${className}__title`}
					label={__('Título')}
					value={attributes.title}
					onChange={title => setAttributes({title})}
				/>
				<TextControl
					className={`${className}__claim`}
					label={__('Subtitulo')}
					value={attributes.claim}
					onChange={claim => setAttributes({claim})}
				/>
				<RichText
					multiline="p"
					className={`${className}__content`}
					label={__('Frase más importante de todas')}
					value={attributes.content}
					onChange={content => setAttributes({content})}
					placeholder={__('Enter text...', 'block-bs-content-simple')}
					keepPlaceholderOnFocus={true}
				/>
				<TextControl
					className={`${className}__brand`}
					label={__('Elige el brand, por defecto el de tu tema')}
					value={attributes.brand}
					onChange={brand => setAttributes({brand})}
				/>
				<MediaUpload
					onSelect={onImageSelect}
					type="image"
					value={attributes.image}
					render={({open}) => (
						drawImageButton(open)
					)}
				/>
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
