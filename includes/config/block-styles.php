<?php

declare( strict_types=1 );

namespace Alexa\Theme;

use function add_filter;
use function wp_get_global_settings;

add_filter( 'alexa_editor_data', NS . 'register_block_styles' );
/**
 * Adds default blocks styles.
 *
 * @since 0.9.10
 *
 * @param array $config Alexa editor config.
 *
 * @return array
 */
function register_block_styles( array $config ): array {
	$config['blockStyles'] = [
		'register'   => [
			[
				'type'  => 'core/buttons',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexa' ),
			],
			[
				'type'  => 'core/button',
				'name'  => 'ghost',
				'label' => __( 'Ghost', 'alexa' ),
			],
			[
				'type'  => 'core/button',
				'name'  => 'float',
				'label' => __('Float', 'alexa'),
			],
			[
				'type'  => 'core/button',
				'name'  => 'sink',
				'label' => __('Sink', 'alexa'),
			],
			[
				'type'  => 'core/button',
				'name'  => 'grow',
				'label' => __('Grow', 'alexa'),
			],
			[
				'type'  => 'core/button',
				'name'  => 'shrink',
				'label' => __('Shrink', 'alexa'),
			],
			[
				'type'  => 'core/button',
				'name'  => 'slide',
				'label' => __('Slide', 'alexa'),
			],
			[
				'type'  => 'core/code',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexa' ),
			],
			[
				'type'  => 'core/columns',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexa' ),
			],
			[
				'type'  => 'core/column',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexa' ),
			],
			[
				'type'  => 'core/group',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexa' ),
			],
			[
				'type'  => 'core/list',
				'name'  => 'checklist',
				'label' => __( 'Checklist', 'alexa' ),
			],
			[
				'type'  => 'core/list',
				'name'  => 'checklist-circle',
				'label' => __( 'Checklist Circle', 'alexa' ),
			],
			[
				'type'  => 'core/list',
				'name'  => 'square',
				'label' => __( 'Square', 'alexa' ),
			],
			[
				'type'  => 'core/list',
				'name'  => 'accordion',
				'label' => __( 'Accordion', 'alexa' ),
			],
			[
				'type'  => 'core/list',
				'name'  => 'none',
				'label' => __( 'None', 'alexa' ),
			],
			[
				'type'  => 'core/list-item',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexa' ),
			],
			[
				'type'  => 'core/navigation-submenu',
				'name'  => 'mega-menu',
				'label' => __( 'Mega Menu', 'alexa' ),
			],
			[
				'type'  => 'core/paragraph',
				'name'  => 'sub-heading',
				'label' => __( 'Sub Heading', 'alexa' ),
			],
			[
				'type'  => 'core/paragraph',
				'name'  => 'notice',
				'label' => __( 'Notice', 'alexa' ),
			],
			[
				'type'  => 'core/paragraph',
				'name'  => 'heading',
				'label' => __( 'Heading', 'alexa' ),
			],
			[
				'type'  => 'core/post-terms',
				'name'  => 'badges',
				'label' => __( 'Badges', 'alexa' ),
			],
			[
				'type'  => 'core/post-terms',
				'name'  => 'dots',
				'label' => __( 'Dots', 'alexa' ),
			],
			[
				'type'  => 'core/post-terms',
				'name'  => 'boxes',
				'label' => __( 'Boxes', 'alexa' ),
			],
			[
				'type'  => 'core/read-more',
				'name'  => 'button',
				'label' => __( 'Button', 'alexa' ),
			],
			[
				'type'  => 'core/site-title',
				'name'  => 'heading',
				'label' => __( 'Heading', 'alexa' ),
			],
			[
				'type'  => 'core/spacer',
				'name'  => 'angle',
				'label' => __( 'Angle', 'alexa' ),
			],
			[
				'type'  => 'core/spacer',
				'name'  => 'curve',
				'label' => __( 'Curve', 'alexa' ),
			],
			[
				'type'  => 'core/spacer',
				'name'  => 'round',
				'label' => __( 'Round', 'alexa' ),
			],
			[
				'type'  => 'core/spacer',
				'name'  => 'wave',
				'label' => __( 'Wave', 'alexa' ),
			],
			[
				'type'  => 'core/spacer',
				'name'  => 'fade',
				'label' => __( 'Fade', 'alexa' ),
			],
			[
				'type'  => 'core/quote',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexa' ),
			],
			[
				'type'  => 'core/heading',
				'name'  => 'mobile-center',
				'label' => __( 'Mobile Center', 'alexa' ),
			],
			[
				'type'  => 'core/column',
				'name'  => 'mobile-center',
				'label' => __( 'Mobile Center', 'alexa' ),
			],
			[
				'type'  => 'core/columns',
				'name'  => 'mobile-center',
				'label' => __( 'Mobile Center', 'alexa' ),
			],
			[
				'type'  => 'core/group',
				'name'  => 'mobile-center',
				'label' => __( 'Mobile Center', 'alexa' ),
			],
            [
				'type'  => 'core/buttons',
				'name'  => 'mobile-center',
				'label' => __( 'Mobile Center', 'alexa' ),
			],
			[
				'type'  => 'core/group',
				'name'  => 'hover-bg',
				'label' => __( 'Hover BG', 'alexa' ),
			],
			[
				'type'  => 'core/group',
				'name'  => 'group-squeeze',
				'label' => __( 'Group Squeeze', 'alexa' ),
			],				
			[
				'type'  => 'core/paragraph',
				'name'  => 'mobile-center',
				'label' => __( 'Mobile Center', 'alexa' ),
			],
			[
				'type'  => 'core/post-navigation',
				'name'  => 'button',
				'label' => __( 'Button', 'alexa' ),
			]
		],

		'unregister' => [
			[
				'type' => 'core/image',
				'name' => [ 'rounded', 'default' ],
			],
			[
				'type' => 'core/site-logo',
				'name' => [ 'default', 'rounded' ],
			],
			[
				'type' => 'core/separator',
				'name' => [ 'wide', 'dots' ],
			],
		],
	];

	$button_secondary = wp_get_global_settings()['custom']['buttonSecondary'] ?? null;

	if ( $button_secondary ) {
		$config['blockStyles']['register'][] = [
			'type'  => 'core/button',
			'name'  => 'secondary',
			'label' => __( 'Secondary', 'alexa' ),
		];
	}

	$dark_mode = wp_get_global_settings()['custom']['darkMode'] ?? null;

	if ( $dark_mode ) {
		$config['blockStyles']['register'] = [
			...$config['blockStyles']['register'],
			[
				'type'  => 'core/code',
				'name'  => 'light',
				'label' => __( 'Light', 'alexa' ),
			],
			[
				'type'  => 'core/code',
				'name'  => 'dark',
				'label' => __( 'Dark', 'alexa' ),
			],
			[
				'type'  => 'core/column',
				'name'  => 'dark',
				'label' => __( 'Dark', 'alexa' ),
			],
			[
				'type'  => 'core/column',
				'name'  => 'light',
				'label' => __( 'Light', 'alexa' ),
			],
			[
				'type'  => 'core/columns',
				'name'  => 'dark',
				'label' => __( 'Dark', 'alexa' ),
			],
			[
				'type'  => 'core/columns',
				'name'  => 'light',
				'label' => __( 'Light', 'alexa' ),
			],
			[
				'type'  => 'core/group',
				'name'  => 'light',
				'label' => __( 'Light', 'alexa' ),
			],
			[
				'type'  => 'core/group',
				'name'  => 'dark',
				'label' => __( 'Dark', 'alexa' ),
			],
			[
				'type'  => 'core/post-title',
				'name'  => 'mobile-center',
				'label' => __('Mobile Center', 'alexa'),
			],
		];
	}

	return $config;
}