<?php
if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-authors-extract';

register_block_type('bonseo/' . $block,
    array(
        'attributes' => array(
            'title' => array(
                'type' => 'string',
            ),
            'max_entries' => array(
                'type' => 'string',
            ),
            'type' => array(
                'type' => 'string',
            ),
            'className' => array(
                'type' => 'string',
            ),
            'brand' => array(
                'type' => 'string',
            )

        ),
        'render_callback' => 'render_bs_authors_extract',
    )
);




function render_bs_authors_extract_entries($authors)
{
    $html = '';
    while ($authors->have_posts()) : $authors->the_post();
        $postID = get_the_ID();
        $title = get_the_title();
        $image = esc_url(get_the_post_thumbnail_url($postID));
        $description = wp_trim_words(get_the_excerpt(), 10, '...');
        $link = esc_url(get_the_permalink());
        $position = get_post_meta($postID, 'bs_publisher_position', true);
        $html .= '
		<div class="ml-card-author l-flex l-flex--direction-column l-flex--justify-center l-column--1-3 l-column--mobile--2-3 a-pad">
			<div class="ml-card-author__image l-flex-item--align-center l-column--1-1">
				<picture class="a-pad l-column--1-1 a-pad-0">
					<img class="a-image l-column--1-1" src="' . $image . '">
					</picture>
				</div>
			<div class="ml-card-author__description a-border--primary a-pad">
				<h3>
					<a href="' . $link . '" class="a-text a-text--underline a-text--bold a-text--link a-text--brand">
						' . $title . '
					</a>
				</h3>
				<p class="a-text a-text--bold a-text--xs ">
					' . $position . '
				</p>
				<p class="a-text a-pad--y">
					' . $description . '
				</p>
			</div>
		</div>';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_authors_extract($attributes)
{
    $entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 0;
    $title = isset($attributes['title']) ? $attributes['title'] : 'Nuestros Colaboradores:';
    $type = isset($attributes['type']) ? $attributes['type'] : 'bs-service';
    $modifier = new ClassService($attributes['className'], $attributes['brand'], $attributes['anchor']);

    $args = array(
        'post_type' => $type,
        'post_status' => 'publish',
        'posts_per_page' => $entries
    );
    $authors = new WP_Query($args);
    if (empty($authors)) {
        return "";
    }
    return '
	<section class="og-block-authors ' . $modifier->get_modifiers() . '">
	<h2 class="a-text a-text--xl">' . $title . '</h2>
		<div class="l-flex l-flex--justify-center l-flex--wrap a-pad--y">
		' . render_bs_authors_extract_entries($authors) . '
		</div>
	</section>';
}
