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
    $title = isset($attributes['title']) ? $attributes["title"] : '';
    $content = isset($attributes['content']) ? $attributes["content"] : '';
    $headSize = isset($attributes['heading']) ? $attributes['heading'] : '';
    $heading = !empty($title) && !empty($headSize)
        ? render_bs_content_simple_header($headSize, $title)
        : '';
    $modifier = new ClassService($attributes);
    return '
	<div class="og-content-plain ' . $modifier->get_modifiers() . '">
    	' . $heading . '
    	' . $content . '
    </div>';
}
