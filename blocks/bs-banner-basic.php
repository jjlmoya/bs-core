<?php

if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-banner-basic';

$registers = new RegisterService(
    array_merge(
        ComponentSettings::COMMONS_PARAMETERS,
        ComponentSettings::SEO_PARAMETERS,
        ComponentSettings::BANNER_PARAMETERS
    )
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_basic_banner',
    )
);

function render_bs_basic_banner($attributes)
{
    $block = new AttributesService($attributes);
    $components = new ComponentService();

    return '
		<section class="og-banner-basic
		 				l-flex l-flex--justify-space-around 
		 				a-bg a-pad l-flex--wrap l-grid-column--full ' . $block->get_modifiers() . '">
			<div class="og-banner-basic-content l-flex l-flex--direction-column a-pad-20">
				<h2 class="a-text a-text--xl a-text--secondary ">
					' . $block->title . '
				</h2>
				<p class="a-text a-text--secondary">
					' . $block->description . '
				</p>
			</div>
			 ' . $components->get_actionable_url(
            'a-button a-button--rounded a-button--s a-button--secondary a-text--m l-flex-item--align-center',
            $block->url,
            $block->cta,
            $block->isActionable, false, '') . '
		</section>';
}

