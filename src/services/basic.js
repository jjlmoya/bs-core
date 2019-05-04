const {TextControl} = wp.components;
const {MediaUpload, RichText} = wp.editor;
const {__} = wp.i18n;

import {FieldClass, Bonseo} from '../settings';
export let DescriptionComponent = function (url) {
	return (
		<div class="l-column--1-1">
			<p>
				{__('Para más información de configuración o visualización previa visite ')}
				<a href={Bonseo.path + url}>{__('la página de este bloque')}</a>
			</p>

		</div>
	)
};
export let TitleComponent = function (title) {
	return (
		<div className={`l-column--1-1 l-flex l-flex--wrap`}>
			<picture className={`l-column--1-1 a-mar-auto a-text--center a-mar--minus-20`}>
				<img className={`a-image a-image--xs`} src={Bonseo.logo}/>
			</picture>
			<h2 className={`ml-block-edit-field__title a-text--brand a-mar-auto`}>{title}</h2>
		</div>);
};
export let BasicTitle = function (className, attributes, setAttributes) {
	return (<TextControl
		className={`${className}__title ${FieldClass}`}
		label={__('Título: ')}
		value={attributes.title}
		onChange={title => setAttributes({title})}
	/>);
};

export let BasicContent = function (className, attributes, setAttributes) {
	return (<RichText
		multiline="p"
		className={`${className}__content ${FieldClass}`}
		label={__('Contenido de bloque')}
		value={attributes.content}
		onChange={content => setAttributes({content})}
		placeholder={__('Introduce el contenido')}
		keepPlaceholderOnFocus={true}
	/>);
};


export let BasicSeoDescription = function (className, attributes, setAttributes) {
	return (<TextControl
		className={`${className}__description ${FieldClass}`}
		label={__('Descripción Seo')}
		value={attributes.description}
		onChange={description => setAttributes({description})}
	/>);
};


export let BasicClaim = function (className, attributes, setAttributes) {
	return (<TextControl
		className={`${className}__claim  ${FieldClass}`}
		label={__('Un texto reclamo')}
		value={attributes.claim}
		onChange={claim => setAttributes({claim})}
	/>);
};

export let BasicSubtitle = function (className, attributes, setAttributes) {
	return (<TextControl
		className={`${className}__subtitle  ${FieldClass}`}
		label={__('Un subtítulo')}
		value={attributes.subtitle}
		onChange={subtitle => setAttributes({subtitle})}
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
			html = __("Subir Imagen");
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


export let BasicMaxEntries = function (className, attributes, setAttributes) {
	return (<TextControl
		className={`${className}__max-entries  ${FieldClass}`}
		label={__('Cuántas entradas quieres mostrar: ')}
		type="number"
		value={attributes.max_entries}
		onChange={max_entries => setAttributes({max_entries})}
	/>);
};

export let BasicCta = function (className, attributes, setAttributes) {
	return (<TextControl
		className={`${className}__cta  ${FieldClass}`}
		label={__('Texto del botón')}
		value={attributes.cta}
		onChange={cta => setAttributes({cta})}
	/>);
};

export let BasicUrl = function (className, attributes, setAttributes) {
	return (<TextControl
		className={`${className}__url  ${FieldClass}`}
		label={__('Enlace para el botón: ')}
		value={attributes.url}
		onChange={url => setAttributes({url})}
	/>);
};


