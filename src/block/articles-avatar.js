const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {SelectControl, TextControl} = wp.components;
const {withSelect} = wp.data;
const BlockTitle = __('Avatar Articles');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {LoadingComponent} from '../services/ux';
import {BasicTitle, BasicMaxEntries} from "../controller/basic";
import {BrandSelection, PostTypeSelection, CategorySelection} from '../controller/selects';

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
			return LoadingComponent();
		}

		if (props.categories.length === 0) {
			return "No categories";
		}
		var categories = [''].concat(props.categories);
		var types = [''].concat(props.types);

		return (
			<div className={EditorClass}>
				<h2>{BlockTitle}</h2>
				{BasicTitle(className, attributes, setAttributes)}
				{BasicMaxEntries(className, attributes, setAttributes)}
				{CategorySelection(className, attributes, setAttributes, categories)}
				{PostTypeSelection(className, attributes, setAttributes, types)}
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	}
});
