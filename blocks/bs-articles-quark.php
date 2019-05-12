<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-articles-quark';
$registers = new RegisterService(
    array('title', 'max_entries', 'className', 'category', 'type', 'brand', 'anchor')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_articles_quark',
    )
);


function render_bs_articles_quark_render($posts)
{
    $html = '';
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService();
        $html .= '
			<a href="' . $normalizePost->url . '" class="ml-card-articles-quark a-mar u-shadow--bottom a-text">
                <div class="ml-card-articles-quark__image l-position">
                    <picture class="a-image a-image--background l-position--absolute a-pad-0 
                    a-border a-border--bottom a-border--mobile--bottom
                    a-border--fat a-border--primary
                    ">
                        <img class="a-image l-column--1-1 a-image--cover bs_viewport a-mi a-mi--zoom a-mi--zoom--out"
                             src="' . $normalizePost->image . '">
                    </picture>
                </div>
                <div class="ml-card-articles-quark__bubble a-mar-auto"></div>
                <div class="ml-card-articles-quark__content
                 l-column--1-1 a-pad--bottom-20">
                    <h3 class="a-text a-text--xl  a-text--m a-text--center a-text--brand">
                        ' . $normalizePost->title . '
                    </h3>
                </div>
            </a>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_articles_quark($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return '';
    }
    return '
	<section class="og-articles-quark ' . $block->get_modifiers() . '">
	    ' . $block->get_title() . '
	    <div class="l-flex l-flex--justify-center l-flex--wrap ">
        ' . render_bs_articles_quark_render($posts) . '
        </div>
    </section>';
}
