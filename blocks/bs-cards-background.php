<?php
if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-cards-background';
$registers = new RegisterService(
    array('className', 'brand', 'type', 'anchor', 'category', 'max_entries')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_cards_background',
    )
);

function render_bs_cards_background_entries($authors)
{
    $html = '';
    while ($authors->have_posts()) : $authors->the_post();
        $normalizePost = new PostService(200);
        $html .= '
			<a href="' . $normalizePost->url . '" class="og-cards-background__article
              l-column--1-4 l-column--mobile--1-1 l-position
              a-mar-5 u-pointer u-shadow--bottom a-text">
              <picture class="a-image a-image--background l-position--absolute a-pad-0 ">
                 <img  class="a-image l-column--1-1 a-image--cover a-border--smooth" 
                 src=' . $normalizePost->image . '>
              </picture>
              <h2 class="a-text a-text--xl  a-pad-20 a-text--shadow a-text--secondary a-text--bold">
                ' . $normalizePost->title . '
              </h2>
           </a>';
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
           ' . render_bs_cards_background_entries($posts) . '
        </section>';
}






