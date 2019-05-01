const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const BlockTitle = __('Last Articlez Zig Zag');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BasicTitle, BasicMaxEntries} from "../controller/basic";
import {BrandSelection, PostTypeSelection} from '../controller/selects';


registerBlockType('bonseo/block-bs-last-articles-zig-zag', {
	title: BlockTitle,
	icon: Icons.list,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className={EditorClass}>
				<h2>{BlockTitle}</h2>
				{BasicTitle(className, attributes, setAttributes)}
				{BasicMaxEntries(className, attributes, setAttributes)}
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
	},
	save: function () {
		return null;
	},
});
