<?php

class ClassService
{
    public $custom;
    public $brand;
    public $anchor;


    public function __construct($attributes)
    {
        $this->custom = isset($attributes['className']) ? $attributes['className'] : '';
        $this->brand = isset($attributes['brand']) ? $attributes['brand'] : '';
        $this->anchor = isset($attributes['anchor']) && $attributes['anchor'] ? 'bs_anchor' : '';
    }

    public function get_modifiers()
    {
        return $this->brand . ' ' . $this->custom . ' ' . $this->anchor;
    }
}
