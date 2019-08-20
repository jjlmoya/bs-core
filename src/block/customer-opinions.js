import {Icons} from "../assets/icons";
import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {BasicTitle, CommonsElements, DescriptionComponent, GroupPostComponent, TitleComponent} from "../services/basic";
import {LoadingComponent} from '../models/loading.model';
import {Categories, PostTypes} from "../api/core";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Opiniones de Clientes');
const BlockUrl = __('opiniones-clientes');
const {withSelect} = wp.data;



registerBlockType('bonseo/block-bs-customer-opinions', {
	title: BlockTitle,
	icon: Icons.pencil,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: withSelect((select) => {
        return {
            categories: Categories(select),
            types: PostTypes(select)
        };
	})(function (props) {
		const {attributes, className, setAttributes} = props;
        if (!props.categories || !props.types) {
            return LoadingComponent();
        }
		return (
			<div className={EditorClass}>
				{TitleComponent(BlockTitle)}
				{DescriptionComponent(BlockUrl)}
				{BasicTitle(className, attributes, setAttributes)}
                {GroupPostComponent(className, attributes, setAttributes, {
                    types: props.types,
                    categories: props.categories
                })}
                {CommonsElements(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	}
})
;
