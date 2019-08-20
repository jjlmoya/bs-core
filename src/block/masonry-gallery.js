import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {CommonsElements, DescriptionComponent, GalleryComponent} from '../services/basic';
import {Icons} from "../assets/icons";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Masonry Gallery');
const BlockUrl = __('masonry-gallery');

registerBlockType('bonseo/block-bs-masonry-gallery', {
    title: BlockTitle,
    icon: Icons.feed,
    category: CategoryGroup,
    keywords: CoreKeywords,
    edit: function ({posts, className, attributes, setAttributes}) {
        return (
            <div className={EditorClass}>
                {GalleryComponent(className, attributes, setAttributes)}
                {DescriptionComponent(BlockUrl)}
                {CommonsElements(className, attributes, setAttributes)}
            </div>
        );
    },
    save: function () {
        return null;
    }
})
;
