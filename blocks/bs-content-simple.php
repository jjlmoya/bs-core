<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-content-simple';
$registers = new RegisterService(
    array('title', 'content', 'heading', 'className', 'anchor', 'brand')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_content_simple',
    )
);

function render_bs_content_simple_header($header, $title)
{
    return '<' . $header . ' class="a-text a-text--center a-text--l a-text--bold a-text--brand a-pad--y">' . $title . '</' . $header . '>';
}

function render_bs_content_simple($attributes)
{
    $block = new AttributesService($attributes);
    $heading = !empty($block->title) && !empty($block->heading)
        ? render_bs_content_simple_header($block->heading, $block->title)
        : '';
    return '
	<div class="og-content-plain ' . $block->get_modifiers() . '">
    	' . $heading . '
    	' . $block->content . '
    </div>';
}
