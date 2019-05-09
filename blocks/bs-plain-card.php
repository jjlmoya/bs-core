<?php
if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-plain-card';
$registers = new RegisterService(
    array('className', 'brand', 'type', 'anchor', 'category', 'max_entries')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_plain_card',
    )
);

function render_bs_plain_card_entries($authors)
{
    $html = '';
    while ($authors->have_posts()) : $authors->the_post();
        $normalizePost = new PostService(200);
        $html .= '
			<div class="ml-card-sample l-flex l-flex--direction-column l-column--1-3 l-column--mobile--1-2 ml-card-sample--small a-pad">
				<a href="' . $normalizePost->url . '" class="ml-card-sample__title a-bg--dark l-column--1-1">
					<h3 class="a-text  a-text--secondary a-text--center a-pad--y">
						' . $normalizePost->title . '
					</h3>    
				</a>
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
    $max_entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 3;
    $type = isset($attributes['type']) ? $attributes['type'] : 'post';
    $category = isset($attributes['category']) ? $attributes['category'] : '';
    $modifier = new ClassService($attributes);

    $args = array(
        'post_type' => $type,
        'post_status' => 'publish',
        'category' => $category,
        'posts_per_page' => $max_entries
    );
    $posts = new WP_Query($args);
    if (empty($posts)) {
        return "";
    }
    return '
		<div class="og-block-samples l-flex l-flex--wrap a-pad l-flex--justify-center ' . $modifier->get_modifiers() . '">
			' . render_bs_plain_card_entries($posts) . '
        </div>';
}
