const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Masonry Gallery');
const BlockUrl = __('masonry-gallery');

import {CoreKeywords, Icons, EditorClass, CategoryGroup} from '../settings';
import {
    GalleryComponent, DescriptionComponent,
    CommonsElements
} from '../services/basic';

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
