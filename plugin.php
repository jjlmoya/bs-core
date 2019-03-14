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
	$timestamp = '2019031319';
	wp_enqueue_style('bs-core-style', plugins_url('assets/style.css', __FILE__), array(), $timestamp);
	wp_enqueue_script('bs-core-script', plugins_url('assets/index.js', __FILE__), array(), $timestamp, true);
}

add_action('wp_enqueue_scripts', 'bs_core_scripts');

require_once plugin_dir_path(__FILE__) . '/model/brand.php';
require_once plugin_dir_path(__FILE__) . 'services/index.php';


