<?php

if (!defined('ABSPATH')) {
	exit;
}

$block = 'block-bs-articles-condensed';
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
			),
			'category' => array(
				'type' => 'string',
			),
			'type' => array(
				'type' => 'string',
			)
		),
		'render_callback' => 'render_bs_articles_condensed',
	)
);


function render_bs_articles_condensed_render($posts)
{
	$html = '';
	while ($posts->have_posts()) : $posts->the_post();
		$title = get_the_title();
		$excerpt = get_the_excerpt(get_the_ID());
		$content = isset($excerpt) ? $excerpt : get_the_content();
		$image = esc_url(get_the_post_thumbnail_url(get_the_ID()));
		$url = esc_url(get_the_permalink());
		$html .= '';
		unset($post);
	endwhile;
	return $html;
}

function render_bs_articles_condensed($attributes)
{
	$class = isset($attributes['className']) ? ' ' . $attributes['className'] : '';
	$max_entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 6;
	$category = isset($attributes['category']) ? $attributes['category'] : '';
	$title = isset($attributes['title']) ? $attributes['title'] : '';
	$type = isset($attributes['type']) ? $attributes['type'] : '';
	$args = array(
		'post_type' => $type,
		'post_status' => 'publish',
		'category' => $category,
		'posts_per_page' => $max_entries
	);

	$posts = new WP_Query($args);
	if (empty($posts)) {
		return '';
	}

	return '';
}
