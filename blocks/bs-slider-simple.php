<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-slider-simple';
register_block_type('bonseo/' . $block,
    array(
        'attributes' => array(
            'max_entries' => array(
                'type' => 'string',
            ),
            'className' => array(
                'type' => 'string',
            ),
            'cta' => array(
                'type' => 'string',
            ),
            'type' => array(
                'type' => 'string',
            ),
            'brand' => array(
                'type' => 'string',
            )
        ),
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
    $html = '';
    $index = 0;
    while ($posts->have_posts()) : $posts->the_post();
        $index++;
        $title = get_the_title();
        $image = esc_url(get_the_post_thumbnail_url(get_the_ID()));
        $url = esc_url(get_the_permalink());
        $html .= '
		  <div id="' . $index . '" class="og-slider--simple__slide l-column--1-1 l-flex l-flex--justify-space-evenly l-flex--align-center l-flex--direction-column l-position bs_slide is-active">
			 <picture class="a-image a-image--background l-position--absolute a-pad-0 ">
				<img class="a-image l-column--1-1 a-image--cover" src="' . $image . '">
			 </picture>
			 <h2 class="a-text a-text--xl  a-text--secondary a-text--center a-pad-40">
				' . $title . '
			 </h2>
			 <a href="' . $url . '" class="a-button a-button--linear a-button--linear--double a-mar a-button a-button--secondary a-button--m">
				 ' . $cta . '
			 </a>
		  </div>
		';

        unset($post);
    endwhile;
    return $html;
}

function render_bs_slider_simple($attributes)
{
    $max_entries = isset($attributes['max_entries']) ? $attributes['max_entries'] : 6;
    $cta = isset($attributes['cta']) ? $attributes['cta'] : '';
    $type = isset($attributes['type']) ? $attributes['type'] : '';
    $modifier = new ClassService($attributes['className'], $attributes['brand'], $attributes['anchor']);

    $args = array(
        'post_type' => $type,
        'post_status' => 'publish',
        'posts_per_page' => $max_entries
    );

    $posts = new WP_Query($args);
    if (empty($posts)) {
        return '';
    }
    return '
	<section class="og-slider--simple
	   l-grid-column--full
	   l-flex l-flex--align-center l-flex--justify-center
	   l-position bs_slider ' . $modifier->get_modifiers() . ' ">
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
	   	  ' . render_bs_slider_simple_render_elements($posts, $cta) . '
	   </div>
	   <div class="ml-slider-buttons l-flex l-position--absolute l-position--absolute--bottom og-slider--simple__buttons a-pad">
	   	  ' . render_bs_slider_simple_render_navigation($max_entries) . '
	   </div>
	</section>
	';
}

