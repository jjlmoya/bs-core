const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Plain Card');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {LoadingComponent} from '../services/ux';
import {BasicMaxEntries} from '../controller/basic';
import {BrandSelection, PostTypeSelection} from '../controller/selects';
import {PostTypes} from '../api/data';


registerBlockType('bonseo/block-bs-plain-card', {
	title: BlockTitle,
	icon: Icons.pages,
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
