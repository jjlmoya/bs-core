<?php
if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-product-curved';
$registers = new RegisterService(
    array('title', 'claim', 'cta', 'url', 'image', 'brand', 'className', 'anchor')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_product_curved',
    )
);

function render_bs_product_curved($attributes)
{
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $claim = isset($attributes['claim']) ? $attributes['claim'] : '';
    $image = isset($attributes['image']) ? $attributes['image'] : '';
    $cta = isset($attributes['cta']) ? $attributes['cta'] : '';
    $url = isset($attributes['url']) ? $attributes['url'] : '';

    $modifier = new ClassService($attributes);

    return '
		<div class="og-slider-product-curved a-bg
				   a-bg--gradient--light
				   l-grid-column--full
				   l-column--1-1 l-position a-mar--bottom
				   u-shadow--bottom ' . $modifier->get_modifiers() . '">
			   <picture class="l-column--1-1 a-pad-0">
				  <img data-target="" class="a-image og-slider-product-curved__image l-position--absolute l-position--absolute--center" src="' . $image . '">
			   </picture>
			   <div class="og-slider-product-curved__content">
				  <h1 class="a-text  a-text--xl  a-text a-text--center a-text--secondary a-pad">
					 ' . $title . '
				  </h1>
			   </div>
			   <div class="og-slider-product-curved__content--bottom">
				  <p class="a-text  a-text--xl  a-text a-text--center a-text--secondary a-pad">
					 ' . $claim . '
				  </p>
			   </div>
			   <a target="_blank" href="' . $url . '" class="a-button a-button--rounded og-slider-product-curved__button a-button--m a-button--secondary l-position--absolute">' . $cta . '</a>
	   </div>';
}


