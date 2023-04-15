<?php

declare( strict_types=1 );

namespace AlexaFSE\Theme;

use function add_filter;

add_filter( 'alexafse_editor_data', NS . 'register_block_supports' );
/**
 * Add default block supports.
 *
 * @todo  Move to rest settings.
 *
 * @param array $config AlexaFSE editor config.
 *
 * @since 0.9.10
 *
 * @return array
 */
function register_block_supports( array $config = [] ): array {
	$config['blockSupports'] = [
		'alexafse/accordion'       => [
			'alexafseBoxShadow' => true,
		],
		'alexafse/tabs'            => [
			'alexafseBoxShadow' => true,
		],
		'alexafse/slider'          => [
			'alexafsePosition' => true,
		],
		'core/buttons'             => [
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'color'                => [
				'text'       => true,
				'background' => true,
				'gradients'  => true,
			],
			'spacing'              => [
				'padding'  => true,
				'margin'   => true,
				'blockGap' => true,
			],
			'alexafsePosition'     => true,
			'alexafseBoxShadow'    => true,
		],
		'core/button'              => [
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'alexafseBoxShadow'    => true,
			'alexafseOnclick'      => true,
			'alexafsePosition'     => true,
		],
		'core/code'                => [
			'alexafseBoxShadow' => true,
			'alexafsePosition'  => true,
			'alexafseTransform' => true,
		],
		'core/column'              => [
			'spacing'                => [
				'padding' => true,
				'margin'  => true,
			],
			'__experimentalBorder'   => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'alexafseAnimation'      => true,
			'alexafseBackground'     => true,
			'alexafseBoxShadow'      => true,
			'alexafseFilter'         => true,
			'alexafseTransform'      => true,
			'alexafsePosition'       => true,
			'alexafseNegativeMargin' => true,
		],
		'core/columns'             => [
			'typography'             => [
				'fontSize'   => true,
				'fontWeight' => true,
			],
			'alexafseAnimation'      => true,
			'alexafseBoxShadow'      => true,
			'alexafsePosition'       => true,
			'alexafseTransform'      => true,
			'alexafseNegativeMargin' => true,
			'alexafseFilter'         => true,
			'alexafseOnclick'        => true,
		],
		'core/cover'               => [
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'alexafsePosition'     => true,
		],
		'core/embed'               => [
			'spacing'              => [
				'margin' => true,
			],
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
		],
		'core/gallery'             => [
			'spacing' => [
				'margin' => true,
			],
		],
		'core/group'               => [
			'alexafseAnimation'      => true,
			'alexafseBackground'     => true,
			'alexafseBoxShadow'      => true,
			'alexafseOnclick'        => true,
			'alexafseNegativeMargin' => true,
			'alexafseFilter'         => true,
			'alexafseTransform'      => true,
			'alexafseDarkMode'       => true,
			'alexafsePosition'       => true,
		],
		'core/heading'             => [
			'align'                  => [
				'full',
				'wide',
				'none',
			],
			'alignWide'              => true,
			'color'                  => [
				'gradients'  => true,
				'background' => true,
				'text'       => true, // For SVG currentColor.
			],
			'spacing'                => [
				'margin'   => true,
				'padding'  => true,
				'blockGap' => true,
			],
			'alexafseNegativeMargin' => true,
			'alexafseAnimation'      => true,
			'alexafseBoxShadow'      => true,
			'alexafsePosition'       => true,
			'alexafseTransform'      => true,
			'alexafseFilter'         => true,
		],
		'core/html'                => [
			'color'             => [
				'background' => true,
				'text'       => true,
				'link'       => true,
				'gradient'   => true,
			],
			'alexafsePosition'  => true,
			'alexafseTransform' => true,
			'alexafseFilter'    => true,
		],
		'core/image'               => [
			'__experimentalBorder'   => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'color'                  => [
				'gradients'  => true,
				'background' => true,
				'text'       => true, // For SVG currentColor.
			],
			'spacing'                => [
				'margin'  => true,
				'padding' => true,
			],
			'typography'             => [
				'fontSize' => true, // Used by icons.
			],
			'alexafseAnimation'      => true,
			'alexafseBackground'     => true,
			'alexafseBoxShadow'      => true,
			'alexafseFilter'         => true,
			'alexafseIcon'           => true,
			'alexafseNegativeMargin' => true,
			'alexafsePosition'       => true,
			'alexafseTransform'      => true,
			'alexafseOnclick'        => true,
		],
		'core/list'                => [
			'spacing'              => [
				'padding'  => true,
				'margin'   => true,
				'blockGap' => true,
			],
			'__experimentalLayout' => [
				'allowSwitching'  => false,
				'allowInheriting' => false,
				'default'         => [
					'type'        => 'flex',
					'orientation' => 'vertical',
				],
			],
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'alexafsePosition'     => true,
			'alexafseShadow'       => true,
		],
		'core/list-item'           => [
			'color'                => [
				'text'       => true,
				'background' => true,
				'link'       => true,
				'gradient'   => true,
			],
			'spacing'              => [
				'padding' => true,
				'margin'  => true,
			],
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'alexafseBoxShadow'    => true,
		],
		'core/media-text'          => [
			'__experimentalBorder' => [
				'radius' => true,
			],
			'spacing'              => [
				'margin' => true,
			],
			'alexafsePosition'     => true,
		],
		'core/navigation'          => [
			'spacing'          => [
				'margin'   => true,
				'padding'  => true,
				'blockGap' => true,
			],
			'alexafsePosition' => true,
		],
		'core/navigation-submenu'  => [
			'spacing' => [
				'margin'   => true,
				'padding'  => true,
				'blockGap' => true,
			],
			'color'   => [
				'background' => true,
				'gradients'  => true,
				'link'       => true,
				'text'       => true,
			],
		],
		'core/page-list'           => [
			'spacing' => [
				'blockGap' => true,
			],
		],
		'core/paragraph'           => [
			'align'                  => [
				'full',
				'wide',
				'left',
				'center',
				'right',
				'none',
			],
			'alignWide'              => true,
			'color'                  => [
				'background' => true,
				'gradients'  => true,
				'link'       => true,
				'text'       => true,
			],
			'__experimentalBorder'   => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'spacing'                => [
				'margin'  => true,
				'padding' => true,
			],
			'alexafseAnimation'      => true,
			'alexafseBoxShadow'      => true,
			'alexafseNegativeMargin' => true,
			'alexafsePosition'       => true,
			'alexafseTransform'      => true,
			'alexafseFilter'         => true,
		],
		'core/post-content'        => [
			'align'     => [
				'full',
				'wide',
				'left',
				'center',
				'right',
				'none',
			],
			'alignWide' => true,
			'spacing'   => [
				'margin'  => true,
				'padding' => true,
			],
		],
		'core/post-author'         => [
			// Border applied to avatar.
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => false,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
		],
		'core/post-excerpt'        => [
			'__experimentalLayout' => [
				'allowSwitching'  => false,
				'allowInheriting' => false,
				'default'         => [
					'type' => 'flex',
				],
			],
		],
		'core/post-date'           => [
			'spacing' => [
				'margin' => true,
			],
		],
		'core/post-featured-image' => [
			'align'             => [
				'full',
				'wide',
				'left',
				'center',
				'right',
				'none',
			],
			'alignWide'         => true,
			'color'             => [
				'background' => true,
			],
			'spacing'           => [
				'margin'  => true,
				'padding' => true,
			],
			'alexafseBoxShadow' => true,
			'alexafsePosition'  => true,
		],
		'core/post-template'       => [
			'spacing' => [],
		],
		'core/post-terms'          => [
			'align'     => [
				'full',
				'wide',
				'left',
				'center',
				'right',
				'none',
			],
			'alignWide' => true,
			'spacing'   => [
				'padding' => true,
				'margin'  => true,
			],
		],
		'core/post-title'          => [
			'spacing'              => [
				'padding' => true,
				'margin'  => true,
			],
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
		],
		'core/pullquote'           => [
			'spacing'              => [
				'margin'   => true,
				'padding'  => true,
				'blockGap' => true,
			],
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
		],
		'core/query'               => [
			'spacing'          => [
				'padding'  => true,
				'margin'   => true,
				'blockGap' => true,
			],
			'alexafsePosition' => true,
		],
		'core/query-pagination'    => [
			'spacing' => [
				'margin'  => true,
				'padding' => true,
			],
		],
		'core/quote'               => [
			'spacing'              => [
				'margin'   => true,
				'padding'  => true,
				'blockGap' => true,
			],
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
		],
		'core/row'                 => [
			'alexafseBoxShadow' => true,
			'alexafsePosition'  => true,
		],
		'core/search'              => [
			'alexafseBoxShadow' => true,
			'alexafsePosition'  => true,
			'spacing'           => [
				'padding' => true,
				'margin'  => true,
			],
		],
		'core/separator'           => [
			'align'                => [
				'full',
				'wide',
				'left',
				'center',
				'right',
				'none',
			],
			'color'                => [
				'text'       => true,
				'background' => false,
			],
			'alignWide'            => true,
			'__experimentalBorder' => [
				'radius'                        => false,
				'width'                         => true,
				'color'                         => false,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'spacing'              => [
				'margin'  => true,
				'padding' => false,
			],
		],
		'core/site-logo'           => [
			'color'                => [
				'background' => true,
				'gradients'  => true,
				'link'       => true,
				'text'       => true,
			],
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => false,
				'color'                         => false,
				'style'                         => false,
				'__experimentalDefaultControls' => [
					'width' => false,
					'color' => false,
				],
			],
		],
		'core/stack'               => [
			'alexafsePosition' => true,
		],
		'core/social-links'        => [
			'align'                => [
				'full',
				'wide',
				'left',
				'center',
				'right',
				'none',
			],
			'alignWide'            => true,
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'__experimentalLayout' => [
				'allowSwitching'  => false,
				'allowInheriting' => true,
				'default'         => [
					'type'           => 'flex',
					'justifyContent' => 'space-between',
					'orientation'    => 'horizontal',
				],
			],
			'alexafsePosition'     => true,
		],
		'core/social-link'         => [
			'color' => [
				'background' => false,
				'text'       => true,
			],
		],
		'core/spacer'              => [
			'align'                => [
				'full',
				'wide',
				'left',
				'center',
				'right',
				'none',
			],
			'alignWide'            => true,
			'alexafseBoxShadow'    => true,
			'color'                => [
				'gradients'  => true,
				'background' => true,
				'text'       => true,
			],
			'spacing'              => [
				'margin' => true,
			],
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'alexafsePosition'     => true,
			'alexafseFilter'       => true,
			'alexafseTransform'    => true,
		],
		'core/table-of-contents'   => [
			'spacing' => [
				'margin'   => true,
				'padding'  => true,
				'blockGap' => true,
			],
		],
		'core/tag-cloud'           => [
			'typography' => [
				'textTransform' => true, // Doesn't work.
				'letterSpacing' => true, // Doesn't work.
			],
		],
		'core/template-part'       => [
			'alexafseBoxShadow' => true,
			'color'             => [
				'background' => true,
				'gradients'  => true,
				'link'       => true,
				'text'       => true,
			],
			'alexafsePosition'  => true,
		],
		'core/video'               => [
			'color'                => [
				'gradients'  => true,
				'background' => true,
				'text'       => true,
			],
			'spacing'              => [
				'margin' => true, // Doesn't work.
			],
			'__experimentalBorder' => [
				'radius'                        => true,
				'width'                         => true,
				'color'                         => true,
				'style'                         => true,
				'__experimentalDefaultControls' => [
					'width' => true,
					'color' => true,
				],
			],
			'alexafseBoxShadow'    => true,
			'alexafseFilter'       => true,
			'alexafsePosition'     => true,
			'alexafseTransform'    => true,
		],
	];

	return $config;
}
