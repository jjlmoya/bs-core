<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-articles-rainbow';
$registers = new RegisterService(
    array('title', 'max_entries', 'className', 'category', 'type', 'brand', 'anchor', 'isActionable', 'cta')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_articles_rainbow',
    )
);

function render_bs_articles_rainbow_render($posts, $isActionable, $cta)
{
    $html = '';
    $linkClasses = '';
    $actionClasses = 'a-button a-button--rounded a-button a-button--s a-button--fade';
    $components = new ComponentService();
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService();
        $html .= '
            <article class="ml-article-rainbow a-border--rainbow a-mar-20">
                <h3 class="a-text  a-text--blur a-text--secondary">
                    ' . $normalizePost->title . '
                </h3>
                <p class="a-text a-text--blur a-text--secondary a-pad">
                    ' . $normalizePost->description . '
                </p>
                <div class="ml-article-rainbow__button a-mar--top-40">
                    ' . $components->get_actionable_url($linkClasses, $normalizePost->url, $cta, $isActionable, false, $actionClasses) . '
                </div>
                <picture class="a-image a-image--background l-position--absolute a-pad-0 ">
                    <img class="a-image l-column--1-1 a-image--cover" src=' . $normalizePost->image . '>
                </picture>
            </article>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_articles_rainbow($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return '';
    }
    return '
    <section class="og-articles-rainbow ' . $block->get_modifiers() . '">
        <h3 class="a-text  a-pad a-text--center a-text--xl a-text--bold a-text--brand">
            ' . $block->title . '
        </h3>
        <div class="l-flex l-flex--justify-center l-flex--wrap">
         ' . render_bs_articles_rainbow_render($posts, $block->isActionable, $block->cta) . '
        </div>
    </section>';
}


