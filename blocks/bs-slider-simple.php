<?php

if (!defined('ABSPATH')) {
    exit;
}
$cta = '';
$block = 'block-bs-slider-simple';
$registers = new RegisterService(
    array('cta', 'max_entries', 'type', 'category', 'brand', 'className', 'anchor', 'isActionable')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_slider_simple',
    )
);

function render_bs_slider_simple_render_navigation($length)
{
    $html = '';
    $class = 'is-active';
    for ($i = 0; $i < intval($length); $i++) {
        $html .= '<a href="#' . ($i + 1) . '" s
					class="a-mar--right-5 a-button u-pointer a-button--slider bs_slider_button ' . $class . ' "></a>';
        $class = '';
    }
    return $html;
}

function render_bs_slider_simple_render_elements($posts, $cta)
{
    return join(array_map(function ($post) use ($cta) {
        $normalizePost = new PostService($post, 200);
        return '
		  <div class="og-slider--simple__slide l-column--1-1 l-flex l-flex--justify-space-evenly l-flex--align-center l-flex--direction-column l-position bs_slide is-active">
			 <picture class="a-image a-image--background l-position--absolute a-pad-0 ">
				<img class="a-image l-column--1-1 a-image--cover" src="' . $normalizePost->image . '">
			 </picture>
			 <h2 class="a-text a-text--xl  a-text--secondary a-text--center a-pad-40">
				' . $normalizePost->title . '
			 </h2>
			 <a href="' . $normalizePost->url . '" class="a-button a-button--linear a-button--linear--double a-mar a-button a-button--secondary a-button--m">
				 ' . $cta . '
			 </a>
		  </div>
		';
    }, $posts));
}

function render_bs_slider_simple($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return '';
    }
    return '
	<section class="og-slider--simple
	   l-grid-column--full
	   l-flex l-flex--align-center l-flex--justify-center
	   l-position bs_slider ' . $block->get_modifiers() . ' ">
	   <div class="ml-arrow ml-arrow--left
		  a-bg--gradient--dark a-text--secondary
		  ml-arrow--full l-flex l-flex--align-center l-flex--justify-center">
		  &lt;
	   </div>
	   <div class="ml-arrow ml-arrow--right
		  a-bg--gradient--dark a-text--secondary
		  ml-arrow--full
		  l-flex l-flex--align-center l-flex--justify-center">
		  &lt;
	   </div>
	   <div class="og-slider--simple__content bs_slider_content">
	   	  ' . render_bs_slider_simple_render_elements($posts->posts, $block->cta) . '
	   </div>
	   <div class="ml-slider-buttons l-flex l-position--absolute l-position--absolute--bottom og-slider--simple__buttons a-pad">
	   	  ' . render_bs_slider_simple_render_navigation($block->max_entries) . '
	   </div>
	</section>
	';
}

