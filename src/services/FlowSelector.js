const {Button, ButtonGroup} = wp.components;

export class FlowSelector {
    constructor(types) {
        this.types = types;
    }

    renderButtons() {
        return this.types.map(type => (
            <Button className={`button button--${type.id}`} onClick={type.onClick}>
                {type.id}
            </Button>)
        );
    }

    getTemplate() {
        return (
            <ButtonGroup>
                {this.renderButtons()}
            </ButtonGroup>
        )
    }
}