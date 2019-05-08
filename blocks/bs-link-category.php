<?php

if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-link-category';
register_block_type('bonseo/' . $block,
    array(
        'attributes' => array(
            'title' => array(
                'type' => 'string',
            ),
            'subtitle' => array(
                'type' => 'string',
            ),
            'image' => array(
                'type' => 'string',
            ),
            'className' => array(
                'type' => 'string',
            ),
            'category' => array(
                'type' => 'string',
            ),
            'type' => array(
                'type' => 'string',
            ),
            'brand' => array(
                'type' => 'string',
            ),
            'anchor' => array(
                'type' => 'boolean',
            ),
            'max_entries' => array(
                'type' => 'string',
            ),
            'category' => array(
                'type' => 'string',
            )
        ),
        'render_callback' => 'render_bs_link_category',
    )
);

function render_bs_link_category_elements($posts)
{
    $html = '';
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService(200);

        $html .= '<a href="' . $normalizePost->url . '" class="a-pad u-pointer">
					<picture class="a-pad ">
						<img class="a-image a-image--avatar a-image--avatar--xl 
						            u-shadow u-shadow--bottom 
						            a-border a-border--fat a-border--light" 
							 src="' . $normalizePost->image . '">
					</picture>
				</a>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_link_category($attributes)
{
    $max_entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 3;
    $category = isset($attributes['category']) ? $attributes['category'] : '';
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $subtitle = isset($attributes['subtitle']) ? $attributes['subtitle'] : '';
    $image = isset($attributes['image']) ? $attributes['image'] : '';
    $type = isset($attributes['type']) ? $attributes['type'] : 'post';
    $category = isset($attributes['category']) ? $attributes['category'] : '';
    $modifier = new ClassService($attributes);

    $args = array(
        'post_type' => $type,
        'post_status' => 'publish',
        'category' => $category,
        'posts_per_page' => $max_entries
    );

    $posts = new WP_Query($args);
    if (empty($posts)) {
        return '';
    }

    return '<div class="og-list-category l-flex l-flex--direction-column a-mar ' . $modifier->get_modifiers() . '">
				<div class="og-list-category__title l-flex">
					<a href="" class="a-text a-text--link a-text--underline 
									  bs_viewport a-mi a-mi--left a-pad a-text--center 
									  og-list-category__title__text a-bg--dark a-text--secondary">
									  ' . $title . '
				  </a>
				</div>
				<div class="og-list-category__row l-flex">
					<picture class="og-list-category__row__picture  a-pad-0">
						<img data-target="" class="a-image l-column--1-1 a-image--cover bs_viewport a-mi a-mi--zoom a-mi--zoom--out" 
						src="' . $image . '">
					</picture>
					<div class="og-list-category__row__content a-bg--mono-1 a-pad-40">
						<h3 class="a-text  a-text--brand--secondary l-column--1-1">
							' . $subtitle . '
						</h3>
						<nav class="og-list-category__row__content__navigation l-flex l-flex--justify-center l-flex--wrap l-column--1-1">
						' . render_bs_link_category_elements($posts) . '
						</nav>
					</div>
				</div>
			</div>';
}




