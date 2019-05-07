const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Opiniones de Clientes');
const BlockUrl = __('opiniones-clientes');

const {withSelect} = wp.data;
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BasicTitle, BasicMaxEntries, TitleComponent, DescriptionComponent, CommonsElements} from "../services/basic";
import {PostTypeSelection} from '../services/selects';
import {LoadingComponent} from "../services/ux";
import {PostTypes} from "../api/core";

registerBlockType('bonseo/block-bs-customer-opinions', {
	title: BlockTitle,
	icon: Icons.pencil,
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
				{TitleComponent(BlockTitle)}
				{DescriptionComponent(BlockUrl)}
				{BasicTitle(className, attributes, setAttributes)}
				{BasicMaxEntries(className, attributes, setAttributes)}
				{PostTypeSelection(className, attributes, setAttributes, types)}
                {CommonsElements(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	}
})
;
