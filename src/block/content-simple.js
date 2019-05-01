import {BrandSelection} from "../controller/selects";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Content Simple');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BasicTitle, BasicContent} from "../controller/basic";
import {BrandSelection, HeadingSelection} from '../controller/selects';



registerBlockType('bonseo/block-bs-content-simple', {
	title: BlockTitle,
	icon: Icons.content,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className={EditorClass}>
				<h2>{BlockTitle}</h2>
				{BasicTitle(className, attributes, setAttributes)}
				{BasicContent(className, attributes, setAttributes)}
				{HeadingSelection(className, attributes, setAttributes)}
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
