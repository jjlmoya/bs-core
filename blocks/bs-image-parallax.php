<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-parallax';
$registers = new RegisterService(
    array('image', 'className', 'brand')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_parallax'
    )
);

function render_bs_parallax($attributes)
{
    $block = new AttributesService($attributes);
    return '
	<div class="a-image--parallax l-grid-column--full a-mar ' . $block->get_modifiers() . '" 
	     style="--img-parallax: url(' . $block->image . ');"></div>
	';
}