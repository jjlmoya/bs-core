<?php

if (!defined('ABSPATH')) {
	exit;
}
$block = 'block-bs-banner-basic';

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
				'type' => 'string'
			)

		),
		'render_callback' => 'render_bs_basic_banner',
	)
);

function render_bs_basic_banner($attributes)
{
	$class = isset($attributes['className']) ? ' ' . $attributes['className'] : '';
	$title = isset($attributes['title']) ? $attributes['title'] : '';
	$content = isset($attributes['content']) ? $attributes['content'] : '';
	$cta = isset($attributes['cta']) ? $attributes['cta'] : '';
	$url = isset($attributes['url']) ? $attributes['url'] : '';

	return '
		<section class="og-banner-basic l-flex l-flex--justify-space-around a-bg a-pad l-flex--wrap l-grid-column--full ' . $class . '">
			<div class="og-banner-basic-content l-flex l-flex--direction-column a-pad-20">
				<h2 class="a-text a-text--xl a-text--secondary ">
					' . $title . '
				</h2>
				<p class="a-text a-text--secondary">
					' . $content . '
				</p>
			</div>
			<a href="' . $url . '" class="a-button a-button--rounded a-button--s a-button--secondary a-text--m l-flex-item--align-center">
				' . $cta . '
			</a>
		</section>';
}
