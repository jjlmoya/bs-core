<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-title-brand';
$registers = new RegisterService(
    array('title', 'claim', 'content', 'image', 'brand', 'className', 'anchor')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_title_brand',
    )
);

function render_bs_title_brand($attributes)
{
    $block = new AttributesService($attributes);
    return '<section class="og-title-brand
                a-bg a-bg--gradient--light
                l-flex l-flex--direction-column l-grid-column--full
                bs_viewport a-mi a-mi--left ' . $block->get_modifiers() . '">
		<div class="og-title-brand__heading l-column--1-1">
			<h1 class="a-text a-text--bold a-text--secondary l-flex l-flex--direction-column a-text--center l-flex--align-center a-pad-20">
				<span class="og-title__claim l-column--1-2 l-column--mobile--1-1 a-text--m">' . $block->claim . '</span>
				<span class="og-title__title l-column--1-2 l-column--mobile--1-1 a-text--xl ">' . $block->title . '</span>
			</h1>
		</div>
		
		<div class="og-title-brand__content l-flex l-flex--direction-row l-flex--mobile--wrap">
			<div class="og-title-brand__content__description
						l-column--1-2 l-column--mobile--1-1 l-flex-item--align-center
						a-text--secondary a-pad-20">
				' . $block->content . '
			</div>
			<picture class="l-column--1-2 a-text--center l-column--mobile--1-1 a-pad-0 lazy">
				<img class="a-image l-column--1-2 "
				 src="' . $block->image . '">
			</picture>    
			</div>
		</section>';
}
