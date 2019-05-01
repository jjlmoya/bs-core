<?php
if (!defined('ABSPATH')) {
	exit;
}

$block = 'block-bs-last-articles-zig-zag';
register_block_type('bonseo/' . $block,
	array(
		'attributes' => array(
			'content' => array(
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
			)
		),
		'render_callback' => 'render_bs_last_articles_zig_zag',
	)
);

function render_bs_last_articles_zig_zag_element($post, $isReverse, $cta, $words)
{
	$modifier = $isReverse ? 'is-reverse' : '';
	$post_id = $post['ID'];
	$brand = get_post_meta($post_id, 'bs_theme_brand', TRUE);
	$brand = isset($brand) ? $brand : '';
	if (function_exists('get_field')) {
		$seoDescription = get_field('seoDescription', $post_id);
		$description = $seoDescription ? $seoDescription : get_the_excerpt($post_id);
	} else {
		$description = get_the_excerpt($post_id);
	}

	return '
		<div class="ml-article-extract l-flex l-flex--wrap a-pad ' . $modifier . ' ' . $brand . '">
			<div class="ml-article-extract__image l-column--1-2 l-column--mobile--1-1">
				<picture class="">
					<img style="width:100%; object-fit: cover;" 
						 class="a-image a-image--thumbnail " 
						 src="' . esc_url(get_the_post_thumbnail_url($post_id)) . '">
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
					' . esc_html(get_the_title($post_id)) . '
				</h3>
				<div class="entry-resume-content a-pad"> ' . wp_trim_words($description, $words, '...') . '</div>
				<a href="' . esc_url(get_the_permalink($post_id)) . '" class="a-button a-button--rounded a-button--s a-button--secondary l-flex--align-center">
					' . $cta . '
				</a>
			</div>
		</div>';
}


function render_bs_banner_posts($posts, $cta, $words)
{
	$html = '';
	foreach ($posts as $key => $post) {
		$html .= render_bs_last_articles_zig_zag_element($post, $key % 2 == 0, $cta, $words);
	}
	return $html;
}

function render_bs_last_articles_zig_zag($attributes)
{

	$entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 5;
	$title = isset($attributes['content']) ? $attributes['content'] : '';
	$cta = isset($attributes['cta']) ? $attributes['cta'] : 'Leer';
	$words = isset($attributes['words']) ? $attributes['words'] : 20;
	$class = isset($attributes['className']) ? $attributes['className'] : '';
	$posts = wp_get_recent_posts([
		'numberposts' => $entries,
		'post_status' => 'publish',
	]);
	if (empty($posts)) {
		return '';
	}
	return '
	<section class="og-articles-zigzag a-pad-2 ' . $class . '">
		<h2 class="a-text a-text--xl  a-text--center a-text--bold a-pad">
        	' . $title . '
   		</h2>
   		' . render_bs_banner_posts($posts, $cta, $words) . '
	</section>';

}
