<?php
if (!defined('ABSPATH')) {
    exit;
}

$block = 'block-bs-last-articles-zig-zag';
$registers = new RegisterService(
    array('title', 'max_entries', 'cta', 'words', 'className', 'brand', 'type', 'anchor', 'category')
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_last_articles_zig_zag',
    )
);

function render_bs_last_articles_zig_zag_element($isReverse, $cta, $title, $image, $link, $excerpt)
{
    $modifier = $isReverse ? 'is-reverse' : '';
    return '
		<div class="ml-article-extract l-flex l-flex--wrap a-pad ' . $modifier . '">
			<div class="ml-article-extract__image l-column--1-2 l-column--mobile--1-1">
				<picture class="">
					<img style="width:100%; object-fit: cover;" 
						 class="a-image a-image--thumbnail " 
						 src="' . $image . '">
				</picture>
			</div>
			<div class="ml-article-extract__content
					l-flex
					l-flex--direction-column
					l-flex--justify-space-around	
					l-column--1-2
					l-column--mobile--1-1
					a-pad--x-40">
				<h3 class="a-text a-text--l l-column--1-1">
					' . $title . '
				</h3>
				<div class="entry-resume-content a-pad"> ' . $excerpt . '</div>
				<a href="' . $link . '" class="a-button a-button--rounded a-button--s a-button--secondary l-flex--align-center">
					' . $cta . '
				</a>
			</div>
		</div>';
}


function render_bs_banner_posts($posts, $cta, $words)
{
    $html = '';
    $index = 0;
    while ($posts->have_posts()) : $posts->the_post();
        $normalizePost = new PostService($words);
        $html .= render_bs_last_articles_zig_zag_element($index % 2 == 0,
            $cta,
            $normalizePost->title,
            $normalizePost->image,
            $normalizePost->url,
            $normalizePost->description);
        unset($post);
        $index++;
    endwhile;
    return $html;
}

function render_bs_last_articles_zig_zag($attributes)
{
    $block = new AttributesService($attributes);
    $posts = new WP_Query($block->getCategoryTypeQuery());
    if (empty($posts)) {
        return "";
    }
    return '
	<section class="og-articles-zigzag a-pad-2 ' . $block->get_modifiers() . '">
		' . $block->get_title() . '
   		' . render_bs_banner_posts($posts, $block->cta, $block->words) . '
	</section>';

}
