<?php

add_action('rest_api_init', function () {
	register_rest_route('bonseo/v1', '/brand/', array(
		'methods' => 'GET',
		'callback' => 'bs_get_brands'
	));
});

function bs_get_brands()
{

	$brand = new Brand();
	return $brand->getValues();
}
