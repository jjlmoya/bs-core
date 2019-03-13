<?php
/**
 * Plugin Name: Bonseo Core Assets (Styles & Components)
 * Plugin URI: https://www.bonseo.es/bloques-gutenberg/
 * Description: Core Assets for Bonseo Guttenberg Blocks
 * Author: jjlmoya
 * Author URI: https://www.bonseo.es/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * @package BS
 */


if (!defined('ABSPATH')) {
	exit;
}

function bs_core_scripts()
{
	$timestamp = '2019031317';
	$assetsPath = plugin_dir_path(__FILE__) . '/assets/';
	wp_enqueue_style('bs-core-style', $assetsPath . 'style.css', array(), $timestamp);
	wp_enqueue_script('bs-core-script', $assetsPath . 'index.js', array(), $timestamp, true);
}

add_action('wp_enqueue_scripts', 'bs_core_scripts');



