import {Icons} from "../assets/icons";
import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {
    BasicClaim,
    BasicContent,
    BasicImage,
    BasicTitle,
    CommonsElements,
    DescriptionComponent,
    TitleComponent
} from '../services/basic';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Título Temático');
const BlockUrl = __('titulo-tematico');



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
