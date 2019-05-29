<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-articles-avatar';
$registers = new RegisterService(
    array('title', 'max_entries', 'className', 'category', 'type', 'brand', 'anchor', 'isActionable')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_articles_avatar',
    )
);

function render_bs_articles_avatar_render($posts)
{
    $html = '';
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService();
        $html .= '
			<div class="ml-article-avatar l-column--1-2 l-column--mobile--1-1 a-pad l-flex l-flex--align-center">
				<a href="' . $normalizePost->url . '" class="ml-article-avatar__picture u-pointer">
					<picture class="">
						<img class="a-bg--light a-image a-image--avatar a-image--avatar--xl
									a-border a-border--fat a-border--light
									ml-article-avatar__image 
									u-shadow u-shadow--bottom " 
						src="' . $normalizePost->image . '">
					</picture>
				</a>
				<div class="ml-article-avatar__content l-column--1-1 l-flex l-flex--direction-column l-flex--justify-center l-flex--align-center a-bg">
					<a href="' . $normalizePost->url . '" class="a-text a-text--underline a-text--bold a-text--sm a-text--link a-text--secondary ml-article-avatar__title">
						' . $normalizePost->title . '
					</a>
					<p class="a-text a-pad--y a-text--secondary">
						' . wp_trim_words($normalizePost->description, 15, '...') . '
					</p>
				</div>
			</div>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_articles_avatar($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return '';
    }
    return '
	<section class="og-articles-avatar ' . $block->get_modifiers() . '">
		' . $block->get_title() . '
		<div class="og-article-avatar__list l-flex l-flex--wrap l-flex--justify-center a-pad">
			' . render_bs_articles_avatar_render($posts) . '
		</div>
	</section>
	';
}

