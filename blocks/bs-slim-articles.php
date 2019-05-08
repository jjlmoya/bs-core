<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-articles-slim';
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
                'type' => 'string',
            ),
            'anchor' => array(
                'type' => 'boolean',
            )
        ),
        'render_callback' => 'render_bs_articles_slim',
    )
);

function render_bs_articles_slim_render($posts)
{
    $html = '';
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService();
        $html .= '
			<article class="ml-article-slim l-flex l-flex--direction-column l-column--1-3 l-column--mobile--1-2 a-pad">
				<picture class="l-column--1-1 a-pad-0">
					<img data-target="" class="a-image l-column--1-1" src="' . $normalizePost->image . '">
				</picture>   
				<a href="' . $normalizePost->url . '" class="a-text a-text--link a-text--underline a-text--bold a-text--s a-text--link a-text--brand">' . $normalizePost->title . '</a>    
				<p class="a-text a-text--xs">
					' . $normalizePost->description . '
				</p>
			</article>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_articles_slim($attributes)
{
    $max_entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 6;
    $category = isset($attributes['category']) ? $attributes['category'] : '';
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $type = isset($attributes['type']) ? $attributes['type'] : '';
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

    return '
	<section class="og-articles--slim a-mi a-mi--left bs_viewport a-pad--y-20 ' . $modifier->get_modifiers() . '">
		<h3 class="a-text  l-column--1-1 a-text--center a-text--brand">
			' . $title . '
		</h3>    
		<div class="og-articles--slim__container l-flex l-flex--wrap l-flex--justify-center a-pad">
			  ' . render_bs_articles_slim_render($posts) . '
		</div>
	</section>';
}
