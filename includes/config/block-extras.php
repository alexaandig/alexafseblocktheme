<?php

declare(strict_types=1);

namespace AlexaFSE\Theme;

/**
 * Returns responsive settings config.
 *
 * @since 0.9.10
 *
 * @return array
 */
function get_block_extra_options(): array {
	return [
		'position'      => [
			'value'   => 'position',
			'label'   => __( 'Position', 'alexafse' ),
			'options' => [
				[
					'label' => '',
					'value' => '',
				],
				[
					'label' => __( 'Relative', 'alexafse' ),
					'value' => 'relative',
				],
				[
					'label' => __( 'Absolute', 'alexafse' ),
					'value' => 'absolute',
				],
				[
					'label' => __( 'Sticky', 'alexafse' ),
					'value' => 'sticky',
				],
				[
					'label' => __( 'Fixed', 'alexafse' ),
					'value' => 'fixed',
				],
				[
					'label' => __( 'Static', 'alexafse' ),
					'value' => 'static',
				],
			],
		],
		'top'           => [
			'value' => 'top',
			'label' => __( 'Top', 'alexafse' ),
		],
		'right'         => [
			'value' => 'right',
			'label' => __( 'Right', 'alexafse' ),
		],
		'bottom'        => [
			'value' => 'bottom',
			'label' => __( 'Bottom', 'alexafse' ),
		],
		'left'          => [
			'value' => 'left',
			'label' => __( 'Left', 'alexafse' ),
		],
		'zIndex'        => [
			'value' => 'z-index',
			'label' => __( 'Z-Index', 'alexafse' ),
		],
		'display'       => [
			'value'   => 'display',
			'label'   => __( 'Display', 'alexafse' ),
			'options' => [
				[
					'label' => '',
					'value' => '',
				],
				[
					'label' => __( 'None', 'alexafse' ),
					'value' => 'none',
				],
				[
					'label' => __( 'Flex', 'alexafse' ),
					'value' => 'flex',
				],
				[
					'label' => __( 'Inline Flex', 'alexafse' ),
					'value' => 'inline-flex',
				],
				[
					'label' => __( 'Block', 'alexafse' ),
					'value' => 'block',
				],
				[
					'label' => __( 'Inline Block', 'alexafse' ),
					'value' => 'inline-block',
				],
				[
					'label' => __( 'Inline', 'alexafse' ),
					'value' => 'inline',
				],
				[
					'label' => __( 'Grid', 'alexafse' ),
					'value' => 'grid',
				],
				[
					'label' => __( 'Inline Grid', 'alexafse' ),
					'value' => 'inline-grid',
				],
				[
					'label' => __( 'Contents', 'alexafse' ),
					'value' => 'contents',
				],
			],
		],
		'order'         => [
			'value' => 'order',
			'label' => __( 'Order', 'alexafse' ),
		],
		'overflow'      => [
			'value'   => 'overflow',
			'label'   => __( 'Overflow', 'alexafse' ),
			'options' => [
				[
					'label' => '',
					'value' => '',
				],
				[
					'label' => __( 'Hidden', 'alexafse' ),
					'value' => 'hidden',
				],
				[
					'label' => __( 'Visible', 'alexafse' ),
					'value' => 'visible',
				],
			],
		],
		'pointerEvents' => [
			'value'   => 'pointer-events',
			'label'   => __( 'Pointer Events', 'alexafse' ),
			'options' => [
				[
					'label' => '',
					'value' => '',
				],
				[
					'label' => __( 'None', 'alexafse' ),
					'value' => 'none',
				],
				[
					'label' => __( 'All', 'alexafse' ),
					'value' => 'all',
				],
			],
		],
		'width'         => [
			'value' => 'width',
			'label' => __( 'Width', 'alexafse' ),
		],
		'maxWidth'      => [
			'value' => 'max-width',
			'label' => __( 'Max Width', 'alexafse' ),
		],
	];
}
