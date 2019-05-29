<?php

class AttributesService
{
    public $title;
    public $className;
    public $max_entries;
    public $category;
    public $type;
    public $brand;
    public $content;
    public $cta;
    public $url;
    public $anchor;
    public $description;
    public $heading;
    public $image;
    public $claim;
    public $subtitle;
    public $words;
    public $selectedPost;
    public $title_direction;
    public $isActionable;
    private $attributes;

    public function secure_get($key, $defaultValue)
    {
        return isset($this->attributes[$key]) ? $this->attributes[$key] : $defaultValue;
    }

    public function __construct($attributes)
    {
        $this->attributes = $attributes;
        $this->title = $this->secure_get('title', null);
        $this->className = $this->secure_get('className', null);
        $this->max_entries = $this->secure_get('max_entries', null);
        $this->category = $this->secure_get('category', null);
        $this->type = $this->secure_get('type', null);
        $this->brand = $this->secure_get('brand', null);
        $this->content = $this->secure_get('content', null);
        $this->cta = $this->secure_get('cta', null);
        $this->url = $this->secure_get('url', null);
        $this->anchor = $this->secure_get('anchor', null);
        $this->description = $this->secure_get('description', null);
        $this->heading = $this->secure_get('heading', null);
        $this->image = $this->secure_get('image', null);
        $this->claim = $this->secure_get('claim', null);
        $this->subtitle = $this->secure_get('subtitle', null);
        $this->words = $this->secure_get('words', null);
        $this->selectedPost = $this->secure_get('selectedPost', null);
        $this->isActionable = $this->secure_get('isActionable', true);
    }

    public function get_modifiers()
    {
        return $this->brand . ' ' . $this->className . ' ' . $this->anchor;
    }

    public function get_title()
    {
        $modifierPosition = $this->title_direction ? $this->title_direction : 'a-text--center';
        return $this->title && !empty($this->title)
            ? '<h2 class="a-text a-text--xl a-text--brand a-pad--y ' . $modifierPosition . '">' . $this->title . '</h2>'
            : '';
    }

    public function getCategoryTypeQuery()
    {
        return array(
            'post_type' => $this->type,
            'post_status' => 'publish',
            'cat' => $this->category,
            'posts_per_page' => $this->max_entries
        );
    }

    public function get_actionable_url($classes, $link, $anchor, $isActionable)
    {

    }
}
