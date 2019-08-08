<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-slider-simple';
$registers = new RegisterService(
    array_merge(
        ComponentSettings::SLIDER_PARAMETERS,
        ComponentSettings::COMMONS_PARAMETERS,
        ComponentSettings::QUERY_PARAMETERS,
        array('cta')
    )
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
    for ($i = 0; $i <= intval($length); $i++) {
        $html .= '<a class="og-slider--simple__button a-button--slider a-mar-5 u-pointer a-button--slider--pill"></a>  ';
    }
    return $html;
}

function render_bs_slider_simple_render_elements($posts, $cta)
{
    return join(array_map(function ($post) use ($cta) {
        $normalizePost = new PostService($post, 200);
        return '
        <div class="a-pad-40 l-position og-slider--simple__slide bs_slide">
            <picture class="a-image a-image--background l-position--absolute a-pad-0 ">
                <img class="a-image l-column--1-1 a-image--cover" src="' . $normalizePost->image . '">
            </picture>
            <div class="a-text a-text--xl a-text--uppercase a-text--inset">' . $normalizePost->title . '</div>
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
    $queryResult = new WP_Query($block->getCategoryTypeQuery());
    if (empty($queryResult)) {
        return '';
    }
    return '
	<section class="og-slider--simple
           l-grid-column--full
           l-flex l-flex--align-center l-flex--justify-center
           l-position bs_slider  ' . $block->get_modifiers() . ' "
	   data-autoplay="10000"
       data-content=".bs_slider_content"
       data-slide=".bs_slide"
       data-replay="true"
       data-button=".og-slider--simple__button"
       data-arrow=".bs_slider_arrow"
	   >
	   
	   <div class="og-slider--simple__content bs_slider_content">
	   	  ' . render_bs_slider_simple_render_elements($queryResult->posts, $block->cta) . '
	   </div>
	    <div class="ml-slider-buttons l-flex l-flex--wrap l-position--absolute l-position--absolute--bottom og-slider--simple__buttons a-pad">
	   	  ' . render_bs_slider_simple_render_navigation($block->max_entries) . '
	   </div>
	   
       <div class="ml-arrow ml-arrow--left
       a-bg--gradient--dark a-text--secondary
       bs_slider_arrow ml-arrow--full l-flex l-flex--align-center l-flex--justify-center"
        data-direction="left">
           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px"
                y="0px" width="306px" height="306px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;"
                xml:space="preserve">
            <g id="chevron-right">
                <polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   "/>
            </g>
         </svg>
       </div>
       <div class="ml-arrow ml-arrow--right
         a-bg--gradient--dark a-text--secondary
         bs_slider_arrow ml-arrow--full
         l-flex l-flex--align-center l-flex--justify-center"
            data-direction="right">
           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px"
                y="0px" width="306px" height="306px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;"
                xml:space="preserve">
            <g id="chevron-right">
                <polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   "/>
            </g>
         </svg>
       </div>
	</section>';
}
