<?php
if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-cards-background';
$registers = new RegisterService(
    array_merge(
        ComponentSettings::COMMONS_PARAMETERS,
        ComponentSettings::ACTIONABLE_PARAMETERS,
        ComponentSettings::QUERY_PARAMETERS
    )
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_cards_background',
    )
);

function render_bs_cards_background_entries($authors, $isActionable)
{
    $html = '';
    $linkClasses = 'og-cards-background__article
              l-column--1-4 l-column--mobile--1-1 l-position
              a-mar-5 u-shadow--bottom a-text';
    $actionClasses = 'u-pointer';
    $components = new ComponentService();
    while ($authors->have_posts()) : $authors->the_post();
        $normalizePost = new PostService(null, 200);
        $temporal = '
              <picture class="a-image a-image--background l-position--absolute a-pad-0 ">
                 <img  class="a-image l-column--1-1 a-image--cover a-border--smooth" 
                 src=' . $normalizePost->image . '>
              </picture>
              <h2 class="a-text a-text--xl a-pad-20 a-text--shadow a-text--secondary a-text--bold">
                ' . $normalizePost->title . '
              </h2>';
        $html .= $components->get_actionable_url($linkClasses, $normalizePost->url, $temporal, $isActionable, true, $actionClasses);
        unset($post);
    endwhile;
    return $html;
}

function render_bs_cards_background($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return "";
    }
    return '
        <section class="og-cards-background l-grid-column--full
                        l-flex l-flex--wrap l-flex--justify-center ' . $block->get_modifiers() . ' ">
           ' . render_bs_cards_background_entries($posts, $block->isActionable) . '
        </section>';
}






