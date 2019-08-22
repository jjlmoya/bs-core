<?php
/**
 * Plugin Name: Bonseo Core Assets (Styles & Components)
 * Plugin URI: https://www.bonseo.es/bloques-gutenberg/
 * Description: Core Assets for Bonseo Guttenberg Blocks
 * Author: jjlmoya
 * Author URI: https://www.bonseo.es/
 * Version: 1.2.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * @package BS
 */


if (!defined('ABSPATH')) {
    exit;
}
if (!in_array('bs-core/plugin.php', apply_filters('active_plugins', get_option('active_plugins')))) {
    add_action('admin_notices', function () {
        global $pagenow;
        if ($pagenow == "plugins.php") {
            ?>
            <div id="updated" class="error notice is-dismissible">
                <p>
                    Puede que algunos plugins vean afectados su comportamiento y estilo debido a que no se ha instalado
                    la dependencia con el Plugin "BS-CORE" disponible gratuitamente en https://bonseo.es/plugins
                </p>
            </div>
            <?php
        }
    });
    return;
}


function bs_core_scripts()
{
    $bs_timestamp = '2019080718';

    wp_enqueue_style('bs-core-style', plugins_url('assets/style.css', __FILE__), array(), $bs_timestamp);
    wp_enqueue_script('bs-core-script', plugins_url('assets/index.js', __FILE__), array(), $bs_timestamp, true);
    wp_localize_script(
        'bs-core-script',
        'jsData',
        array(
            'logo' => plugins_url('assets/bonseo.png', __FILE__)
        )
    );

}

add_filter('admin_body_class', 'bs_core_admin_body_class');

function bs_core_admin_body_class($classes)
{
    return "$classes sky";
}


add_action('wp_enqueue_scripts', 'bs_core_scripts');

require_once plugin_dir_path(__FILE__) . '/services/index.php';
require_once plugin_dir_path(__FILE__) . '/src/blocks.php';