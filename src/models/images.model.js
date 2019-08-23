export let GalleryComponent = function (className, attributes, setAttributes) {
    attributes.gallery = attributes.gallery || [];

    const updateGallery = () => {
        setAttributes({gallery: [...attributes.gallery]});

    };

    const onImageSelect = (imageObject, index) => {
        if (index) {
            attributes.gallery[index] = imageObject.sizes.full.url;
        } else {
            attributes.gallery.push(imageObject.sizes.full.url);
        }
        updateGallery()
    };

    const deleteImage = imageUrl => {
        console.log(imageUrl);
        attributes.gallery = attributes.gallery.filter(image => imageUrl !== image);
        updateGallery();
    };


    const drawImageButton = (open, image) => {
        if (!image) {
            return (<button className={'a-pad a-button a-button--s a-button--secondary'} onClick={open}>
                {__("Subir")}
            </button>);
        }
        return (
            <div className={'l-position'}>
                <div className={'l-position--absolute'} onClick={() => {deleteImage(image)}}>x</div>
                <button onClick={open}>
                    <img class="a-img a-img-masonry" src={image}/>
                </button>
            </div>);
    };

    return (
        <div className={'a-pad'}>
            <div className={'og-masonry'}>
                {[...attributes.gallery].map((image, index) =>
                    <MediaUpload
                        onSelect={(imageObject) => {
                            onImageSelect(imageObject, index)
                        }}
                        type="image"
                        value={image}
                        render={({open}) => (
                            drawImageButton(open, image)
                        )}
                    />
                )}
            </div>
            <MediaUpload
                onSelect={onImageSelect}
                type="image"
                value={false}
                render={({open}) => (
                    drawImageButton(open)
                )}
            />
        </div>
    );
};