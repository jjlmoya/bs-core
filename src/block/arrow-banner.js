const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Banner Flecha');
const BlockUrl = __('banner-flecha');

import {Icons} from "../assets/icons";
import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {
    BasicCta,
    BasicPlainContent,
    BasicTitle,
    BasicUrl,
    CommonsElements,
    DescriptionComponent,
    TitleComponent
} from "../services/basic";

registerBlockType('bonseo/block-bs-arrow-banner', {
    title: BlockTitle,
    icon: Icons.down,
    category: CategoryGroup,
    keywords: CoreKeywords,
    edit: function ({posts, className, attributes, setAttributes}) {
        return (
            <div className={EditorClass}>
                {TitleComponent(BlockTitle)}
                {DescriptionComponent(BlockUrl)}
                {BasicTitle(className, attributes, setAttributes)}
                {BasicCta(className, attributes, setAttributes)}
                {BasicUrl(className, attributes, setAttributes)}
                {BasicPlainContent(className, attributes, setAttributes)}
                {CommonsElements(className, attributes, setAttributes)}
            </div>
        );
    },
    save: function () {
        return null;
    }
});
