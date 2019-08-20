export class PostFlow {
    constructor(setAttributes) {
        this.id = 'post';
        this.set = setAttributes
    }

    onClick() {
        this.set({flow: this.id});
    }

    getModel() {
        return {
            id: this.id,
            onClick: this.onClick.bind(this)
        }
    }
}

