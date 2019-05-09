<?php

class RegisterService
{
    public $register;

    private $string = 'string';
    private $boolean = 'boolean';

    public function __construct($attributes)
    {
        $entry = array();
        $map = $this->get_attributes_map();
        foreach ($attributes as $attribute) {
            $entry[$attribute] = $map[$attribute];
        }
        $this->register = $entry;
    }

    public function get_attributes_map()
    {
        return array(
            'title' => array(
                'type' => $this->string,
            ),
            'className' => array(
                'type' => $this->string,
            ),
            'brand' => array(
                'type' => $this->string,
            ),
            'content' => array(
                'type' => $this->string,
            ),
            'cta' => array(
                'type' => $this->string,
            ),
            'url' => array(
                'type' => $this->string,
            ),
            'anchor' => array(
                'type' => $this->boolean,
            )
        );
    }
}
