<?php

if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-arrow-banner';
$registers = new RegisterService(
    array('title', 'content', 'cta', 'url', 'className', 'brand', 'anchor')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_arrow_banner',
    )
);

function render_bs_arrow_banner($attributes)
{
    $block = new AttributesService($attributes);
    return '
		<section class="og-banner-arrow ' . $block->get_modifiers() . ' l-grid-column--full">
			<div class="og-banner-arrow__simple a-pad">
				<h2 class="a-text a-text--xl a-text--secondary a-text--center">
					' . $block->title . '
				</h2>
				<p class="a-text a-text--center a-text--secondary">
					' . $block->content . '
				</p>
			</div>
			<div class="og-banner-arrow__edge  l-flex l-flex--justify-center a-pad">
				<a href="' . $block->url . '" class="a-bg a-button a-button--rounded a-button--s a-button--secondary">' . $block->cta . '</a>
			</div>
		</section>';
}

