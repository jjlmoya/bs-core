<?php

if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-banner-data';
register_block_type('bonseo/' . $block,
    array(
        'attributes' => array(
            'name1' => array(
                'type' => 'string',
            ),
            'name2' => array(
                'type' => 'string',
            ),
            'name3' => array(
                'type' => 'string',
            ),
            'counter1' => array(
                'type' => 'string',
            ),
            'counter2' => array(
                'type' => 'string',
            ),
            'counter3' => array(
                'type' => 'string',
            ),
            'className' => array(
                'type' => 'string',
            ),
            'brand' => array(
                'type' => 'string',
            ),
            'anchor' => array(
                'type' => 'boolean',
            )

        ),
        'render_callback' => 'render_bs_banner_data',
    )
);

function render_bs_banner_data_entry($array)
{
    $html = '';
    foreach ($array as $entry) {
        $html .= '
		<div class="ml-data-quantity l-flex l-flex--justify__center">
			<p class="a-text a-text--bold a-text--secondary a-text--l a-pad--x ">
				' . $entry['counter'] . '
			</p>
			<p class="a-text a-text--secondary a-text--l a-pad--x a-slash a-slash--left a-text--mono-1">
				' . $entry['name'] . '
			</p>
		</div>';
    }
    return $html;
}

function render_bs_banner_data($attributes)
{
    $counterArray = array(
        array(
            'name' => isset($attributes['name1']) ? $attributes['name1'] : '',
            'counter' => isset($attributes['counter1']) ? $attributes['counter1'] : ''
        ),
        array(
            'name' => isset($attributes['name2']) ? $attributes['name2'] : '',
            'counter' => isset($attributes['counter2']) ? $attributes['counter2'] : ''
        ),
        array(
            'name' => isset($attributes['name3']) ? $attributes['name3'] : '',
            'counter' => isset($attributes['counter3']) ? $attributes['counter3'] : ''
        ),
    );
    $block = new AttributesService($attributes);


    return '
		<section class="og-banner-data 
						l-flex l-flex--justify-space-around l-grid-column--full
						a-bg--gradient--light a-bg--animated a-pad-40 l-flex--wrap
						a-mi a-mi--left bs_viewport ' . $block->get_modifiers() . '">
		' . render_bs_banner_data_entry($counterArray) . '
		</section>';
}
