import {BrandSelection} from "../controller/selects";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const BlockTitle = __('Customer Opinions');
import {CoreKeywords, Icons, CategoryGroup, EditorClass} from '../settings';
import {BasicTitle, BasicMaxEntries} from "../controller/basic";
import {BrandSelection} from '../controller/selects';



registerBlockType('bonseo/block-bs-customer-opinions', {
	title: BlockTitle,
	icon: Icons.pencil,
	category: CategoryGroup,
	keywords: CoreKeywords,
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div className={EditorClass}>
				<h2>{BlockTitle}</h2>
				{BasicTitle(className, attributes, setAttributes)}
				{BasicMaxEntries(className, attributes, setAttributes)}
				{BrandSelection(className, attributes, setAttributes)}
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
