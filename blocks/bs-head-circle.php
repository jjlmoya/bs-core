<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-head-circle';
register_block_type('bonseo/' . $block,
    array(
        'attributes' => array(
            'title' => array(
                'type' => 'string',
            ),
            'claim' => array(
                'type' => 'string',
            ),
            'subtitle' => array(
                'type' => 'string',
            ),
            'image' => array(
                'type' => 'string',
            ),
            'className' => array(
                'type' => 'string',
            ),
            'anchor' => array(
                'type' => 'boolean',
            )

        ),
        'render_callback' => 'render_bs_head_circle',
    )
);

function render_bs_head_circle($attributes)
{
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $subtitle = isset($attributes['subtitle']) ? $attributes['subtitle'] : '';
    $claim = isset($attributes['claim']) ? $attributes['claim'] : '';
    $image = isset($attributes['image']) ? $attributes['image'] : '';
    $modifier = new ClassService($attributes);
    return '
		<section class="og-banner-outside-circle 
						l-flex l-flex--direction-column l-flex--justify-center l-grid-column--full 
						' .$modifier->get_modifiers() . '">
			<div class="l-column--1-1">
				<picture class="a-pad l-column--1-1 a-pad-0">
					<img data-target="" class="a-image l-column--1-1" src="' . $image . '">
				</picture>
			</div>
			<h1 class="ml-box ml-box--circle l-flex l-flex--align-center l-flex--justify-center l-flex--direction-column a-border a-border--fat a-border--primary a-mar-auto a-mar--minus-60 u-layer-0">
				<p class="a-text a-text--center a-text--xs">
					' . $claim . '
				</p>
				<p class="a-text  a-text--l  a-text--bold">
					' . $title . '
				</p>
				<p class="a-text a-text--center a-text--xs">
					' . $subtitle . '
				</p>
			</h1>
		</section>';
}




