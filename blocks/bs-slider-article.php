<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-slider-article';
register_block_type('bonseo/' . $block,
    array(
        'attributes' => array(
            'title' => array(
                'type' => 'string',
            ),
            'image' => array(
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
        ),
        'render_callback' => 'render_bs_slider_article',
    )
);

function render_bs_slider_article_post($articles)
{
    $html = '';
    while ($articles->have_posts()) : $articles->the_post();
        $title = get_the_title();
        $url = esc_url(get_the_permalink());
        $html .= '<h3 class="ml-block-articles-minimalist__element a-pad--x-20">
					<a class="a-text a-text--s a-text--underline a-text--center a-text--secondary" href="' . $url . '">' . $title . '</a>
				  </h3>';
        unset($post);
    endwhile;
    return '
	 	<hr class="a-separator a-separator--gradient a-separator--animate l-column--1-2">
		<div class="ml-block-articles-minimalist l-flex l-flex--justify-center a-pad--y-20">
			' . $html . '   
		</div>
	 ';
}

function render_bs_slider_article($attributes)
{
    $image = isset($attributes['image']) ? $attributes["image"] : '';
    $title = isset($attributes['title']) ? $attributes["title"] : '';
    $type = isset($attributes['type']) ? $attributes["type"] : 'posts';
    $modifier = new ClassService($attributes['className'], $attributes['brand'], $attributes['anchor']);

    $args = array(
        'post_type' => $type,
        'post_status' => 'publish',
        'posts_per_page' => 3
    );
    $articles = new WP_Query($args);
    if (empty($articles)) {
        return '';
    }
    return '
		<section class="og-slider og-slider--articles
		 			   l-flex l-flex--direction-column l-grid-column--full 
		 			    a-bg--image a-bg--image--technology ' . $modifier->get_modifiers() . '">
			<h1 class="a-text a-text--xl a-text--secondary a-mar-40 og-slider--articles__text">
				' . $title . '
			</h1>    
			' . render_bs_slider_article_post($articles) . '
		</section>
		<style>
		 .a-bg--image--technology::after {
		 	background-image:url(' . $image . ');
		 }
		</style>
	';
}
