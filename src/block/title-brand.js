const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Título Temático');
const BlockUrl = __('titlulo-tematico');
import {CoreKeywords, Icons, EditorClass, CategoryGroup} from '../settings';
import {
    BasicTitle, BasicContent, BasicImage, BasicClaim, TitleComponent, DescriptionComponent,
    CommonsElements
} from '../services/basic';

registerBlockType('bonseo/block-bs-title-brand', {
    title: BlockTitle,
    icon: Icons.tag,
    category: CategoryGroup,
    keywords: CoreKeywords,
    edit: function ({posts, className, attributes, setAttributes}) {
        return (
            <div className={EditorClass}>
                {TitleComponent(BlockTitle)}
                {DescriptionComponent(BlockUrl)}
                {BasicTitle(className, attributes, setAttributes)}
                {BasicClaim(className, attributes, setAttributes)}
                {BasicContent(className, attributes, setAttributes)}
                {BasicImage(className, attributes, setAttributes)}
                {CommonsElements(className, attributes, setAttributes)}
            </div>
        );
    },
    save: function () {
        return null;
    }
})
;
