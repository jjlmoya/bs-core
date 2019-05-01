const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('List Vertical');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {LoadingComponent} from '../services/ux';
import {BasicTitle, BasicMaxEntries} from '../controller/basic';
import {PostTypes} from '../api/data';
import {BrandSelection, PostTypeSelection} from '../controller/selects';

registerBlockType('bonseo/block-bs-list-vertical', {
	title: BlockTitle,
	icon: Icons.vertical,
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
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	}
})
;
