import {Icons} from "../assets/icons";
import {CategoryGroup, CoreKeywords, EditorClass} from '../settings';
import {LoadingComponent} from '../models/loading.model';
import {BasicTitle, CommonsElements, DescriptionComponent, GroupPostComponent, TitleComponent} from "../services/basic";
import {Categories, PostTypes} from "../api/core";


const {Button, ButtonGroup} = wp.components;
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {withSelect} = wp.data;
const BlockTitle = __('Artículos con Avatar');
const BlockUrl = __('articulos-avatar');


registerBlockType('bonseo/block-bs-articles-avatar', {
    title: BlockTitle,
    icon: Icons.writer,
    category: CategoryGroup,
    keywords: CoreKeywords,
    edit: withSelect((select) => {
        return {
            categories: Categories(select),
            types: PostTypes(select)
        };
    })(function (props) {
        const {attributes, className, setAttributes} = props;
        const getPostFlow = () => {
            return (
                <div className={EditorClass}>
                    {TitleComponent(BlockTitle)}
                    {DescriptionComponent(BlockUrl)}
                    {BasicTitle(className, attributes, setAttributes)}
                    {GroupPostComponent(className, attributes, setAttributes, {
                        types: props.types,
                        categories: props.categories
                    })}
                    {CommonsElements(className, attributes, setAttributes)}
                </div>
            );
        };

        if (!props.categories || !props.types) {
            return LoadingComponent();
        }

        return getPostFlow();

        /*TODO: ACTIVE_FLOW
         const flows = new FlowSelector([
            new Flows.Image(setAttributes).getModel(),
            new Flows.Post(setAttributes).getModel()
        ], attributes, className, setAttributes);
        if (hasAttributes(attributes) || !attributes.flow) {
            return flows.getTemplate();
        }

        if (attributes.flow === 'image') {
            return (<div>
                image
            </div>)
        }

        if (attributes.flow === 'post') {
            return getPostFlow();
        }
        */
    }),
    save: function () {
        return null;
    }
});
