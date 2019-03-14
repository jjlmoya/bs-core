<?php

class Brand
{
	public $values;

	public function __construct()
	{
		$this->values = Array(
			'sky',
			'diable',
			'kino',
			'reverse-sky',
			'purple-skies',
			'forest',
			'lollipop',
			'mint',
			'paradise-orange',
			'lime-sports'
		);
	}

	function getValues()
	{
		return $this->values;
	}

}




