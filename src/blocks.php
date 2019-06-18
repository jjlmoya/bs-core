<?php
function bs_core_blocks_editor_assets()
{
	wp_enqueue_script(
		'bs_core_blocks-block-js',
		plugins_url('/dist/blocks.build.js', dirname(__FILE__)),
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
		filemtime(plugin_dir_path(__DIR__) . 'dist/blocks.build.js'),
		true
	);

	wp_enqueue_style(
		'bs_core_blocks_block_css',
		plugins_url('/assets/style.css', dirname(__FILE__))
	);
}

if (!function_exists('bs_create_block_category')) {
	function bs_create_block_category($categories, $post)
	{
		return array_merge(
			$categories,
			array(
				array(
					'slug' => 'bonseo-blocks',
					'title' => __('BonSeo', 'bonseo-blocks'),
				),
			)
		);
	}

	add_filter('block_categories', 'bs_create_block_category', 10, 2);
}
add_action('enqueue_block_editor_assets', 'bs_core_blocks_editor_assets');

require_once plugin_dir_path(__FILE__) . '../blocks/bs-arrow-banner.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-articles-avatar.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-articles-quark.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-articles-condensed.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-articles-image.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-articles-road.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-authors-extract.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-banner-basic.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-banner-data.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-content-simple.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-customer-opinions.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-last-articles-zig-zag.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-list-vertical.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-plain-card.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-slider-article.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-slim-articles.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-title-brand.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-slider-simple.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-head-circle.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-product-float.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-anchor-links.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-product-curved.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-link-category.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-cards-background.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-image-parallax.php';
