<?php

class PostService
{
    public $title;
    public $image;
    public $description;
    public $url;
    public $words;
    public $html;

    public function __construct($post = null, $words = 30)
    {
        $this->words = $words;
        if (empty($post)) {
            $this->get_global_post();
        } else {
            $this->get_post($post);
        }
    }

    public function get_post($post)
    {
        $this->title = $post->post_title;
        $this->description = wp_trim_words($post->post_content, $this->words, '...');
        $this->image = esc_url(get_the_post_thumbnail_url($post->ID));
        $this->url = esc_url(get_the_permalink($post->ID));
    }

    public function get_global_post()
    {
        $query = get_post(get_the_ID());
        $this->title = get_the_title();
        $this->description = wp_trim_words(get_the_content(), $this->words, '...');
        $this->image = esc_url(get_the_post_thumbnail_url(get_the_ID()));
        $this->url = esc_url(get_the_permalink());
        $this->html = $query->post_content;
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
