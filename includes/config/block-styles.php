<?php

declare( strict_types=1 );

namespace AlexaFSE\Theme;

use function add_filter;
use function wp_get_global_settings;

add_filter( 'alexafse_editor_data', NS . 'register_block_styles' );
/**
 * Adds default blocks styles.
 *
 * @since 0.9.10
 *
 * @param array $config AlexaFSE editor config.
 *
 * @return array
 */
function register_block_styles( array $config ): array {
	$config['blockStyles'] = [
		'register'   => [
			[
				'type'  => 'core/buttons',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexafse' ),
			],
			[
				'type'  => 'core/button',
				'name'  => 'ghost',
				'label' => __( 'Ghost', 'alexafse' ),
			],
			[
				'type'  => 'core/code',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexafse' ),
			],
			[
				'type'  => 'core/columns',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexafse' ),
			],
			[
				'type'  => 'core/column',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexafse' ),
			],
			[
				'type'  => 'core/group',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexafse' ),
			],
			[
				'type'  => 'core/list',
				'name'  => 'checklist',
				'label' => __( 'Checklist', 'alexafse' ),
			],
			[
				'type'  => 'core/list',
				'name'  => 'checklist-circle',
				'label' => __( 'Checklist Circle', 'alexafse' ),
			],
			[
				'type'  => 'core/list',
				'name'  => 'square',
				'label' => __( 'Square', 'alexafse' ),
			],
			[
				'type'  => 'core/list',
				'name'  => 'accordion',
				'label' => __( 'Accordion', 'alexafse' ),
			],
			[
				'type'  => 'core/list',
				'name'  => 'none',
				'label' => __( 'None', 'alexafse' ),
			],
			[
				'type'  => 'core/list-item',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexafse' ),
			],
			[
				'type'  => 'core/navigation-submenu',
				'name'  => 'mega-menu',
				'label' => __( 'Mega Menu', 'alexafse' ),
			],
			[
				'type'  => 'core/paragraph',
				'name'  => 'sub-heading',
				'label' => __( 'Sub Heading', 'alexafse' ),
			],
			[
				'type'  => 'core/paragraph',
				'name'  => 'notice',
				'label' => __( 'Notice', 'alexafse' ),
			],
			[
				'type'  => 'core/paragraph',
				'name'  => 'heading',
				'label' => __( 'Heading', 'alexafse' ),
			],
			[
				'type'  => 'core/post-terms',
				'name'  => 'badges',
				'label' => __( 'Badges', 'alexafse' ),
			],
			[
				'type'  => 'core/read-more',
				'name'  => 'button',
				'label' => __( 'Button', 'alexafse' ),
			],
			[
				'type'  => 'core/site-title',
				'name'  => 'heading',
				'label' => __( 'Heading', 'alexafse' ),
			],
			[
				'type'  => 'core/spacer',
				'name'  => 'angle',
				'label' => __( 'Angle', 'alexafse' ),
			],
			[
				'type'  => 'core/spacer',
				'name'  => 'curve',
				'label' => __( 'Curve', 'alexafse' ),
			],
			[
				'type'  => 'core/spacer',
				'name'  => 'round',
				'label' => __( 'Round', 'alexafse' ),
			],
			[
				'type'  => 'core/spacer',
				'name'  => 'wave',
				'label' => __( 'Wave', 'alexafse' ),
			],
			[
				'type'  => 'core/spacer',
				'name'  => 'fade',
				'label' => __( 'Fade', 'alexafse' ),
			],
			[
				'type'  => 'core/quote',
				'name'  => 'surface',
				'label' => __( 'Surface', 'alexafse' ),
			],
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
			'label' => __( 'Secondary', 'alexafse' ),
		];
	}

	$dark_mode = wp_get_global_settings()['custom']['darkMode'] ?? null;

	if ( $dark_mode ) {
		$config['blockStyles']['register'] = [
			...$config['blockStyles']['register'],
			[
				'type'  => 'core/code',
				'name'  => 'light',
				'label' => __( 'Light', 'alexafse' ),
			],
			[
				'type'  => 'core/code',
				'name'  => 'dark',
				'label' => __( 'Dark', 'alexafse' ),
			],
			[
				'type'  => 'core/column',
				'name'  => 'dark',
				'label' => __( 'Dark', 'alexafse' ),
			],
			[
				'type'  => 'core/column',
				'name'  => 'light',
				'label' => __( 'Light', 'alexafse' ),
			],
			[
				'type'  => 'core/columns',
				'name'  => 'dark',
				'label' => __( 'Dark', 'alexafse' ),
			],
			[
				'type'  => 'core/columns',
				'name'  => 'light',
				'label' => __( 'Light', 'alexafse' ),
			],
			[
				'type'  => 'core/group',
				'name'  => 'light',
				'label' => __( 'Light', 'alexafse' ),
			],
			[
				'type'  => 'core/group',
				'name'  => 'dark',
				'label' => __( 'Dark', 'alexafse' ),
			],
		];
	}

	return $config;
}
