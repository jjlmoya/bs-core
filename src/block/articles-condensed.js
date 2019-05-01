const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {SelectControl, TextControl} = wp.components;
const {withSelect} = wp.data;
const BlockTitle = __('Articles Condensed');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {LoadingComponent} from '../services/ux';
import {BasicTitle} from "../controller/basic";
import {BrandSelection} from '../controller/selects';

registerBlockType('bonseo/block-bs-articles-condensed', {
	title: BlockTitle,
	icon: Icons.pile,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: withSelect((select) => {
		const {getPostTypes} = select('core');
		return {
			types: getPostTypes(),
		};
	})( function (props) {
		const {attributes, className, setAttributes} = props;
		var types = props.types;
		if (!props.types) {
			return LoadingComponent();
		}
		return (
			<div className={EditorClass}>
				<h2>{BlockTitle}</h2>
				{BasicTitle(className, attributes, setAttributes)}
				<TextControl
					className={`${className}__max_entries`}
					label={__('Cuántas entradas:')}
					type="number"
					value={attributes.max_entries}
					onChange={max_entries => setAttributes({max_entries})}
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
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	}
});
