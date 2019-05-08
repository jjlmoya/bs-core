import {LoadingComponent} from "../services/ux";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Lista de Categoría');
const BlockUrl = __('lista-categoria');

import {CoreKeywords, Icons, EditorClass, CategoryGroup} from '../settings';
import {
    BasicTitle, BasicImage, BasicSubtitle, TitleComponent, DescriptionComponent,
    CommonsElements, GroupPostComponent
} from '../services/basic';
import {PostTypes, Categories} from "../api/core";


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
		return (
			<div className={EditorClass}>
				{TitleComponent(BlockTitle)}
				{DescriptionComponent(BlockUrl)}
				{BasicTitle(className, attributes, setAttributes)}
				{BasicSubtitle(className, attributes, setAttributes)}
				{BasicImage(className, attributes, setAttributes)}
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
