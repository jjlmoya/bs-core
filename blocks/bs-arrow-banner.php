<?php

if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-arrow-banner';
register_block_type('bonseo/' . $block,
    array(
        'attributes' => array(
            'title' => array(
                'type' => 'string',
            ),
            'content' => array(
                'type' => 'string',
            ),
            'cta' => array(
                'type' => 'string',
            ),
            'url' => array(
                'type' => 'string',
            ),
            'className' => array(
                'type' => 'string',
            ),
            'brand' => array(
                'type' => 'string',
            ),
            'anchor' => array(
                'type' => 'string',
            )
        ),
        'render_callback' => 'render_bs_arrow_banner',
    )
);

function render_bs_arrow_banner($attributes)
{
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $content = isset($attributes['content']) ? $attributes['content'] : '';
    $cta = isset($attributes['cta']) ? $attributes['cta'] : '';
    $url = isset($attributes['url']) ? $attributes['url'] : '';
    $modifier = new ClassService($attributes['className'], $attributes['brand'], $attributes['anchor']);

    return '
		<section class="og-banner-arrow ' . $modifier->get_modifiers() . ' l-grid-column--full">
			<div class="og-banner-arrow__simple a-pad">
				<h2 class="a-text a-text--xl a-text--secondary a-text--center">
					' . $title . '
				</h2>
				<p class="a-text a-text--center a-text--secondary">
					' . $content . '
				</p>
			</div>
			<div class="og-banner-arrow__edge  l-flex l-flex--justify-center a-pad">
				<a href="' . $url . '" class="a-bg a-button a-button--rounded a-button--s a-button--secondary">' . $cta . '</a>
			</div>
		</section>';
}

