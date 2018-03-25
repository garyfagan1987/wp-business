<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['sidebar'] = Timber::get_sidebar('sidebar.php');
$context['wp_title'] .= ' - ' . $post->title();
$context['comment_form'] = TimberHelper::get_comment_form();
$context['images'] = get_field("gallery");

// related posts
$tags = $post->tags();
if ($tags) {
	$tag_ids = array();

	foreach($tags as $individual_tag) {
		$tag_ids[] = $individual_tag->term_id;
	};

	$args = array(
		'tag__in' => $tag_ids,
		'post__not_in' => array($post->ID),
		'posts_per_page'=>2, // Number of related posts to display.
		'ignore_sticky_posts'=>1
	);

	$context['related_articles'] = Timber::get_posts($args);
}

if ( post_password_required( $post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	Timber::render( array( 'single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig' ), $context );
}
