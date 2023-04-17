<?php

declare(strict_types=1);

namespace Alexa\Theme;

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
			'label'   => __( 'Position', 'alexa' ),
			'options' => [
				[
					'label' => '',
					'value' => '',
				],
				[
					'label' => __( 'Relative', 'alexa' ),
					'value' => 'relative',
				],
				[
					'label' => __( 'Absolute', 'alexa' ),
					'value' => 'absolute',
				],
				[
					'label' => __( 'Sticky', 'alexa' ),
					'value' => 'sticky',
				],
				[
					'label' => __( 'Fixed', 'alexa' ),
					'value' => 'fixed',
				],
				[
					'label' => __( 'Static', 'alexa' ),
					'value' => 'static',
				],
			],
		],
		'top'           => [
			'value' => 'top',
			'label' => __( 'Top', 'alexa' ),
		],
		'right'         => [
			'value' => 'right',
			'label' => __( 'Right', 'alexa' ),
		],
		'bottom'        => [
			'value' => 'bottom',
			'label' => __( 'Bottom', 'alexa' ),
		],
		'left'          => [
			'value' => 'left',
			'label' => __( 'Left', 'alexa' ),
		],
		'zIndex'        => [
			'value' => 'z-index',
			'label' => __( 'Z-Index', 'alexa' ),
		],
		'display'       => [
			'value'   => 'display',
			'label'   => __( 'Display', 'alexa' ),
			'options' => [
				[
					'label' => '',
					'value' => '',
				],
				[
					'label' => __( 'None', 'alexa' ),
					'value' => 'none',
				],
				[
					'label' => __( 'Flex', 'alexa' ),
					'value' => 'flex',
				],
				[
					'label' => __( 'Inline Flex', 'alexa' ),
					'value' => 'inline-flex',
				],
				[
					'label' => __( 'Block', 'alexa' ),
					'value' => 'block',
				],
				[
					'label' => __( 'Inline Block', 'alexa' ),
					'value' => 'inline-block',
				],
				[
					'label' => __( 'Inline', 'alexa' ),
					'value' => 'inline',
				],
				[
					'label' => __( 'Grid', 'alexa' ),
					'value' => 'grid',
				],
				[
					'label' => __( 'Inline Grid', 'alexa' ),
					'value' => 'inline-grid',
				],
				[
					'label' => __( 'Contents', 'alexa' ),
					'value' => 'contents',
				]
			],
		],
		'order'         => [
			'value' => 'order',
			'label' => __( 'Order', 'alexa' ),
		],
		'overflow'      => [
			'value'   => 'overflow',
			'label'   => __( 'Overflow', 'alexa' ),
			'options' => [
				[
					'label' => '',
					'value' => '',
				],
				[
					'label' => __( 'Hidden', 'alexa' ),
					'value' => 'hidden',
				],
				[
					'label' => __( 'Visible', 'alexa' ),
					'value' => 'visible',
				],
			],
		],
		'pointerEvents' => [
			'value'   => 'pointer-events',
			'label'   => __( 'Pointer Events', 'alexa' ),
			'options' => [
				[
					'label' => '',
					'value' => '',
				],
				[
					'label' => __( 'None', 'alexa' ),
					'value' => 'none',
				],
				[
					'label' => __( 'All', 'alexa' ),
					'value' => 'all',
				],
			],
		],
		'width'         => [
			'value' => 'width',
			'label' => __( 'Width', 'alexa' ),
		],
		'maxWidth'      => [
			'value' => 'max-width',
			'label' => __( 'Max Width', 'alexa' ),
		],
		'height'         => [
			'value' => 'height',
			'label' => __('Height', 'alexa'),
		],
		'maxHeight'      => [
			'value' => 'max-height',
			'label' => __('Max Height', 'alexa'),
		],
	];
}