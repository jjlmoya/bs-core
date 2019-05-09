<?php

class AttributesService
{
    public $formattedAttributes;

    public function __construct($attributes)
    {
        $array = array();
        $map = $this->get_attributes_map();
        foreach ($attributes as $attribute) {
            $entry = array($attribute => array(
                $map[$attribute]
            ));
            array_push($array, $entry);
        }
        $this->register = $array;
    }

    public function get_attributes_map()
    {
        return array(
            'title' => array(
                'type' => 'string',
            ),
            'className' => array(
                'type' => 'string',
            ),
            'brand' => array(
                'type' => 'string',
            )
        );
    }
}
