<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-anchor-links';
$registers = new RegisterService(
    array('title', 'brand', 'className')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_anchor_links',
    )
);
function render_bs_anchor_links($attributes)
{
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $modifier = new ClassService($attributes);
    return '
	<nav class="ml-anchor-cloud
            a-pad
            l-flex l-flex--direction-column l-flex--align-center ' . $modifier->get_modifiers() . '
            ">
		<div class="ml-anchor-cloud__title
					a-pad-5
					a-text a-text--m a-text--bold a-text--brand">' . $title . '</div>
		<div class="ml-anchor-cloud__list
					l-flex l-flex--wrap l-flex--justify-center
					bs_anchor_container"
			 data-parent="ml-anchor-cloud"
			 data-link-class="a-text--link a-text--brand a-text--xs a-text--center a-pad-5">
		</div>
	</nav>';
}




