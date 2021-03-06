<?php
if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-authors-extract';
$registers = new RegisterService(
    array_merge(
        ComponentSettings::COMMONS_PARAMETERS,
        ComponentSettings::SEO_PARAMETERS,
        ComponentSettings::QUERY_PARAMETERS,
        ComponentSettings::ACTIONABLE_PARAMETERS
    )
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_authors_extract',
    )
);


function render_bs_authors_extract_entries($authors, $isActionable)
{
    $html = '';
    $linkClasses = 'a-text a-text--underline a-text--bold a-text--brand';
    $actionClasses = 'a-text--link a-text--underline';
    $components = new ComponentService();
    while ($authors->have_posts()) : $authors->the_post();
        $normalizePost = new PostService();
        $postID = get_the_ID();
        $position = get_post_meta($postID, 'bs_publisher_position', true);
        $html .= '
		<div class="ml-card-author l-flex l-flex--direction-column l-flex--justify-center l-column--1-3 l-column--mobile--2-3 a-pad">
			<div class="ml-card-author__image l-flex-item--align-center l-column--1-1">
				<picture class="a-pad l-column--1-1 a-pad-0">
					<img class="a-image l-column--1-1" src="' . $normalizePost->image . '">
					</picture>
				</div>
			<div class="ml-card-author__description a-border--primary a-pad">
				<h3>
                    ' . $components->get_actionable_url($linkClasses, $normalizePost->url, $normalizePost->title, $isActionable, true, $actionClasses) . '
				</h3>
				<p class="a-text a-text--bold a-text--xs ">
					' . $position . '
				</p>
				<p class="a-text a-pad--y">
					' . $normalizePost->description . '
				</p>
			</div>
		</div>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_authors_extract($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return "";
    }
    return '
	<section class="og-block-authors ' . $block->get_modifiers() . '">
	' . $block->get_title() . '
		<div class="l-flex l-flex--justify-center l-flex--wrap a-pad--y">
		' . render_bs_authors_extract_entries($posts, $block->isActionable) . '
		</div>
	</section>';
}
