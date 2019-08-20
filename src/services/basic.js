import {CategorySelection, PostTypeSelection, BrandSelection} from "./selects";
import {FieldClass, Bonseo} from '../settings';
import {Icons} from "../assets/icons";

const {TextControl, ToggleControl} = wp.components;
const {MediaUpload, RichText} = wp.editor;
const {__} = wp.i18n;

export const GroupPostComponent = function (className, attributes, setAttributes, options) {
    return (
        <div className={`l-flex l-flex--align-end`}>
            {BasicMaxEntries(className, attributes, setAttributes)}
            {CategorySelection(className, attributes, setAttributes, options.categories)}
            {PostTypeSelection(className, attributes, setAttributes, options.types)}
        </div>
    );
};

export const BasicPlainContent = function (className, attributes, setAttributes) {
    return (
        <TextControl
            className={`${className}__content ${FieldClass}`}
            label={__('Frase del banner')}
            value={attributes.content}
            onChange={content => setAttributes({content})}
        />
    )
};


export const BasicWords = function (className, attributes, setAttributes) {
    return (
        <TextControl
            className={`${className}__words ${FieldClass}`}
            type="number"
            label={__('Palabras')}
            value={attributes.words}
            onChange={words => setAttributes({words})}
        />
    )
};


export const DescriptionComponent = function (url) {
    return (
        <a className={`l-position--absolute l-position--absolute--top-right`} href={Bonseo.path + url}>
            {Icons.infoIcon()}
        </a>
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

export let ToggleAnchor = function (className, attributes, setAttributes) {
    return (<ToggleControl
        className={`${className}__anchor ${FieldClass}`}
        label={__('Anchor')}
        checked={attributes.anchor}
        onChange={() => setAttributes({anchor: !attributes.anchor})}
    />);
}

export let ToggleLink = function (className, attributes, setAttributes) {
    return (<ToggleControl
        className={`${className}__actionable ${FieldClass}`}
        label={__('¿Enlazar?')}
        checked={attributes.isActionable !== undefined ? attributes.isActionable : true}
        onChange={() => setAttributes({isActionable: !attributes.isActionable})}
    />);
}

export let CommonsElements = function (className, attributes, setAttributes) {
    return (
        <div className={`l-flex l-flex--align-end`}>
            {BrandSelection(className, attributes, setAttributes)}
            {ToggleAnchor(className, attributes, setAttributes)}
            {ToggleLink(className, attributes, setAttributes)}
        </div>
    );
};


export let GalleryComponent = function (className, attributes, setAttributes) {
    attributes.gallery = attributes.gallery || [];

    const updateGallery = () => {
        setAttributes({gallery: [...attributes.gallery]});

    };

    const onImageSelect = (imageObject, index) => {
        if (index) {
            attributes.gallery[index] = imageObject.sizes.full.url;
        } else {
            attributes.gallery.push(imageObject.sizes.full.url);
        }
        updateGallery()
    };

    const deleteImage = imageUrl => {
        console.log(imageUrl);
        attributes.gallery = attributes.gallery.filter(image => imageUrl !== image);
        updateGallery();
    };


    const drawImageButton = (open, image) => {
        if (!image) {
            return (<button className={'a-pad a-button a-button--s a-button--secondary'} onClick={open}>
                {__("Subir")}
            </button>);
        }
        return (
        <div className={'l-position'}>
            <div className={'l-position--absolute'} onClick={() => {deleteImage(image)}}>x</div>
            <button onClick={open}>
                <img class="a-img a-img-masonry" src={image}/>
            </button>
        </div>);
    };

    return (
        <div className={'a-pad'}>
            <div className={'og-masonry'}>
                {[...attributes.gallery].map((image, index) =>
                    <MediaUpload
                        onSelect={(imageObject) => {
                            onImageSelect(imageObject, index)
                        }}
                        type="image"
                        value={image}
                        render={({open}) => (
                            drawImageButton(open, image)
                        )}
                    />
                )}
            </div>
            <MediaUpload
                onSelect={onImageSelect}
                type="image"
                value={false}
                render={({open}) => (
                    drawImageButton(open)
                )}
            />
        </div>
    );
};