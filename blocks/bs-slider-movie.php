<?php

if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-slider-movie';
$registers = new RegisterService(
    array('cta', 'max_entries', 'type', 'category', 'brand', 'className', 'anchor', 'isActionable')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_slider_movie',
    )
);

function render_bs_slider_movie($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return '';
    }
    return '';
}



/*
<div class="og-slider--movie
            l-grid-column--full
            l-flex l-flex--align-start l-flex--justify-start
            l-position bs_slider "
     data-autoplay="1000000"
     data-content=".bs_slider_content"
     data-slide=".bs_slide"
     data-replay="true"
     data-button=".og-slider--movie__button"
     data-arrow=".bs_slider_arrow">
    <div class="og-slider--movie__content l-position bs_slider_content">
        <div id="3" class="a-pad-40 l-position og-slider--movie__slide bs_slide">
            <picture class="a-image a-image--background l-position--absolute a-pad-0 ">
                <img  class="a-image l-column--1-1 a-image--cover" src=https://designyoutrust.com/wp-content/uploads/2018/09/Bugaboos.jpg>
            </picture>    <div class="a-text a-text--xl a-text--uppercase a-text--inset">SEO
            </div>
        </div>        <div id="1" class="l-flex l-flex--justify-space-evenly l-flex--align-center l-flex--direction-column l-position og-slider--movie__slide bs_slide">
            <picture class="a-image a-image--background l-position--absolute a-pad-0 ">
                <img  class="a-image l-column--1-1 a-image--cover" src=https://auspostenterprise.com.au/content/dam/corp/ent-gov/insights/digitising-services/how-regulation-and-technology.jpg>
            </picture>    <h2 class="a-text a-text--xl  a-text--secondary a-text--center a-pad-40">
                Mriya's Collection
            </h2>    <a class="a-button a-button--linear a-button--linear--double a-mar a-button a-button--secondary a-button--m">
                Mriya
            </a></div>        <div id="2" class="a-pad-40 l-position og-slider--movie__slide bs_slide">
            <picture class="a-image a-image--background l-position--absolute a-pad-0 ">
                <img  class="a-image l-column--1-1 a-image--cover" src=https://designyoutrust.com/wp-content/uploads/2018/09/Bugaboos.jpg>
            </picture>    <div class="a-text a-text--xl a-text--uppercase a-text--inset">SEO
            </div>
        </div>    </div>
    <div class="og-slider--movie__nav">
        <div class="ml-slider-buttons l-flex l-flex--direction-column l-flex--justify-center l-flex--align-center og-slider--movie__buttons">
                <h2 class="a-button--slider--title og-slider--movie__button l-column--1-1 a-text a-text--center">Title 0</h2>
                <h2 class="a-button--slider--title og-slider--movie__button l-column--1-1 a-text a-text--center">Title 1</h2>
                <h2 class="a-button--slider--title og-slider--movie__button l-column--1-1 a-text a-text--center">Title 2</h2>
        </div>    </div>
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
    </div>    <div class="ml-arrow ml-arrow--right
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
    </div></div>
 */