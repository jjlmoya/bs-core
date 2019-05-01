const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Slider Simple');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {LoadingComponent} from '../services/ux';
import {BasicMaxEntries, BasicCta} from "../controller/basic";
import {BrandSelection, PostTypeSelection} from '../controller/selects';
import {PostTypes} from '../api/data';

registerBlockType('bonseo/block-bs-slider-simple', {
	title: BlockTitle,
	icon: Icons.slides,
	category: CategoryGroup,
	keywords: CoreKeywords,

	edit: withSelect((select) => {
		return {
			types: PostTypes(select),
		};
	})(function (props) {
		const {attributes, className, setAttributes} = props;
		if (!props.types) {
			return LoadingComponent();
		}
		return (
			<div className={EditorClass}>
				<h2>{BlockTitle}</h2>
				{BasicMaxEntries(className, attributes, setAttributes)}
				{BasicCta(className, attributes, setAttributes)}
				{PostTypeSelection(className, attributes, setAttributes, props.types)}
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	}
});
