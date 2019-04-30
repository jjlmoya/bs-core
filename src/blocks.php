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
require_once plugin_dir_path(__FILE__) . '../blocks/bs-articles-condensed.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-authors-extract.php';
require_once plugin_dir_path(__FILE__) . '../blocks/bs-banner-basic.php';
