export class ImageFlow {
    constructor(setAttributes) {
        this.id = 'image';
        this.set = setAttributes;
    }

    onClick() {
        this.set({flow: this.id});
    }

    getModel() {
        return {
            id: this.id,
            onClick: this.onClick
        }
    }
}

