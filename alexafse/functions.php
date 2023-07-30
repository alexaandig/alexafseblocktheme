<?php
function load_stylesheets()
{
    wp_enqueue_style('styles', get_template_directory_uri() . '/assets/css/style.css', array(), '1.0.0', 'all');
    wp_enqueue_style('custom', get_template_directory_uri() . '/assets/css/custom.css', array(), '1.0.0', 'all');
    wp_enqueue_style('font', get_template_directory_uri() . '/assets/js/webfont.js', array(), '1.0.0', 'all');
}
add_action('wp_enqueue_scripts', 'load_stylesheets');

function alexafse_enqueue_scripts()
{
    // Deregister the local copy of jQuery if needed
    wp_deregister_script('jquery');

    // Enqueue your custom script with jQuery as a dependency
    wp_enqueue_script('jquery-3.5.1', get_template_directory_uri() . '/assets/js/jquery-3.5.1.js', array('jquery'), '1.0', true);
    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0', true);

    wp_enqueue_script('custom', get_template_directory_uri() . '/assets/js/custom.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'alexafse_enqueue_scripts');

