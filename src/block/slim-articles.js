const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Artículos Slim');
import {CoreKeywords, Icons, EditorClass} from '../settings';
import {BrandSelection, CategorySelection, PostTypeSelection} from '../controller/selects';
import {BasicTitle, BasicMaxEntries} from '../controller/basic';
import {PostTypes, Categories} from '../api/data';
import {LoadingComponent} from '../services/ux';

registerBlockType('bonseo/block-bs-articles-slim', {
	title: BlockTitle,
	icon: Icons.feed,
	category: 'bonseo-blocks',
	keywords: CoreKeywords,

	edit: withSelect((select) => {
		return {
			categories: Categories(select),
			types: PostTypes(select)

		};
	})(function (props) {
		const {attributes, className, setAttributes} = props;
		if (!props.categories) {
			return LoadingComponent();
		}

		if (props.categories.length === 0) {
			return "No categories";
		}

		var categories = props.categories;
		var types = props.types;
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
})
;
