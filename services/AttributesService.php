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

    private $attributes;

    public function secure_get($key)
    {
        return isset($this->attributes[$key]) ? $this->attributes[$key] : null;
    }

    public function __construct($attributes)
    {
        $this->attributes = $attributes;
        $this->title = $this->secure_get('title');
        $this->className = $this->secure_get('className');
        $this->max_entries = $this->secure_get('max_entries');
        $this->category = $this->secure_get('category');
        $this->type = $this->secure_get('type');
        $this->brand = $this->secure_get('brand');
        $this->content = $this->secure_get('content');
        $this->cta = $this->secure_get('cta');
        $this->url = $this->secure_get('url');
        $this->anchor = $this->secure_get('anchor');
        $this->description = $this->secure_get('description');
        $this->heading = $this->secure_get('heading');
        $this->image = $this->secure_get('image');
        $this->claim = $this->secure_get('claim');
        $this->subtitle = $this->secure_get('subtitle');
        $this->words = $this->secure_get('words');
        $this->selectedPost = $this->secure_get('selectedPost');
    }
    public function get_modifiers()
    {
        return $this->brand . ' ' . $this->className . ' ' . $this->anchor;
    }

    public function getCategoryTypeQuery()
    {
        return array(
            'post_type' => $this->type,
            'post_status' => 'publish',
            'category' => $this->category,
            'posts_per_page' => $this->max_entries
        );
    }
}
