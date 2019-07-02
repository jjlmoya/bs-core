<?php

class PostService
{
    public $title;
    public $image;
    public $description;
    public $url;
    public $words;

    public function __construct($words = 30)
    {
        //global post used here

        $this->words = $words;
        $this->title = get_the_title();
        $this->description = $this->get_content();
        $this->image = esc_url(get_the_post_thumbnail_url(get_the_ID()));
        $this->url = esc_url(get_the_permalink());
    }

    private function get_content()
    {
        if ($this->words > 300 || $this->words === -1) {
            $query = get_post(get_the_ID());
            return apply_filters('the_content', $query->post_content);
        }

        return wp_trim_words(get_the_content(), $this->words, '...');
    }

    public function get_normalize_post()
    {
        return array(
            'title' => $this->title,
            'image' => $this->image,
            'description' => $this->description
        );
    }

}
