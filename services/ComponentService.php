<?php

class ComponentService
{

    public function __construct()
    {
    }

    public function get_actionable_url($classes, $link, $anchor, $isActionable, $isVisible)
    {
        if ($isActionable) {
            return '<a href="' . $link . '" class="' . $classes . '">' . $anchor . '</a>';
        }
        return $isVisible ? '<div class="' . $classes . '">' . $anchor . '</div>' : '';
    }
}
