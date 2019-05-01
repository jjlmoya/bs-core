<?php
if (!defined('ABSPATH')) {
	exit;
}

$block = 'block-bs-last-articles-zig-zag';
register_block_type('bonseo/' . $block,
	array(
		'attributes' => array(
			'title' => array(
				'type' => 'string',
			),
			'max_entries' => array(
				'type' => 'string',
			),
			'cta' => array(
				'type' => 'string',
			),
			'words' => array(
				'type' => 'string',
			),
			'className' => array(
				'type' => 'string',
			),
			'brand' => array(
				'type' => 'string',
			),
			'type' => array(
				'type' => 'string',
			)
		),
		'render_callback' => 'render_bs_last_articles_zig_zag',
	)
);

function render_bs_last_articles_zig_zag_element($isReverse, $cta, $title, $image, $link, $excerpt)
{
	$modifier = $isReverse ? 'is-reverse' : '';
	return '
		<div class="ml-article-extract l-flex l-flex--wrap a-pad ' . $modifier . '">
			<div class="ml-article-extract__image l-column--1-2 l-column--mobile--1-1">
				<picture class="">
					<img style="width:100%; object-fit: cover;" 
						 class="a-image a-image--thumbnail " 
						 src="' . $image . '">
				</picture>
			</div>
			<div class="ml-article-extract__content
					l-flex
					l-flex--direction-column
					l-flex--justify-space-around	
					l-column--1-2
					l-column--mobile--1-1
					a-pad--x-40">
				<h3 class="a-text a-text--l l-column--1-1">
					' . $title . '
				</h3>
				<div class="entry-resume-content a-pad"> ' . $excerpt . '</div>
				<a href="' . $link . '" class="a-button a-button--rounded a-button--s a-button--secondary l-flex--align-center">
					' . $cta . '
				</a>
			</div>
		</div>';
}


function render_bs_banner_posts($posts, $cta, $words)
{
	$html = '';
	$index = 0;
	while ($posts->have_posts()) : $posts->the_post();
		$title = get_the_title();
		$image = esc_url(get_the_post_thumbnail_url(get_the_ID()));
		$link = esc_url(get_the_permalink());
		$excerpt = strip_tags(wp_trim_words(get_the_content(), $words, '...'));
		$html .= render_bs_last_articles_zig_zag_element($index % 2 == 0, $cta, $title, $image, $link, $excerpt);
		unset($post);
		$index ++;
	endwhile;
	return $html;
}

function render_bs_last_articles_zig_zag($attributes)
{
	$entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 5;
	$title = isset($attributes['title']) ? $attributes['title'] : '';
	$cta = isset($attributes['cta']) ? $attributes['cta'] : 'Leer';
	$words = isset($attributes['words']) ? $attributes['words'] : 20;
	$class = isset($attributes['className']) ? $attributes['className'] : '';
	$brand = isset($attributes['brand']) ? $attributes['brand'] : '';
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
	<section class="og-articles-zigzag a-pad-2 ' . $class . ' ' . $brand . '">
		<h2 class="a-text a-text--xl  a-text--center a-text--bold a-pad">
        	' . $title . '
   		</h2>
   		' . render_bs_banner_posts($posts, $cta, $words) . '
	</section>';

}
