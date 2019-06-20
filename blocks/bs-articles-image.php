<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-articles-image';
$registers = new RegisterService(
    array('title', 'description', 'max_entries', 'className', 'category', 'type', 'brand', 'anchor', 'isActionable')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_articles_image'
    )
);


function render_bs_articles_image_render($posts, $isActionable)
{
    $html = '';
    $linkClasses = 'a-text a-text--link a-text--xl a-text--brand a-text--blur a-text--bold a-text--secondary';
    $actionClasses = '';
    $components = new ComponentService();
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService();
        $html .= '
        <article class="ml-image-article a-mar--minus a-pad-40 
            l-position l-flex l-flex--align-end l-flex--justify-center">
            <picture class="a-image a-image--background l-position--absolute a-pad-0 ">
                <img class="a-image l-column--1-1 a-image--cover" src="' . $normalizePost->image . '">
            </picture>
        	' . $components->get_actionable_url($linkClasses, $normalizePost->url, $normalizePost->title, $isActionable, true, $actionClasses) . '
        </article>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_articles_image($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return '';
    }

    return '
        <section class="og-image-articles l-flex l-flex--direction-column--reverse l-grid-column--full ' . $block->get_modifiers() . 'g">
    	' . render_bs_articles_image_render($posts, $block->isActionable) . '
    	</section>
	';
}




