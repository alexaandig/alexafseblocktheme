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
		'flex-direction' => [
			'value'   => 'flex-direction',
			'label'   => __( 'Flex Direction', 'alexa' ),
			'options' => [
				[
					'label' => __( 'Row', 'alexa' ),
					'value' => 'row',
				],
				[
					'label' => __( 'Row Reverse', 'alexa' ),
					'value' => 'row-reverse',
				],
				[
					'label' => __( 'Column', 'alexa' ),
					'value' => 'column',
				],
				[
					'label' => __( 'Column Reverse', 'alexa' ),
					'value' => 'column-reverse',
				],
			],
		],
		'flex-wrap'       => [
			'value'   => 'flex-wrap',
			'label'   => __( 'Flex Wrap', 'alexa' ),
			'options' => [
				[
					'label' => __( 'Wrap', 'alexa' ),
					'value' => 'wrap',
				],
				[
					'label' => __( 'No Wrap', 'alexa' ),
					'value' => 'nowrap',
				],
				[
					'label' => __( 'Wrap Reverse', 'alexa' ),
					'value' => 'wrap-reverse',
				],
			],
		],
		'justify-content' => [
			'value'   => 'justify-content',
			'label'   => __( 'Justify Content', 'alexa' ),
			'options' => [
				[
					'label' => __( 'Start', 'alexa' ),
					'value' => 'flex-start',
				],
				[
					'label' => __( 'End', 'alexa' ),
					'value' => 'flex-end',
				],
				[
					'label' => __( 'Center', 'alexa' ),
					'value' => 'center',
				],
				[
					'label' => __( 'Space Between', 'alexa' ),
					'value' => 'space-between',
				],
				[
					'label' => __( 'Space Around', 'alexa' ),
					'value' => 'space-around',
				],
			],
		],
		'align-items'     => [
			'value'   => 'align-items',
			'label'   => __( 'Align Items', 'alexa' ),
			'options' => [
				[
					'label' => __( 'Start', 'alexa' ),
					'value' => 'flex-start',
				],
				[
					'label' => __( 'End', 'alexa' ),
					'value' => 'flex-end',
				],
				[
					'label' => __( 'Center', 'alexa' ),
					'value' => 'center',
				],
				[
					'label' => __( 'Baseline', 'alexa' ),
					'value' => 'baseline',
				],
				[
					'label' => __( 'Stretch', 'alexa' ),
					'value' => 'stretch',
				],
			],
		],
		'align-content'   => [
			'value'   => 'align-content',
			'label'   => __( 'Align Content', 'alexa' ),
			'options' => [
				[
					'label' => __( 'Start', 'alexa' ),
					'value' => 'flex-start',
				],
				[
					'label' => __( 'End', 'alexa' ),
					'value' => 'flex-end',
				],
				[
					'label' => __( 'Center', 'alexa' ),
					'value' => 'center',
				],
				[
					'label' => __( 'Space Between', 'alexa' ),
					'value' => 'space-between',
				],
				[
					'label' => __( 'Space Around', 'alexa' ),
					'value' => 'space-around',
				],
				[
					'label' => __( 'Stretch', 'alexa' ),
					'value' => 'stretch',
				],
			],
		],
	];
}