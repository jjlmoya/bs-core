<?php
if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-product-curved';
$registers = new RegisterService(
    array('title', 'claim', 'cta', 'url', 'image', 'brand', 'className', 'anchor', 'isActionable')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_product_curved',
    )
);

function render_bs_product_curved($attributes)
{
    $block = new AttributesService($attributes);
    return '
		<div class="og-slider-product-curved a-bg
				   a-bg--gradient--light
				   l-grid-column--full
				   l-column--1-1 l-position a-mar--bottom
				   u-shadow--bottom ' . $block->get_modifiers() . '">
			   <picture class="l-column--1-1 a-pad-0">
				  <img data-target="" class="a-image og-slider-product-curved__image l-position--absolute l-position--absolute--center" src="' . $block->image . '">
			   </picture>
			   <div class="og-slider-product-curved__content">
				  <h1 class="a-text  a-text--xl  a-text a-text--center a-text--secondary a-pad">
					 ' . $block->title . '
				  </h1>
			   </div>
			   <div class="og-slider-product-curved__content--bottom">
				  <p class="a-text  a-text--xl  a-text a-text--center a-text--secondary a-pad">
					 ' . $block->claim . '
				  </p>
			   </div>
			   <a target="_blank" href="' . $block->url . '" class="a-button a-button--rounded og-slider-product-curved__button a-button--m a-button--secondary l-position--absolute">' . $block->cta . '</a>
	   </div>';
}


