<?php
if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-plain-card';
$registers = new RegisterService(
    array('title', 'className', 'brand', 'type', 'anchor', 'category', 'max_entries', 'isActionable')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_plain_card',
    )
);

function render_bs_plain_card_entries($authors, $isActionable)
{
    $html = '';
    $linkClasses = 'ml-card-sample__title a-bg--dark l-column--1-1';
    $actionClasses = '';
    $components = new ComponentService();
    while ($authors->have_posts()) : $authors->the_post();
        $normalizePost = new PostService(200);
        $temporal = '<h3 class="a-text  a-text--secondary a-text--center a-pad--y">
						' . $normalizePost->title . '
					</h3>';
        $html .= '
			<div class="ml-card-sample l-flex l-flex--direction-column l-column--1-3 l-column--mobile--1-2 ml-card-sample--small a-pad">
				' . $components->get_actionable_url($linkClasses, $normalizePost->url, $temporal, $isActionable, true, $actionClasses) . '
				<div class="ml-card-sample__container a-bg l-column--1-1">
					<picture class="l-column--1-1 a-pad-0">
						<img class="a-image l-column--1-1 a-pad--y lazy" data-src="' . $normalizePost->image . '">
					</picture>   
				</div>
			</div>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_plain_card($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return "";
    }
    return '
		<div class="og-block-samples ' . $block->get_modifiers() . '">
		    ' . $block->get_title() . '
		    <div class="l-flex l-flex--wrap a-pad l-flex--justify-center">
			' . render_bs_plain_card_entries($posts, $block->isActionable) . '
			</div>
        </div>';
}
