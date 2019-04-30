const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl, SelectControl} = wp.components;
const {RichText} = wp.editor;
const BlockTitle = __('Content Simple');
import {CoreKeywords, Icons} from '../settings';

registerBlockType('bonseo/block-bs-content-simple', {
	title: BlockTitle,
	icon: Icons.content,
	category: 'bonseo-blocks',
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		var getOptions = function () {
			return [{
				label: 1,
				value: 'h1',
			}, {
				label: 2,
				value: 'h2',
			}, {
				label: 3,
				value: 'h3',
			}, {
				label: 4,
				value: 'h4',
			}, {
				label: 5,
				value: 'h5',
			}, {
				label: 6,
				value: 'h6',
			}]
		};
		return (
			<div>
				<h2>{BlockTitle}</h2>
				<TextControl
					className={`${className}__title`}
					label={__('Título (Opcional)')}
					value={attributes.title}
					onChange={title => setAttributes({title})}
				/>
				<RichText
					multiline="p"
					className={`${className}__content`}
					value={attributes.content}
					onChange={(content) => setAttributes({content})}
					placeholder={__('Enter text...', 'block-bs-content-simple')}
					keepPlaceholderOnFocus={true}
					label={__('Contenido')}
				/>
				<SelectControl
					label="Heading"
					className={`${className}__select`}
					value={attributes.heading}
					options={getOptions()}
					onChange={heading => setAttributes({heading})}/>

			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
