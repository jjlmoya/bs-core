<?php

class ComponentService
{

    public function __construct()
    {
    }

    public function get_actionable_url($classes, $link, $anchor, $isActionable, $isVisible, $actionModifier)
    {
        if ($isActionable) {
            return '<a href="' . $link . '" class="' . $classes . ' ' . $actionModifier . '">' . $anchor . '</a>';
        }
        return $isVisible ? '<div class="' . $classes . '">' . $anchor . '</div>' : '';
    }
}
