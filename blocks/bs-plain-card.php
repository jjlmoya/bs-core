<?php
if (!defined('ABSPATH')) {
	exit;
}

$block = 'block-bs-plain-card';
register_block_type('bonseo/' . $block,
	array(
		'attributes' => array(
			'max_entries' => array(
				'type' => 'string',
			),
			'type' => array(
				'type' => 'string',
			),
			'className' => array(
				'type' => 'string',
			)

		),
		'render_callback' => 'render_bs_plain_card',
	)
);

function render_bs_plain_card_entries($authors)
{
	$html = '';
	while ($authors->have_posts()) : $authors->the_post();
		$title = get_the_title();
		$image = esc_url(get_the_post_thumbnail_url(get_the_ID()));
		$link = esc_url(get_the_permalink());
		$html .= '
			<div class="ml-card-sample l-flex l-flex--direction-column l-column--1-3 l-column--mobile--1-2 ml-card-sample--small a-pad">
				<a href="' . $link . '" class="ml-card-sample__title a-bg--dark l-column--1-1">
					<h3 class="a-text  a-text--secondary a-text--center a-pad--y">
						' . $title . '
					</h3>    
				</a>
				<div class="ml-card-sample__container a-bg l-column--1-1">
					<picture class="l-column--1-1 a-pad-0">
						<img class="a-image l-column--1-1 a-pad--y lazy" data-src="' . $image . '">
					</picture>   
				</div>
			</div>';
		unset($post);
	endwhile;
	return $html;
}

function render_bs_plain_card($attributes)
{
	$class = isset($attributes['className']) ? ' ' . $attributes['className'] : '';
	$entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 3;
	$type = isset($attributes['type']) ? $attributes['type'] : 'posts';
	$args = array(
		'post_type' => $type,
		'post_status' => 'publish',
		'posts_per_page' => $entries
	);
	$posts = new WP_Query($args);
	if (empty($posts)) {
		return "";
	}
	return '
		<div class="og-block-samples l-flex l-flex--wrap a-pad l-flex--justify-center ' . $class . ' ">
			' . render_bs_plain_card_entries($posts) . '
        </div>';
}
