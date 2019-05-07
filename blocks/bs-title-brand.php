<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-title-brand';
register_block_type('bonseo/' . $block,
    array(
        'attributes' => array(
            'title' => array(
                'type' => 'string',
            ),
            'claim' => array(
                'type' => 'string',
            ),
            'content' => array(
                'type' => 'string',
            ),
            'image' => array(
                'type' => 'string',
            ),
            'brand' => array(
                'type' => 'string',
            ),
            'className' => array(
                'type' => 'string',
            ),
            'anchor' => array(
                'type' => 'string',
            )
        ),
        'render_callback' => 'render_bs_title_brand',
    )
);

function render_bs_title_brand($attributes)
{
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $content = isset($attributes['content']) ? $attributes['content'] : '';
    $claim = isset($attributes['claim']) ? $attributes['claim'] : '';
    $image = isset($attributes['image']) ? $attributes['image'] : '';
    $modifier = new ClassService($attributes['className'], $attributes['brand'], $attributes['anchor']);

    return '<section class="og-title-brand
                a-bg a-bg--gradient--light
                l-flex l-flex--direction-column l-grid-column--full
                bs_viewport a-mi a-mi--left ' . $modifier->get_modifiers() . '">
		<div class="og-title-brand__heading l-column--1-1">
			<h1 class="a-text a-text--bold a-text--secondary l-flex l-flex--direction-column a-text--center l-flex--align-center a-pad-20">
				<span class="og-title__claim l-column--1-2 l-column--mobile--1-1 a-text--m">' . $claim . '</span>
				<span class="og-title__title l-column--1-2 l-column--mobile--1-1 a-text--xl ">' . $title . '</span>
			</h1>
		</div>
		
		<div class="og-title-brand__content l-flex l-flex--direction-row l-flex--mobile--wrap">
			<div class="og-title-brand__content__description
						l-column--1-2 l-column--mobile--1-1 l-flex-item--align-center
						a-text--secondary a-pad-20">
				' . $content . '
			</div>
			<picture class="l-column--1-2 a-text--center l-column--mobile--1-1 a-pad-0 lazy">
				<img class="a-image l-column--1-2 "
				 src="' . $image . '">
			</picture>    
			</div>
		</section>';
}
