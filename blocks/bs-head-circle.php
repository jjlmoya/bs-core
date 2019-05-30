<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-head-circle';
$registers = new RegisterService(
    array('title', 'claim', 'subtitle', 'image', 'className', 'anchor', 'brand', 'isActionable')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_head_circle',
    )
);

function render_bs_head_circle($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    return '
		<section class="og-banner-outside-circle 
						l-flex l-flex--direction-column l-flex--justify-center l-grid-column--full 
						' . $block->get_modifiers() . '">
			<div class="l-column--1-1">
				<picture class="a-pad l-column--1-1 a-pad-0">
					<img data-target="" class="a-image l-column--1-1" src="' . $block->image . '">
				</picture>
			</div>
			<h1 class="ml-box ml-box--circle l-flex l-flex--align-center l-flex--justify-center l-flex--direction-column a-border a-border--fat a-border--primary a-mar-auto a-mar--minus-60 u-layer-0">
				<p class="a-text a-text--center a-text--xs">
					' . $block->claim . '
				</p>
				<p class="a-text a-text--center a-text--l  a-text--bold">
					' . $block->title . '
				</p>
				<p class="a-text a-text--center a-text--xs">
					' . $block->subtitle . '
				</p>
			</h1>
		</section>';
}




