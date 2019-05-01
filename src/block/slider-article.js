const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Slider Article');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BrandSelection, PostTypeSelection} from '../controller/selects';
import {BasicTitle, BasicImage} from '../controller/basic';
import {PostTypes} from '../api/data';
import {LoadingComponent} from '../services/ux';

registerBlockType('bonseo/block-bs-slider-article', {
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
				{BasicTitle(className, attributes, setAttributes)}
				{PostTypeSelection(className, attributes, setAttributes, props.types)}
				{BasicImage(className, attributes, setAttributes)}
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	}
})
;