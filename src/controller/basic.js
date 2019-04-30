const {TextControl} = wp.components;
const {MediaUpload, RichText} = wp.editor;
const {__} = wp.i18n;


export let BasicTitle = function (className, attributes, setAttributes) {
	return (<TextControl
		className={`${className}__title abcdef`}
		label={__('Título')}
		value={attributes.title}
		onChange={title => setAttributes({title})}
	/>);
};

export let BasicContent = function (className, attributes, setAttributes) {
	return (<RichText
		multiline="p"
		className={`${className}__content`}
		label={__('Contenido de bloque')}
		value={attributes.content}
		onChange={content => setAttributes({content})}
		placeholder={__('Introduce el texto')}
		keepPlaceholderOnFocus={true}
	/>);
};

export let BasicImage = function (className, attributes, setAttributes) {
	function onImageSelect(imageObject) {
		setAttributes({
			image: imageObject.sizes.full.url
		})
	};

	function drawImageButton(open) {
		let html;
		if (attributes.image) {
			html = <img src={attributes.image}/>;
		} else {
			html = "Upload";
		}

		return (<button onClick={open}>
			{html}
		</button>)
	}

	return (<MediaUpload
		onSelect={onImageSelect}
		type="image"
		value={attributes.image}
		render={({open}) => (
			drawImageButton(open)
		)}
	/>);
};
