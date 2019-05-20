const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Parallax Image');
const BlockUrl = __('parallax');

import {CoreKeywords, Icons, EditorClass, CategoryGroup} from '../settings';
import {
    BasicImage, DescriptionComponent,
    CommonsElements
} from '../services/basic';

registerBlockType('bonseo/block-bs-parallax', {
    title: BlockTitle,
    icon: Icons.pile,
    category: CategoryGroup,
    keywords: CoreKeywords,
    edit: function ({posts, className, attributes, setAttributes}) {
        return (
            <div className={EditorClass}>
                {BasicImage(className, attributes, setAttributes)}
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
