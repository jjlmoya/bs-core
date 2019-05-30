<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-articles-condensed';
$registers = new RegisterService(
    array('title', 'description', 'max_entries', 'className', 'category', 'type', 'brand', 'anchor', 'isActionable')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_articles_condensed'
    )
);


function render_bs_articles_condensed_render($posts, $isActionable)
{
    $html = '';
    $linkClasses = 'a-text a-text a-text--secondary a-text--bold a-text--center a-pad';
    $actionClasses = 'a-text--link a-text--underline';
    $components = new ComponentService();
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService();
        $html .= '
			<div class="ml-article-condensed l-position l-flex l-flex--direction-column l-flex--justify-end a-mar-5  ">
				<picture
					class="a-image a-image--background l-position--absolute a-pad-0 bs_viewport a-mi--color-grayscale">
					<img class="a-image l-column--1-1 a-image--cover"
						 src="' . $normalizePost->image . '">
				</picture>
				<div class="ml-article-condensed__excerpt a-text a-pad a-text--light a-text--secondary a-text--xs">' . $normalizePost->description . '</div>
				' . $components->get_actionable_url($linkClasses, $normalizePost->url, $normalizePost->title, $isActionable, true, $actionClasses) . '
			</div>
		';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_articles_condensed($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return '';
    }

    return '
	<section class="og-articles-condensed ' . $block->get_modifiers() . ' ">
        ' . $block->get_title() . '
		<p class="a-text a-text--s a-pad-5">
			' . $block->description . '
		</p>
		<div class="og-articles-condensed__container l-flex l-flex--wrap l-flex--justify-center ">
			' . render_bs_articles_condensed_render($posts, $block->isActionable) . '
		</div>
	</section>
	';
}




