<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-articles-road';
$registers = new RegisterService(
    array('title', 'max_entries', 'className', 'category', 'type', 'brand', 'anchor', 'isActionable')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_articles_road',
    )
);


function render_bs_articles_road_render($posts)
{
    $html = '';
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService();
        $html .= '
			<article class="ml-articles-road a-mar a-text a-mar--top-20 a-border a-border--primary">
                <div class="ml-articles-road__image l-position">
                    <picture class="a-image a-image--background l-position--absolute a-pad-0 ">
                        <img  class="a-image l-column--1-1 a-image--cover" 
                        src="' . $normalizePost->image . '">
                    </picture>    </div>
                <div class="ml-card-articles-road__title a-bg a-pad l-flex l-flex--justify-center">
                    <a href="' . $normalizePost->url . '" class="a-text a-text--link a-text--underline a-text a-text--secondary a-text--center a-text--uppercase">
                    ' . $normalizePost->title . '
                    </a>   
                </div>
                <div class="ml-card-articles-road__description">
                    <p class="a-text a-pad-20">
                       ' . $normalizePost->description . '
                    </p>   
                </div>
            </article>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_articles_road($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return '';
    }
    return '
	<section class="og-articles-road l-flex l-flex--direction-column l-flex--justify-center ' . $block->get_modifiers() . '">
	    ' . $block->get_title() . '
	    <div class="l-flex l-flex--justify-center l-flex--wrap ">
        ' . render_bs_articles_road_render($posts) . '
        </div>
    </section>';
}


