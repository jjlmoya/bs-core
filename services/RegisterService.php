<?php

class RegisterService
{
    public $register;

    private $string = 'string';
    private $boolean = 'boolean';
    private $number = 'int';

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
            'max_entries' => array(
                'type' => $this->string,
            ),
            'category' => array(
                'type' => $this->string,
            ),
            'type' => array(
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
            ),
            'description' => array(
                'type' => $this->string,
            ),
            'heading' => array(
                'type' => $this->string,
            ),
            'image' => array(
                'type' => $this->string,
            ),
            'claim' => array(
                'type' => $this->string,
            ),
            'subtitle' => array(
                'type' => $this->string,
            ),
            'words' => array(
                'type' => $this->number,
            ),
            'selectedPost' => array(
                'type' => $this->number,
            ),
            'isActionable' => array(
                'type' => $this->boolean,
            ),
            'gallery' => array(
                'type'    => 'array',
                'default' => [],
                'items'   => [
                    'type' => 'string',
                ],
            )
        );
    }
}