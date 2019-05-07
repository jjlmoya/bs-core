<?php

if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-customer-opinions';
register_block_type('bonseo/' . $block,
    array(
        'attributes' => array(
            'title' => array(
                'type' => 'string',
            ),
            'max_entries' => array(
                'type' => 'string',
            ),
            'className' => array(
                'type' => 'string',
            ),
            'brand' => array(
                'type' => 'string',
            ),
            'type' => array(
                'type' => 'string',
            ),
            'anchor' => array(
                'type' => 'string',
            )
        ),
        'render_callback' => 'render_bs_customer_opinions',
    )
);

function render_bs_customer_opinions_render($opinions)
{
    $html = '';
    while ($opinions->have_posts()) : $opinions->the_post();
        $title = get_the_title();
        $content = get_the_excerpt();
        $image = get_the_post_thumbnail_url(get_the_ID());
        $html .= '
			<div class="ml-card-testimony 
						l-flex l-flex--justify-center l-flex--mobile--direction-column l-column--1-2 l-column--mobile--1-1
						a-mar u-shadow--bottom l-flex--align-center ">
				<picture class="a-pad">
					<img class="a-image a-image--avatar " src="' . esc_url($image) . '">
				</picture>
				<div class="ml-card-testimony__content l-flex l-flex--direction-column l-flex--align-center a-pad">
					<h3 class="a-text a-pad--y-5 a-text--bold l-flex-item--align-start a-text--brand">
					' . esc_html($title) . '
					</h3>
					<p class="a-text l-flex-item--align-start">
						' . $content . '
					</p>
				</div>
			</div>
		';
        unset($post);
    endwhile;
    return $html;
}

function bs_render_block_title($title)
{
    if ($title && !empty($title)) {
        return '<h2 class="a-text a-text--xl a-text--center a-text--brand">
        		' . $title . '
  		    </h2>';
    }
    return '';
}

function render_bs_customer_opinions($attributes)
{
    $entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 3;
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $type = isset($attributes['type']) ? $attributes['type'] : 'post';
    $modifier = new ClassService($attributes['className'], $attributes['brand'], $attributes['anchor']);

    $args = array(
        'post_type' => $type,
        'post_status' => 'publish',
        'posts_per_page' => $entries
    );
    $posts = new WP_Query($args);
    if (empty($posts)) {
        return "";
    }
    return '
		<section class="og-block-testimony ' . $modifier->get_modifiers() . '">
			' . bs_render_block_title($title) . '
			<div class="og-block-testimony__group l-flex a-pad l-flex--wrap l-flex--justify-center ">
				' . render_bs_customer_opinions_render($posts) . '
			</div>
		</section>';
}
