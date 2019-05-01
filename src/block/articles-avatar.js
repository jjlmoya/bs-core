const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {SelectControl, TextControl} = wp.components;
const {withSelect} = wp.data;
const BlockTitle = __('Avatar Articles');
import {CoreKeywords, Icons, CategoryGroup} from '../settings';

registerBlockType('bonseo/block-bs-articles-avatar', {
	title: BlockTitle,
	icon: Icons.writer,
	category: CategoryGroup,
	keywords: CoreKeywords,

	edit: withSelect((select) => {
		const {getEntityRecords, getPostTypes} = select('core');
		const query = {per_page: -1, hide_empty: true};
		return {
			categories: getEntityRecords('taxonomy', 'category', query),
			types: getPostTypes(),
			brands: wp.apiRequest('/bonseo/v1/brand')
		};
	})(function (props) {
		const {attributes, className, setAttributes, isSelected} = props;
		if (!props.categories) {
			return "Loading...";
		}

		if (props.categories.length === 0) {
			return "No categories";
		}
		var categories = [''].concat(props.categories);
		var types = [''].concat(props.types);

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
					className={`${className}__max-entries`}
					label={__('Cuántas entradas:')}
					type="number"
					value={attributes.max_entries}
					onChange={max_entries => setAttributes({max_entries})}
				/>
				<SelectControl
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
