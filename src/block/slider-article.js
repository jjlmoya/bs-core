/**
 * BLOCK: bs-last-articles-zig-zag
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {MediaUpload} = wp.editor;
const {SelectControl, TextControl} = wp.components;
const {withSelect} = wp.data;
const BlockTitle = __('Slider Article');
import {CoreKeywords, Icons} from '../settings';

registerBlockType('bonseo/block-bs-slider-article', {
	title: BlockTitle,
	icon: Icons.slides,
	category: 'bonseo-blocks',
	keywords: CoreKeywords,
	edit: withSelect((select) => {
		const {getPostTypes} = select('core');
		return {
			types: getPostTypes(),
		};
	})(function (props) {
		const {attributes, className, setAttributes} = props;
		var types = props.types;
		if (!props.types) {
			return "Loading...";
		}
		function onImageSelect(imageObject) {
			setAttributes({
				backgroundImage: imageObject.sizes.full.url
			})
		};
		function drawImageButton(open) {
			var html;
			if (attributes.backgroundImage) {
				html = <img src={attributes.backgroundImage}/>;
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
					label={__('Encabezado del bloque:')}
					value={attributes.title}
					onChange={title => setAttributes({title})}
				/>
				<SelectControl
					label="Tipo de Post"
					className={`${className}__type`}
					value={attributes.type}
					options={types.map((type) => {
						return {
							label: type.name,
							value: type.slug
						}
					})}
					onChange={type => setAttributes({type})}
				/>
				<MediaUpload
					onSelect={onImageSelect}
					type="image"
					value={attributes.backgroundImage}
					render={({open}) => (
						drawImageButton(open)
					)}
				/>

			</div>
		);
	}),
	save: function () {
		return null;
	}
})
;
