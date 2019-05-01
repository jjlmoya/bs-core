const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {SelectControl, TextControl} = wp.components;
const {withSelect} = wp.data;
const BlockTitle = __('Authors Extract');
import {CoreKeywords, Icons, CategoryGroup} from '../settings';

registerBlockType('bonseo/block-bs-authors-extract', {
	title: BlockTitle,
	icon: Icons.quote,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: withSelect((select) => {
		const {getPostTypes} = select('core');
		return {
			types: getPostTypes(),
		};
	})(function (props) {
		const {attributes, className, setAttributes} = props;
		var types = props.types;
		if (!props.types) {
			return "Loading...";
		}
		return (
			<div>
				<h2>{BlockTitle}</h2>
				<TextControl
					className={`${className}__title`}
					label={__('Elige título:')}
					value={attributes.title}
					onChange={title => setAttributes({title})}
				/>
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
			</div>
		);
	}),
	save: function () {
		return null;
	}
});
