const {withSelect} = wp.data;
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Product Float');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BrandSelection, PostSelection} from '../controller/selects';
import {PostByType} from "../api/data";
import {LoadingComponent} from "../services/ux";

registerBlockType('bonseo/block-bs-product-float', {
	title: BlockTitle,
	icon: Icons.tag,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: withSelect((select) => {
		return {
			accommodations: PostByType(select, 'bs-accommodation'),
			pois: PostByType(select, 'bs-poi'),
			restaurants: PostByType(select, 'bs-restaurant')
		};
	})(function (props) {
		const {attributes, className, setAttributes, accommodations, pois, restaurants} = props;
		let posts;
		if (!props.pois || !props.restaurants || !props.accommodations) {
			return LoadingComponent();
		}
		if (pois.length === 0 &&
			accommodations.length === 0 &&
			restaurants.length === 0) {
			return (
				<div>
					<h3>No hay Posts</h3>
					<p> Este módulo necesita Posts para funcionar.</p>
				</div>);
		} else {
			posts = pois.concat(accommodations).concat(restaurants);
		}
		return (
			<div className={EditorClass}>
				<h2> {BlockTitle} </h2>
				{PostSelection(className, attributes, setAttributes, posts)}
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	}),
	save: function () {
		return null;
	}
});