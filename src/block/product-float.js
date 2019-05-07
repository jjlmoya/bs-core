import {CommonsElements, DescriptionComponent, TitleComponent} from "../services/basic";

const {withSelect} = wp.data;
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Producto Flotante');
const BlockUrl = __('producto-flotante');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {PostSelection} from '../services/selects';
import {PostByType} from "../api/core";
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
            restaurants: PostByType(select, 'bs-restaurant'),
            entries: PostByType(select, 'post')
        };
    })(function (props) {
        const {attributes, className, setAttributes, accommodations, pois, restaurants, entries} = props;
        let posts;
        if (!props.pois || !props.restaurants || !props.accommodations || !props.entries) {
            return LoadingComponent();
        }
        if (pois.length === 0 &&
            accommodations.length === 0 &&
            restaurants.length === 0 &&
            entries.length === 0) {
            return (
                <div>
                    <h3>No hay Posts</h3>
                    <p>Este módulo necesita Posts para funcionar.</p>
                </div>);
        } else {
            posts = pois.concat(accommodations).concat(restaurants).concat(entries);
        }
        return (
            <div className={EditorClass}>
                {TitleComponent(BlockTitle)}
                {DescriptionComponent(BlockUrl)}
                {PostSelection(className, attributes, setAttributes, posts)}
                {CommonsElements(className, attributes, setAttributes)}
            </div>
        );
    }),
    save: function () {
        return null;
    }
});
