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
			'description' => array(
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
			),
			'brand' => array(
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
		$content = wp_trim_words(get_the_excerpt(), 10, '...');
		$image = esc_url(get_the_post_thumbnail_url(get_the_ID()));
		$url = esc_url(get_the_permalink());
		$html .= '
			<div class="ml-article-condensed l-position l-flex l-flex--direction-column l-flex--justify-end a-mar-5  ">
				<picture
					class="a-image a-image--background l-position--absolute a-pad-0 bs_viewport a-mi--color-grayscale">
					<img class="a-image l-column--1-1 a-image--cover"
						 src="' . $image . '">
				</picture>
				<div class="ml-article-condensed__excerpt a-text a-pad a-text--light a-text--secondary a-text--xs">' . $content . '</div>
				<a href="' . $url . '"
				   class="a-text a-text--link a-text--underline a-text a-text--secondary a-text--bold a-text--center a-pad">' . $title . '</a>
			</div>
		';
		unset($post);
	endwhile;
	return $html;
}

function render_bs_articles_condensed($attributes)
{
	$class = isset($attributes['className']) ? ' ' . $attributes['className'] : '';
	$max_entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 6;
	$title = isset($attributes['title']) ? $attributes['title'] : '';
	$description = isset($attributes['description']) ? $attributes['description'] : '';
	$type = isset($attributes['type']) ? $attributes['type'] : '';
	$brand = isset($attributes['brand']) ? $attributes['brand'] : '';
	$args = array(
		'post_type' => $type,
		'post_status' => 'publish',
		'posts_per_page' => $max_entries
	);
	$posts = new WP_Query($args);
	if (empty($posts)) {
		return '';
	}


	return '
	<section class="og-articles-condensed a-pad ' . $class . ' ' . $brand . ' ">
		<h2 class="a-text a-text--xl  a-text-brand a-pad--y">
			' . $title . '
		</h2>
		<p class="a-text a-text--s a-pad-5">
			' . $description . '
		</p>
		<div class="og-articles-condensed__container l-flex l-flex--wrap l-flex--justify-center ">
			' . render_bs_articles_condensed_render($posts) . '
		</div>
	</section>
	';
}




