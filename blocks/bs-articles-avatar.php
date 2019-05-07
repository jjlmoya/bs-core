<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-articles-avatar';
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
            )
        ),
        'render_callback' => 'render_bs_articles_avatar',
    )
);


function render_bs_articles_avatar_render($posts)
{
    $html = '';
    while ($posts->have_posts()) : $posts->the_post();
        $title = get_the_title();
        $content = wp_trim_words(get_the_excerpt(), 20, '...');
        $image = esc_url(get_the_post_thumbnail_url(get_the_ID()));
        $url = esc_url(get_the_permalink());
        $html .= '
			<div class="ml-article-avatar l-column--1-2 l-column--mobile--1-1 a-pad l-flex l-flex--align-center">
				<a href="' . $url . '" class="ml-article-avatar__picture u-pointer">
					<picture class="">
						<img class="a-bg--light a-image a-image--avatar a-image--avatar--xl
									a-border a-border--fat a-border--light
									ml-article-avatar__image 
									u-shadow u-shadow--bottom " 
						src="' . $image . '">
					</picture>
				</a>
				<div class="ml-article-avatar__content l-column--1-1 l-flex l-flex--direction-column l-flex--justify-center l-flex--align-center a-bg">
					<a href="' . $url . '" class="a-text a-text--underline a-text--bold a-text--sm a-text--link a-text--secondary ml-article-avatar__title">
						' . $title . '
					</a>
					<p class="a-text a-pad--y a-text--secondary">
						' . wp_trim_words($content, 15, '...') . '
					</p>
				</div>
			</div>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_articles_avatar($attributes)
{
    $max_entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 6;
    $category = isset($attributes['category']) ? $attributes['category'] : '';
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $type = isset($attributes['type']) ? $attributes['type'] : '';
    $modifier = new ClassService($attributes['className'], $attributes['brand'], $attributes['anchor']);

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
	<section class="og-articles-avatar ' . $modifier->get_modifiers() . '">
		<h2 class="a-text a-text--xl  a-text--center a-pad-20">
			' . $title . '
		</h2>
		<div class="og-article-avatar__list l-flex l-flex--wrap l-flex--justify-center a-pad">
			' . render_bs_articles_avatar_render($posts) . '
		</div>
	</section>
	';
}

