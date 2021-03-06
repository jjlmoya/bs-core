<?php
if (!defined('ABSPATH')) {
    exit;
}
$block = 'block-bs-product-float';
$registers = new RegisterService(
    array_merge(
        ComponentSettings::COMMONS_PARAMETERS,
        ComponentSettings::ACTIONABLE_PARAMETERS,
        array('selectedPost')
    )
);
register_block_type('bonseo/' . $block,
    array(
        'attributes' => $registers->register,
        'render_callback' => 'render_bs_product_float',
    )
);
function render_bs_product_float_action_affiliate($link)
{
    $icon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="34.157px" height="34.158px" viewBox="0 0 34.157 34.158" style="enable-background:new 0 0 34.157 34.158;" xml:space="preserve">
				<g>
					<path d="M17.975,25.103v4.603H1.58V3.851h16.395v4.953h1.582V2.519c0-1.252-1.023-2.273-2.273-2.273H2.273   C1.021,0.246,0,1.267,0,2.519v29.12c0,1.252,1.021,2.273,2.273,2.273h15.01c1.25,0,2.273-1.021,2.273-2.273v-6.535H17.975z    M7.376,1.887h4.802c0.152,0,0.275,0.121,0.275,0.273c0,0.15-0.123,0.275-0.275,0.275H7.376c-0.152,0-0.274-0.125-0.274-0.275   C7.102,2.008,7.224,1.887,7.376,1.887z M9.777,32.777c-0.627,0-1.137-0.51-1.137-1.139c0-0.627,0.51-1.137,1.137-1.137   c0.629,0,1.139,0.51,1.139,1.137C10.915,32.267,10.406,32.777,9.777,32.777z M25.406,23.711H9.14l-2.993-13.44h18.301l-0.496,1.926   H8.547l2.137,9.591h13.177l3.311-14.991h6.985v1.924h-5.44L25.406,23.711z M14.531,26.267c0,0.992-0.806,1.797-1.795,1.797   c-0.992,0-1.797-0.805-1.797-1.797c0-0.99,0.805-1.795,1.797-1.795C13.727,24.472,14.531,25.277,14.531,26.267z M23.922,26.267   c0,0.992-0.805,1.797-1.797,1.797c-0.99,0-1.795-0.805-1.795-1.797c0-0.99,0.805-1.795,1.795-1.795   C23.117,24.472,23.922,25.277,23.922,26.267z"/>
				</g>
			</svg>';
    return isset($link) ? render_bs_product_float_action($link, $icon) : '';
}

function render_bs_product_float_action_map($markerX, $markerY)
{

    if (empty($markerX) || empty($markerY)) {
        return '';
    }
    $icon = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 54 54" style="enable-background:new 0 0 54 54;" xml:space="preserve">
			<g>
				<path d="M53.516,1.143c-0.3-0.182-0.674-0.19-0.983-0.027L36,9.869L19.468,1.116c-0.013-0.007-0.028-0.009-0.041-0.015   c-0.048-0.023-0.097-0.04-0.147-0.055c-0.028-0.008-0.055-0.017-0.083-0.023c-0.055-0.011-0.111-0.015-0.168-0.017   c-0.025-0.001-0.05-0.004-0.076-0.003c-0.054,0.003-0.107,0.013-0.16,0.025c-0.03,0.006-0.06,0.01-0.089,0.019   c-0.007,0.002-0.014,0.002-0.02,0.004l-18,6C0.275,7.187,0,7.569,0,8v43c0,0.321,0.154,0.623,0.416,0.812   C0.588,51.935,0.793,52,1,52c0.106,0,0.213-0.017,0.316-0.052l17.646-5.882l16.657,6.859c0.014,0.006,0.03,0.004,0.044,0.009   C35.773,52.973,35.885,53,36,53c0.09,0,0.179-0.015,0.266-0.039c0.028-0.008,0.054-0.021,0.082-0.031   c0.04-0.015,0.082-0.026,0.12-0.046l17-9C53.795,43.711,54,43.37,54,43V2C54,1.649,53.816,1.324,53.516,1.143z M2,8.721l16-5.333   v26.992c-0.43,0.078-0.854,0.166-1.264,0.274c-0.534,0.142-0.852,0.689-0.71,1.223c0.119,0.448,0.523,0.744,0.966,0.744   c0.084,0,0.171-0.011,0.257-0.033c0.24-0.064,0.502-0.096,0.751-0.148v11.84L2,49.612V8.721z M20,32.16   c0.321-0.025,0.632-0.066,0.961-0.073c0.552-0.012,0.99-0.469,0.979-1.021c-0.012-0.545-0.457-0.979-1-0.979   c-0.007,0-0.015,0-0.022,0c-0.31,0.007-0.615,0.024-0.918,0.045V3.661l15,7.941v21.194c-0.714-0.031-1.44-0.115-2.201-0.262   c-0.544-0.107-1.067,0.249-1.172,0.791s0.25,1.067,0.792,1.172c0.886,0.172,1.746,0.256,2.582,0.289v15.721L20,44.33V32.16z    M52,42.397l-15,7.941v-15.66c0.372-0.169,0.62-0.549,0.587-0.98c-0.029-0.374-0.269-0.674-0.587-0.821V11.602l15-7.941V42.397z"/>
				<path d="M11,9c-2.757,0-5,2.243-5,5c0,2.415,1.721,4.434,4,4.899V21c0,0.553,0.448,1,1,1s1-0.447,1-1v-2.101   c2.279-0.465,4-2.484,4-4.899C16,11.243,13.757,9,11,9z M11,17c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S12.654,17,11,17z"/>
				<path d="M45.07,27.673c0.12,0.047,0.243,0.068,0.364,0.068c0.4,0,0.777-0.241,0.932-0.636c0.47-1.199,0.847-2.553,1.123-4.024   c0.102-0.542-0.256-1.064-0.799-1.167c-0.546-0.09-1.065,0.257-1.167,0.8c-0.252,1.348-0.595,2.58-1.019,3.663   C44.303,26.89,44.556,27.471,45.07,27.673z"/>
				<path d="M12.805,32.342c-1.207,0.757-2.295,1.705-3.235,2.82c-0.356,0.422-0.302,1.053,0.12,1.409   c0.188,0.158,0.417,0.235,0.644,0.235c0.285,0,0.567-0.121,0.765-0.355c0.806-0.956,1.737-1.769,2.768-2.414   c0.468-0.294,0.609-0.911,0.316-1.379C13.89,32.19,13.272,32.048,12.805,32.342z"/>
				<path d="M8.627,38.276c-0.502-0.23-1.096-0.013-1.327,0.489c-1.026,2.226-1.28,4.023-1.291,4.099   c-0.075,0.547,0.307,1.05,0.854,1.125c0.046,0.007,0.093,0.01,0.138,0.01c0.491,0,0.919-0.362,0.99-0.861   c0.002-0.016,0.231-1.597,1.125-3.534C9.347,39.101,9.128,38.508,8.627,38.276z"/>
				<path d="M40.423,33.729c0.153,0,0.309-0.035,0.454-0.109c1.292-0.661,2.431-1.599,3.384-2.786c0.346-0.431,0.277-1.061-0.154-1.406   c-0.43-0.343-1.06-0.276-1.406,0.154c-0.776,0.967-1.696,1.726-2.735,2.257c-0.492,0.252-0.687,0.854-0.435,1.346   C39.709,33.53,40.06,33.729,40.423,33.729z"/>
				<path d="M29.17,31.432c-0.441-0.185-0.699-0.313-0.716-0.322c-0.065-0.033-0.134-0.06-0.205-0.078   c-1.083-0.278-2.15-0.498-3.173-0.654c-0.545-0.086-1.056,0.291-1.14,0.837c-0.083,0.546,0.292,1.057,0.838,1.14   c0.926,0.142,1.893,0.34,2.877,0.59c0.134,0.064,0.39,0.185,0.748,0.334c0.126,0.053,0.257,0.077,0.385,0.077   c0.391,0,0.763-0.23,0.923-0.614C29.92,32.23,29.68,31.644,29.17,31.432z"/>
				<path d="M46.923,19.931c0.022,0.001,0.043,0.002,0.065,0.002c0.523,0,0.963-0.406,0.997-0.937c0.062-0.961,0.093-1.978,0.093-3.02   c0-0.347-0.003-0.699-0.01-1.058c-0.01-0.553-0.49-0.973-1.018-0.982c-0.552,0.01-0.992,0.466-0.982,1.018   c0.006,0.347,0.01,0.688,0.01,1.022c0,1-0.03,1.973-0.089,2.893C45.954,19.42,46.372,19.895,46.923,19.931z"/>
				<path d="M8.293,28.707C8.488,28.902,8.744,29,9,29s0.512-0.098,0.707-0.293L11,27.414l1.293,1.293C12.488,28.902,12.744,29,13,29   s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L12.414,26l1.293-1.293c0.391-0.391,0.391-1.023,0-1.414   s-1.023-0.391-1.414,0L11,24.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L9.586,26l-1.293,1.293   C7.902,27.683,7.902,28.316,8.293,28.707z"/>
			</g>
		</svg>';
    $link = 'https://www.google.com/maps/@' . $markerX . ',' . $markerY . 'z';
    return render_bs_product_float_action($link, $icon);

}

function render_bs_product_float_action($link, $icon)
{
    if (empty($link)) {
        return '';
    }
    return '<a href="' . $link . '" 
			   target="_blank"	
			   class="ml-action-icons__button
			   		  a-button--icon a-svg a-button--icon--secondary a-button--icon--border a-mar--x-1 
			   		  l-flex l-flex--align-center">
				' . $icon . '
			</a>';
}

function render_bs_product_float_price($price)
{
    if (empty($price)) {
        return '';
    }
    return '<span class="a-price a-text--secondary a-text--bold a-pad--y-5">' . $price . '€</span>';
}

function render_bs_product_float_actions($link, $markerX, $markerY)
{
    return render_bs_product_float_action_affiliate($link) . render_bs_product_float_action_map($markerX, $markerY);
}

function render_bs_product_float($attributes)
{
    $block = new AttributesService($attributes);
    if (empty($block->selectedPost)) {
        return '';
    }
    $id = $block->selectedPost;
    $post = get_post($block->selectedPost);
    $postType = get_post_type($block->selectedPost);

    $affiliateLink = get_post_meta($id, $postType . '_affiliateLink', true);
    $markerX = get_post_meta($id, $postType . '_cordX', true);
    $markerY = get_post_meta($id, $postType . '_cordY', true);
    $price = get_post_meta($id, $postType . '_price', true);
    $image = esc_url(get_the_post_thumbnail_url($id));


    return '
	<section class="l-flex l-flex--justify-center">
		<div class="ml-product-float a-bg--gradient--transparent-to-top
			a-mar a-mar--top-60
			l-flex l-flex--align-center l-flex--justify-center l-flex--direction-column ' . $block->get_modifiers() . '">
			<div class="ml-product-float__content
				l-flex l-flex--direction-column  l-flex-align--center
				a-mar-auto a-bg a-pad--x">
					<picture class="a-text--center a-pad-0">
						<img data-target="" class="a-image a-mar--minus-60 u-shadow--bottom" 
						src="' . $image . '">
					</picture>
					<h2 class="a-text a-text--xl  a-text--m a-text--secondary a-pad--y-5">' . $post->post_title . '</h2>
					' . render_bs_product_float_price($price) . '
					<p class="a-text a-text--secondary a-text--xs a-pad--y-5">
					' . wp_trim_words($post->post_content, 30, '...') . '
					</p>
			</div>
			<div class="ml-action-icons ml-product-float__action a-mar--minus l-flex">
				' . render_bs_product_float_actions($affiliateLink, $markerX, $markerY) . '
			</div>
		</div>
	</section>';
}



