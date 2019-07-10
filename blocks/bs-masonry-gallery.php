<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-masonry-gallery';
$registers = new RegisterService(
    array('gallery')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_masonry_gallery',
    )
);

function render_bs_masonry_gallery_elements($image)
{
    return '<div class="og-masonry__item">
                <img class="a-img a-img-masonry" src="' . $image . '" />
            </div>';
}

function render_bs_masonry_gallery($attributes)
{
    $block = new AttributesService($attributes);
    return '<div class="og-masonry">
                ' . implode("", array_map("render_bs_masonry_gallery_elements", $block->gallery)) . '
            </div>';
}
