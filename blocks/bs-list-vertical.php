<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-list-vertical';
$registers = new RegisterService(
    array_merge(
        ComponentSettings::COMMONS_PARAMETERS,
        ComponentSettings::QUERY_PARAMETERS,
        ComponentSettings::ACTIONABLE_PARAMETERS,
        array('title')
    )
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_list_vertical',
    )
);

function render_bs_list_vertical_entries($posts, $isActionable)
{
    $html = '';
    $components = new ComponentService();
    $linkClasses = 'ml-article-rectangle a-text l-flex l-flex--align-center a-pad';
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService(null,40);
        $temporal = '<picture class=" a-pad-0">
					   <img class="a-image a-image--m a-image--rounded a-image--cover u-shadow--bottom lazy" 
					        data-src="' . $normalizePost->image . '">
					</picture>
					<div class="ml-article-rectangle__container
					   l-flex l-flex--direction-column a-pad">
					   <h3 class="a-text  a-text--brand a-text--bold">' . $normalizePost->title . '</h3>
					   <p class="a-text a-text--light a-text--s">' . $normalizePost->description . '</p>
					</div>
				 </a><hr class="a-separator--classic a-bg" />';
        $html .= '
            <div class="og-list-title-vertical__container__wrapper">'
            . $components->get_actionable_url($linkClasses, $normalizePost->url, $temporal, $isActionable, true, '') .
            '</div>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_list_vertical($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return "";
    }
    return '
		<section class="og-list-title-vertical
			   l-flex l-grid-column--full
			   l-position
			   a-bg ' . $block->get_modifiers() . '">
		   <h2 class="a-text  a-text--xl  og-list-title-vertical__title a-text--secondary">
			  ' . $block->title . '
		   </h2>
		   <nav class="og-list-title-vertical__container 
		   			   l-flex l-flex--direction-column l-column--1-1 
		   			   a-bg--mono-0 a-mar bs_viewport a-mi a-mi--temporal--left">'
        . render_bs_list_vertical_entries($posts, $block->isActionable) . '</nav>
		</section>';
}
