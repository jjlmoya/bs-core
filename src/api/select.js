import {Brands, FieldClass, EmptyResult} from "../settings";

const {__} = wp.i18n;
const {SelectControl} = wp.components;


const setEmptyResult = function (map) {
    return [EmptyResult].concat(map);
};

export const BrandSelection = function (className, attributes, setAttributes) {
    return (<SelectControl
        label={`${__('Elige el brand, por defecto el de tu tema')}`}
        className={`${className}__brand ${FieldClass}`}
        value={attributes.brand}
        options={setEmptyResult(Brands)}
        onChange={brand => setAttributes({brand})}
    />);
};

export const CategorySelection = function (className, attributes, setAttributes, categories) {
    return (<SelectControl
        label={`${__('Elige categoría:')}`}
        className={`${className}__select  ${FieldClass}`}
        value={attributes.category}
        options={setEmptyResult(categories.map((category) => {
            return {
                label: category.name,
                value: category.id
            }
        }))}
        onChange={category => setAttributes({category})}
    />);
};

export const PostTypeSelection = function (className, attributes, setAttributes, types) {
    return (<SelectControl
        label={`${__('Elige tipo de Entradas')}`}
        className={`${className}__type ${FieldClass}`}
        value={attributes.type}
        options={setEmptyResult(types.map((type) => {
            return {
                label: type.name,
                value: type.slug
            }
        }))}
        onChange={type => setAttributes({type})}/>);
};

export const HeadingSelection = function (className, attributes, setAttributes) {
    var getOptions = function () {
        return setEmptyResult([
            {
                label: 1,
                value: 'h1',
            },
            {
                label: 2,
                value: 'h2',
            },
            {
                label: 3,
                value: 'h3',
            },
            {
                label: 4,
                value: 'h4',
            },
            {
                label: 5,
                value: 'h5',
            },
            {
                label: 6,
                value: 'h6',
            }]);
    };
    return (<SelectControl
        label={`${__('Importancia del Título')}`}
        className={`${className}__select ${FieldClass}`}
        value={attributes.heading}
        options={getOptions()}
        onChange={heading => setAttributes({heading})}/>);
};


export const PostSelection = function (className, attributes, setAttributes, posts) {
    return (<SelectControl
        label={`${__('Selecciona una entrada: ')}`}
        className={`${className}__post ${FieldClass}`}
        value={attributes.selectedPost}
        options={posts.map((post) => {
            return {
                label: post.title.raw,
                value: post.id
            }
        })}
        onChange={selectedPost => setAttributes({selectedPost})}
    />);
};


