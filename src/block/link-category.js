import {LoadingComponent} from "../services/ux";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Link Category');
import {CoreKeywords, Icons, EditorClass, CategoryGroup} from '../settings';
import {BrandSelection, CategorySelection, PostTypeSelection} from '../controller/selects';
import {BasicTitle, BasicImage, BasicSubtitle} from '../controller/basic';
import {PostTypes, Categories} from "../api/data";


registerBlockType('bonseo/block-bs-link-category', {
	title: BlockTitle,
	icon: Icons.articles,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: withSelect((select) => {
		return {
			types: PostTypes(select),
			categories: Categories(select)
		};
	})(function (props) {
		const {attributes, className, setAttributes} = props;
		if (!props.types || !props.categories) {
			return LoadingComponent();
		}
		return (<div className="">
				<h2>{BlockTitle}</h2>
				<div className={EditorClass}>
					{BasicTitle(className, attributes, setAttributes)}
					{BasicSubtitle(className, attributes, setAttributes)}
					{BrandSelection(className, attributes, setAttributes)}
					{BasicImage(className, attributes, setAttributes)}
					{CategorySelection(className, attributes, setAttributes, props.categories)}
					{PostTypeSelection(className, attributes, setAttributes, props.types)}
				</div>
			</div>
		);
	}),
	save: function () {
		return null;
	}
})
;
