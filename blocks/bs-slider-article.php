<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-slider-article';
$registers = new RegisterService(
    array('title', 'max_entries', 'type', 'category', 'image', 'brand', 'className', 'anchor', 'isActionable')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_slider_article',
    )
);

function render_bs_slider_article_post($articles, $isActionable)
{
    $html = '';
    $linkClasses = 'a-text a-text--s a-text--center a-text--secondary';
    $actionClasses = 'a-text--underline ';
    $components = new ComponentService();
    while ($articles->have_posts()) : $articles->the_post();
        $normalizePost = new PostService(200);
        $html .= '<h3 class="ml-block-articles-minimalist__element a-pad--x-20">
                   ' . $components->get_actionable_url($linkClasses, $normalizePost->url, $normalizePost->title, $isActionable, true, $actionClasses) . '
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
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return '';
    }
    return '
		<section class="og-slider og-slider--articles
		 			   l-flex l-flex--direction-column l-grid-column--full 
		 			    a-bg--image a-bg--image--technology ' . $block->get_modifiers() . '">
			<h1 class="a-text a-text--xl a-text--secondary a-mar-40 og-slider--articles__text">
				' . $block->title . '
			</h1>    
			' . render_bs_slider_article_post($posts, $block->isActionable) . '
		</section>
		<style>
		 .a-bg--image--technology::after {
		 	background-image:url(' . $block->image . ');
		 }
		</style>
	';
}
