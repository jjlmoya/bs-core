<?php
if (!defined('ABSPATH')) {
	exit;
}
$block = 'block-bs-product-float';
register_block_type('bonseo/' . $block,
	array(
		'attributes' => array(
			'post' => array(
				'type' => 'string',
			),
			'className' => array(
				'type' => 'string',
			),
			'brand' => array(
				'type' => 'string',
			)

		),
		'render_callback' => 'render_bs_product_float',
	)
);

function render_bs_product_float_actions()
{
	$icons = array(
		'',
		'',
		''
	);
	return '<div class="a-button--icon a-svg a-button--icon--secondary a-button--icon--border ml-action-icons__button a-mar--x-1 l-flex l-flex--align-center">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
						 x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
										<g>
											<g>
												<path
													d="M203.07,258.93c-3.9-3.91-10.24-3.91-14.14,0c-3.91,3.9-3.91,10.24,0,14.14c3.9,3.91,10.24,3.91,14.14,0    C206.98,269.17,206.98,262.83,203.07,258.93z"></path>
											</g>
										</g>
						<g>
							<g>
								<path
									d="M256,276c-16.542,0-30,13.458-30,30s13.458,30,30,30s30-13.458,30-30S272.542,276,256,276z M256,316    c-5.514,0-10-4.486-10-10c0-5.514,4.486-10,10-10c5.514,0,10,4.486,10,10C266,311.514,261.514,316,256,316z"></path>
							</g>
						</g>
						<g>
							<g>
								<path
									d="M256,226c-11.178,0-21.987,2.259-32.124,6.715c-5.056,2.223-7.353,8.123-5.131,13.179    c2.222,5.056,8.123,7.352,13.179,5.131C239.509,247.691,247.61,246,256,246c33.084,0,60,26.916,60,60s-26.916,60-60,60    s-60-26.916-60-60c0-0.342-0.001-0.676,0.007-1.018c0.128-5.521-4.244-10.101-9.765-10.229c-5.53-0.138-10.101,4.243-10.229,9.765    C176.001,305.016,176,305.502,176,306c0,44.112,35.888,80,80,80s80-35.888,80-80S300.112,226,256,226z"></path>
							</g>
						</g>
						<g>
							<g>
								<path
									d="M256,76c-5.523,0-10,4.477-10,10v60c0,5.523,4.477,10,10,10s10-4.477,10-10V86C266,80.477,261.523,76,256,76z"></path>
							</g>
						</g>
						<g>
							<g>
								<path
									d="M144.281,150.138l-42.42-42.42c-3.905-3.905-10.237-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l42.42,42.42    c3.905,3.905,10.238,3.906,14.143,0C148.186,160.376,148.186,154.044,144.281,150.138z"></path>
							</g>
						</g>
						<g>
							<g>
								<path
									d="M424.282,107.718c-3.905-3.905-10.237-3.905-14.143,0l-42.42,42.42c-3.905,3.905-3.905,10.237,0,14.143    c3.904,3.905,10.237,3.906,14.143,0l42.42-42.42C428.187,117.956,428.187,111.624,424.282,107.718z"></path>
							</g>
						</g>
						<g>
							<g>
								<path
									d="M509.495,307.71C445.97,235.791,351.646,176,256,176c-95.659,0-189.982,59.806-253.495,131.71    c-3.656,4.14-3.264,10.459,0.875,14.115c4.14,3.656,10.46,3.264,14.115-0.875c2.131-2.413,4.314-4.817,6.525-7.206    C73.435,388.408,163.013,436,256,436s182.565-47.592,231.98-122.256c2.211,2.39,4.394,4.794,6.525,7.206    c3.644,4.126,9.963,4.542,14.115,0.875C512.759,318.169,513.151,311.849,509.495,307.71z M256,416    c-87.915,0-172.471-45.679-217.689-116.98C73.939,264.109,156.261,196,256,196c99.74,0,182.061,68.109,217.689,103.019    C428.471,370.321,343.915,416,256,416z"></path>
							</g>
						</g>
									</svg>
			</div>';
}

function render_bs_product_float($attributes)
{
	$class = isset($attributes['className']) ? $attributes['className'] : '';
	$brand = isset($attributes['brand']) ? $attributes['brand'] : '';
	$postID = isset($attributes['post']) ? $attributes['post'] : '';
	$post = get_post($postID);
	var_dump($post);
	return '
	<section class="ml-product-float a-bg--gradient--transparent-to-top
		a-mar a-mar--top-60
		l-flex l-flex--align-center l-flex--justify-center l-flex--direction-column ' . $class . ' ' . $brand . '">
		<div class="ml-product-float__content
			l-flex l-flex--direction-column  l-flex-align--center
			a-mar-auto a-bg a-pad--x">
				<picture class="a-text--center a-pad-0">
					<img data-target="" class="a-image a-mar--minus-60" src="https://www.paredesoriginales.com/328-large_default/vinilo-torre-eiffel.jpg">
				</picture>
				<h2 class="a-text a-text--xl  a-text--m a-text--secondary a-pad--y-5">' . $post->post_title . '</h2>
				<span class="a-price a-text--secondary a-text--bold a-pad--y-5">
					<span class="a-text--stroke a-mar--x-5">5.35€</span> 2.35€
				</span>
				<p class="a-text a-text--secondary a-text--xs a-pad--y-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
		</div>
		<div class="ml-action-icons ml-product-float__action a-mar--minus l-flex">
			' . render_bs_product_float_actions() . '
		</div>
	</section>';
}



