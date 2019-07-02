<?php

class PostService
{
    public $title;
    public $image;
    public $description;
    public $url;
    public $words;
    public $html;

    public function __construct($words = 30)
    {
        //global post used here
        $query = get_post(get_the_ID());
        $this->words = $words;
        $this->title = get_the_title();
        $this->description = wp_trim_words(get_the_content(), $this->words, '...');
        $this->image = esc_url(get_the_post_thumbnail_url(get_the_ID()));
        $this->url = esc_url(get_the_permalink());
        $this->html = apply_filters('the_content', $query->post_content);
    }

    public function get_normalize_post()
    {
        return array(
            'title' => $this->title,
            'image' => $this->image,
            'description' => $this->description,
            'html' => $this->html,
            'url' => $this->url
        );
    }

}
