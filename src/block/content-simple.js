import {Icons} from "../assets/icons";
import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {BasicContent, BasicTitle, CommonsElements, DescriptionComponent, TitleComponent} from "../services/basic";
import {HeadingSelection} from '../services/selects';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Contenido Simple');
const BlockUrl = __('contenido-simple');


registerBlockType('bonseo/block-bs-content-simple', {
    title: BlockTitle,
    icon: Icons.content,
    category: CategoryGroup,
    keywords: CoreKeywords,
    edit: function ({posts, className, attributes, setAttributes}) {
        return (
            <div className={EditorClass}>
                {TitleComponent(BlockTitle)}
                {DescriptionComponent(BlockUrl)}
                {BasicTitle(className, attributes, setAttributes)}
                {BasicContent(className, attributes, setAttributes)}
                {HeadingSelection(className, attributes, setAttributes)}
                {CommonsElements(className, attributes, setAttributes)}
            </div>
        );
    },
    save: function () {
        return null;
    }
})
;
