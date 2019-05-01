<?php

if (!defined('ABSPATH')) {
	exit;
}
$block = 'block-bs-customer-opinions';
register_block_type('bonseo/' . $block,
	array(
		'attributes' => array(
			'title' => array(
				'type' => 'string',
			),
			'max_entries' => array(
				'type' => 'string',
			),
			'className' => array(
				'type' => 'string',
			)
		),
		'render_callback' => 'render_bs_customer_opinions',
	)
);

function render_bs_customer_opinions_render($opinions)
{
	$html = '';
	while ($opinions->have_posts()) : $opinions->the_post();
		$brand = get_post_meta(get_the_ID(), 'bs_theme_brand', TRUE);
		$title = get_the_title();
		$content = get_the_content();
		$image = get_the_post_thumbnail_url(get_the_ID());
		$brand = isset($brand) ? $brand : '';
		$html .= '
			<div class="ml-card-testimony 
						l-flex l-flex--justify-center l-flex--mobile--direction-column l-column--1-2 l-column--mobile--1-1
						a-mar u-shadow--bottom l-flex--align-center ' . $brand . '">
				<picture class="a-pad">
					<img class="a-image a-image--avatar " src="' . esc_url($image) . '">
				</picture>
				<div class="ml-card-testimony__content l-flex l-flex--direction-column l-flex--align-center a-pad">
					<h3 class="a-text a-text--s  a-text--bold l-flex-item--align-start">
					' . esc_html($title) . '
					</h3>
					<p class="a-text l-flex-item--align-start">
						' . $content . '
					</p>
				</div>
			</div>
		';
		unset($post);
	endwhile;
	return $html;
}

function render_bs_customer_opinions($attributes)
{
	$class = isset($attributes['className']) ? ' ' . $attributes['className'] : '';
	$max_opinions = isset($attributes['max_entries']) ? $attributes['max_entries'] : 3;
	$title = isset($attributes['title']) ? $attributes['title'] : '';
	$args = array(
		'post_type' => 'opinion',
		'post_status' => 'publish',
		'posts_per_page' => $max_opinions
	);
	$opinions = new WP_Query($args);
	if (empty($opinions)) {
		return "";
	}

	return '
		<section class="og-block-testimony a-pad-40 ' . $class . '">
			<h2 class="a-text a-text--xl  ">
        		' . $title . '
  		    </h2>
			<div class="og-block-testimony__group l-flex a-pad l-flex--wrap l-flex--justify-center ">
				' . render_bs_customer_opinions_render($opinions) . '
			</div>
		</section>';
}
