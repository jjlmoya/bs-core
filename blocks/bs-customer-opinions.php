<?php

if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-customer-opinions';
$registers = new RegisterService(
    array('title', 'claim', 'subtitle', 'image', 'className', 'anchor', 'brand')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_customer_opinions'
    )
);

function render_bs_customer_opinions_render($opinions)
{
    $html = '';
    while ($opinions->have_posts()) : $opinions->the_post();
        $normalizePost = new PostService();
        $html .= '
			<div class="ml-card-testimony 
						l-flex l-flex--justify-center l-flex--mobile--direction-column l-column--1-2 l-column--mobile--1-1
						a-mar u-shadow--bottom l-flex--align-center ">
				<picture class="a-pad">
					<img class="a-image a-image--avatar " src="' . $normalizePost->image . '">
				</picture>
				<div class="ml-card-testimony__content l-flex l-flex--direction-column l-flex--align-center a-pad">
					<h3 class="a-text a-pad--y-5 a-text--bold l-flex-item--align-start a-text--brand">
					' . $normalizePost->title . '
					</h3>
					<p class="a-text l-flex-item--align-start">
						' . $normalizePost->description . '
					</p>
				</div>
			</div>
		';
        unset($post);
    endwhile;
    return $html;
}

function render_bs_customer_opinions($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return "";
    }
    return '
		<section class="og-block-testimony ' . $block->get_modifiers() . '">
			' . $block->get_title() . '
			<div class="og-block-testimony__group l-flex a-pad l-flex--wrap l-flex--justify-center ">
				' . render_bs_customer_opinions_render($posts) . '
			</div>
		</section>';
}
