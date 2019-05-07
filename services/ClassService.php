<?php

class ClassService
{
    public $custom;
    public $brand;
    public $anchor;


    public function __construct($custom, $brand, $anchor)
    {
        $this->custom = isset($custom) ? $custom : '';
        $this->brand = isset($brand) ? $brand : '';
        $this->anchor = isset($anchor) && $anchor ? 'bs_anchor' : '';
    }

    public function get_modifiers()
    {
        return $this->brand . ' ' . $this->custom . ' ' . $this->anchor;
    }
}
