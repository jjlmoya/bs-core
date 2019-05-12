<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-articles-slim';
$registers = new RegisterService(
    array('title', 'max_entries', 'type', 'category', 'image', 'brand', 'className', 'anchor')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_articles_slim',
    )
);

function render_bs_articles_slim_render($posts)
{
    $html = '';
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService();
        $html .= '
			<article class="ml-article-slim l-flex l-flex--direction-column l-column--1-3 l-column--mobile--1-2 a-pad">
				<picture class="l-column--1-1 a-pad-0">
					<img data-target="" class="a-image l-column--1-1" src="' . $normalizePost->image . '">
				</picture>   
				<a href="' . $normalizePost->url . '" class="a-text a-text--link a-text--underline a-text--bold a-text--s a-text--link a-text--brand">' . $normalizePost->title . '</a>    
				<p class="a-text a-text--xs">
					' . $normalizePost->description . '
				</p>
			</article>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_articles_slim($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return '';
    }
    return '
	<section class="og-articles--slim a-mi a-mi--left bs_viewport a-pad--y-20 ' . $block->get_modifiers() . '">
		' . $block->get_title() . '   
		<div class="og-articles--slim__container l-flex l-flex--wrap l-flex--justify-center a-pad">
			  ' . render_bs_articles_slim_render($posts) . '
		</div>
	</section>';
}
