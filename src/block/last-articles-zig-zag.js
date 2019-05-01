const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const {withSelect} = wp.data;
const BlockTitle = __('Last Articlez Zig Zag');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BasicTitle, BasicMaxEntries} from "../controller/basic";
import {BrandSelection, PostTypeSelection} from '../controller/selects';
import {LoadingComponent} from "../services/ux";
import {PostTypes} from "../api/data";


registerBlockType('bonseo/block-bs-last-articles-zig-zag', {
	title: BlockTitle,
	icon: Icons.list,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: withSelect((select) => {
		return {
			types: PostTypes(select),
		};
	})(function (props) {
		const {attributes, className, setAttributes} = props;
		var types = props.types;
		if (!props.types) {
			return LoadingComponent();
		}
		return (
			<div className={EditorClass}>
				<h2>{BlockTitle}</h2>
				{BasicTitle(className, attributes, setAttributes)}
				{BasicMaxEntries(className, attributes, setAttributes)}
				{PostTypeSelection(className, attributes, setAttributes, types)}
				<TextControl
					className={`${className}__cta`}
					label={__('Boton CTA')}
					value={attributes.cta}
					onChange={cta => setAttributes({cta})}
				/>
				<TextControl
					className={`${className}__words`}
					type="number"
					label={__('Palabras')}
					value={attributes.words}
					onChange={words => setAttributes({words})}
				/>
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	},
});
