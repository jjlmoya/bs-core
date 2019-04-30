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
