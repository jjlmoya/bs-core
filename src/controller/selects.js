import {Brands} from "../settings";

const {SelectControl} = wp.components;

export let BrandSelection = function (className, attributes, setAttributes) {
	return (<SelectControl
		label="Elige el brand, por defecto el de tu tema"
		className={`${className}__brand`}
		value={attributes.brand}
		options={Brands}
		onChange={brand => setAttributes({brand})}
	/>);
};


export let CategorySelection = function (className, attributes, setAttributes, categories) {
	return (<SelectControl
		label="categoría"
		className={`${className}__select`}
		value={attributes.category}
		options={categories.map((category) => {
			return {
				label: category.name,
				value: category.id
			}
		})}
		onChange={category => setAttributes({category})}
	/>);
};


export let PostTypeSelection = function (className, attributes, setAttributes, types) {
	return (<SelectControl
		label="Tipo de Post"
		className={`${className}__type`}
		value={attributes.type}
		options={types.map((type) => {
			return {
				label: type.name,
				value: type.slug
			}
		})}
		onChange={type => setAttributes({type})} />);
};

export let HeadingSelection = function (className, attributes, setAttributes) {
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
	return (<SelectControl
		label="Heading"
		className={`${className}__select`}
		value={attributes.heading}
		options={getOptions()}
		onChange={heading => setAttributes({heading})}/>);
};