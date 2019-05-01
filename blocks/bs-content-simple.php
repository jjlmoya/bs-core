<?php
if (!defined('ABSPATH')) {
	exit;
}
$block = 'block-bs-content-simple';
register_block_type('bonseo/' . $block,
	array(
		'attributes' => array(
			'title' => array(
				'type' => 'string',
			),
			'content' => array(
				'type' => 'string',
			),
			'heading' => array(
				'type' => 'string',
			),
			'className' => array(
				'type' => 'string',
			),
			'brand' => array(
				'type' => 'string',
			)
		),
		'render_callback' => 'render_bs_content_simple',
	)
);

function render_bs_content_simple_header($header, $title) {
	return '<' . $header . ' class="a-text a-text--center a-text--l a-text--bold a-text--brand a-pad--y">' . $title . '</' . $header . '>';
}

function render_bs_content_simple($attributes)
{
	$class = isset($attributes['className']) ? ' ' . $attributes['className'] : '';
	$title = isset($attributes['title']) ? $attributes["title"] : '';
	$content = isset($attributes['content']) ? $attributes["content"] : '';
	$headSize= isset($attributes['heading']) ? $attributes['heading'] : 'h1';
	$heading = isset($attributes['title']) ? render_bs_content_simple_header($headSize, $title) : '';
	$brand = isset($attributes['brand']) ? $attributes['brand'] : '';
	return '
	<div class="og-content-plain a-pad-20 ' . $class . ' ' . $brand . '">
    	' . $heading . '
    	' . $content . '
    </div>';
}
