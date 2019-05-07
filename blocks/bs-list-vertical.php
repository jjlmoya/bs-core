<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-list-vertical';
register_block_type('bonseo/' . $block,
    array(
        'attributes' => array(
            'title' => array(
                'type' => 'string',
            ),
            'max_entries' => array(
                'type' => 'string',
            ),
            'type' => array(
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
        'render_callback' => 'render_bs_list_vertical',
    )
);

function render_bs_list_vertical_entries($posts)
{
    $html = '';
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService(40);
        $html .= '<div class="og-list-title-vertical__container__wrapper">
			<a href="' . $normalizePost->url . '" class="ml-article-rectangle
					a-text
					l-flex l-flex--align-center
					a-pad
					">
					<picture class=" a-pad-0">
					   <img class="a-image a-image--m a-image--rounded a-image--cover u-shadow--bottom lazy" 
					        data-src="' . $normalizePost->image . '">
					</picture>
					<div class="ml-article-rectangle__container
					   l-flex l-flex--direction-column a-pad">
					   <h3 class="a-text  a-text--brand a-text--bold">' . $normalizePost->title . '</h3>
					   <p class="a-text a-text--light a-text--s">' . $normalizePost->description . '</p>
					</div>
				 </a><hr class="a-separator--classic a-bg" />
		  </div>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_list_vertical($attributes)
{
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 3;
    $type = isset($attributes['type']) ? $attributes['type'] : 'posts';
    $modifier = new ClassService($attributes);
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
		<section class="og-list-title-vertical
			   l-flex l-grid-column--full
			   l-position
			   a-bg ' . $modifier->get_modifiers() . '">
		   <h1 class="a-text  a-text--xl  og-list-title-vertical__title a-text--secondary">
			  ' . $title . '
		   </h1>
		   <nav class="og-list-title-vertical__container 
		   			   l-flex l-flex--direction-column l-column--1-1 
		   			   a-bg--mono-0 a-mar bs_viewport a-mi a-mi--temporal--left">'
        . render_bs_list_vertical_entries($posts) . '</nav>
		</section>';
}
