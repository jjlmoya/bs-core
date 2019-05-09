<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-articles-condensed';
$registers = new RegisterService(
    array('title', 'description', 'max_entries', 'className', 'category', 'type', 'brand', 'anchor')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_articles_condensed'
    )
);


function render_bs_articles_condensed_render($posts)
{
    $html = '';
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService();
        $html .= '
			<div class="ml-article-condensed l-position l-flex l-flex--direction-column l-flex--justify-end a-mar-5  ">
				<picture
					class="a-image a-image--background l-position--absolute a-pad-0 bs_viewport a-mi--color-grayscale">
					<img class="a-image l-column--1-1 a-image--cover"
						 src="' . $normalizePost->image . '">
				</picture>
				<div class="ml-article-condensed__excerpt a-text a-pad a-text--light a-text--secondary a-text--xs">' . $normalizePost->description . '</div>
				<a href="' . $normalizePost->url . '"
				   class="a-text a-text--link a-text--underline a-text a-text--secondary a-text--bold a-text--center a-pad">' . $normalizePost->title . '</a>
			</div>
		';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_articles_condensed($attributes)
{
    $max_entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 6;
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $description = isset($attributes['description']) ? $attributes['description'] : '';
    $type = isset($attributes['type']) ? $attributes['type'] : '';
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

    return '
	<section class="og-articles-condensed a-pad ' . $modifier->get_modifiers() . ' ">
		<h2 class="a-text a-text--xl  a-text-brand a-pad--y">
			' . $title . '
		</h2>
		<p class="a-text a-text--s a-pad-5">
			' . $description . '
		</p>
		<div class="og-articles-condensed__container l-flex l-flex--wrap l-flex--justify-center ">
			' . render_bs_articles_condensed_render($posts) . '
		</div>
	</section>
	';
}




