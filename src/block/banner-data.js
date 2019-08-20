import {CommonsElements, DescriptionComponent, TitleComponent} from "../services/basic";
import {CategoryGroup, CoreKeywords, EditorClass, FieldClass} from '../settings';
import {Icons} from "../assets/icons";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const BlockTitle = __('Banner de Datos');
const BlockUrl = __('banner-datos');


registerBlockType('bonseo/block-bs-banner-data', {
	title: BlockTitle,
	icon: Icons.circles,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className={EditorClass}>
				{TitleComponent(BlockTitle)}
				{DescriptionComponent(BlockUrl)}
				<TextControl
					className={`${className}__counter1 ${FieldClass}`}
					label={__('Contador 1')}
					type="number"
					value={attributes.counter1}
					onChange={counter1 => setAttributes({counter1})}
				/>
				<TextControl
					className={`${className}__name1 ${FieldClass}`}
					label={__('Nombre 1')}
					type="text"
					value={attributes.name1}
					onChange={name1 => setAttributes({name1})}
				/>
				<TextControl
					className={`${className}__counter2 ${FieldClass}`}
					label={__('Contador 2')}
					type="number"
					value={attributes.counter2}
					onChange={counter2 => setAttributes({counter2})}
				/>
				<TextControl
					className={`${className}__name2 ${FieldClass}`}
					label={__('Nombre 2')}
					type="text"
					value={attributes.name2}
					onChange={name2 => setAttributes({name2})}
				/>
				<TextControl
					className={`${className}__counter3 ${FieldClass}`}
					label={__('Contador 3')}
					type="number"
					value={attributes.counter3}
					onChange={counter3 => setAttributes({counter3})}
				/>
				<TextControl
					className={`${className}__name3 ${FieldClass}`}
					label={__('Nombre 3')}
					type="text"
					value={attributes.name3}
					onChange={name3 => setAttributes({name3})}
				/>
                {CommonsElements(className, attributes, setAttributes)}
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
