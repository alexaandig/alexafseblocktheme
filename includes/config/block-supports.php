<?php

declare( strict_types=1 );

namespace Alexa\Theme;

use function add_filter;

add_filter( 'alexa_editor_data', NS . 'register_block_supports' );
/**
 * Add default block supports.
 *
 * @todo  Move to rest settings.
 *
 * @param array $config Alexa editor config.
 *
 * @since 0.9.10
 *
 * @return array
 */
function register_block_supports( array $config = [] ): array {
	$config['blockSupports'] = [
		'alexa/accordion'       => [
			'alexaBoxShadow' => true,
			'alexaAnimation' => true,
		],
		'alexa/tabs'            => [
			'alexaBoxShadow' => true,
		],
		'alexa/slider'          => [
			'alexaPosition' => true,
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
			'alexaAnimation'	=> true,
			'alexaPosition'     => true,
			'alexaBoxShadow'    => true,
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
			'alexaAnimation'	=> true,
			'alexaBoxShadow'    => true,
			'alexaOnclick'      => true,
			'alexaPosition'     => true,
		],
		'core/code'                => [
			'alexaBoxShadow' => true,
			'alexaPosition'  => true,
			'alexaTransform' => true,
		],
		'core/column'              => [
			'__experimentalLayout' => [
				'allowSwitching'  => false,
				'allowInheriting' => true,
				'default'         => [
					'type'           => 'flex',
					'orientation'    => 'vertical',
				],
			],
			'spacing'                => [
				'padding' => true,
				'margin'  => true,
				'blockGap' => true,
			],
			'dimensions' => array('minHeight' => true),
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
			'alexaAnimation'      => true,
			'alexaBackground'     => true,
			'alexaBoxShadow'      => true,
			'alexaFilter'         => true,
			'alexaTransform'      => true,
			'alexaPosition'       => true,
			'alexaNegativeMargin' => true,
		],
		'core/columns'             => [
			'__experimentalLayout' => [
				'allowSwitching'  => false,
				'allowInheriting' => false,
				'default'         => [
					'type'           => 'flex',
					'orientation'    => 'horizontal',
				],
			],

			'typography'             => [
				'fontSize'   => true,
				'fontWeight' => true,
			],
			'alexaAnimation'      => true,
			'alexaBackground'     => true,
			'alexaBoxShadow'      => true,
			'alexaPosition'       => true,
			'alexaTransform'      => true,
			'alexaNegativeMargin' => true,
			'alexaFilter'         => true,
		],
		'core/cover'               => [
			'hasParallax' => array('type' => 'boolean', 'default' => true),
			'useFeaturedImage' => array('type' => 'boolean', 'default' => false),
			'width' => array('type' => 'number'), 
			'height' => array('type' => 'number'),
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
				'allowInheriting' => false,
				'default'         => [
					'type'           => 'flex',
				],
			],
			'alexaPosition'     => true,
			'alexaAnimation'      => true,
			'alexaBoxShadow'      => true,
			'alexaFilter'         => true,
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
			'__experimentalLayout' => [
				'allowSwitching'  => false,
				'allowInheriting' => true,
				'default'         => [
					'type'           => 'flex',
					'orientation'    => 'horizontal',
				],
			],
			'spacing' => [
				'margin' => true,
				'padding'	=> true,
				'blockGap'	=> true,
			],
			'alexaAnimation'      => true,
			'alexaPosition'		=> true,
		],
		'core/group'               => [
			'alexaAnimation'      => true,
			'alexaBackground'     => true,
			'alexaBoxShadow'      => true,
			'alexaOnclick'        => true,
			'alexaNegativeMargin' => true,
			'alexaFilter'         => true,
			'alexaTransform'      => true,
			'alexaDarkMode'       => true,
			'alexaPosition'       => true,
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
			'alexaNegativeMargin' => true,
			'alexaAnimation'      => true,
			'alexaPosition'       => true,
		],
		'core/html'                => [
			'color'             => [
				'background' => true,
				'text'       => true,
				'link'       => true,
				'gradient'   => true,
			],
			'alexaPosition'  => true,
			'alexaTransform' => true,
			'alexaFilter'    => true,
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
			'alexaAnimation'      => true,
			'alexaBackground'     => true,
			'alexaBoxShadow'      => true,
			'alexaFilter'         => true,
			'alexaIcon'           => true,
			'alexaNegativeMargin' => true,
			'alexaPosition'       => true,
			'alexaTransform'      => true,
			'alexaOnclick'        => true,
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
			'alexaAnimation	='	=> true,
			'alexaPosition'     => true,
			'alexaShadow'       => true,
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
			'alexaBoxShadow'    => true,
		],
		'core/media-text'          => [
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
			'spacing'          => [
				'margin'   => true,
				'padding'  => true,
			],
			'alexaAnimation'      => true,
			'alexaBoxShadow'      => true,
			'alexaNegativeMargin' => true,
			'alexaPosition'     => true,
		],
		'core/navigation'          => [
			'spacing'          => [
				'margin'   => true,
				'padding'  => true,
				'blockGap' => true,
			],
			'alexaAnimation'	=> true,
			'alexaPosition' 	=> true,
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
			'alexaAnimation'	=> true,
			'alexaNegativeMargin' 	=> true,
			'alexaPosition'			=> true,
		],
		'core/page-list'           => [
			'spacing' => [
				'margin'   => true,
				'padding'  => true,
				'blockGap' => true,
			],
			'alexaAnimation'	=> true,
			'alexaNegativeMargin' 	=> true,
			'alexaPosition'			=> true,
		],
		'core/paragraph'           => [
			'align'                  => [
				'full',
				'wide',
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
			'alexaAnimation'      => true,
			'alexaNegativeMargin' => true,
			'alexaPosition'       => true,			
		],
		'core/post-content'        => [
			'align'     => [
				'full',
				'wide',
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
				'margin'   => true,
				'padding'  => true,
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
			'alexaAnimation'	=>true,
			'alexaBoxShadow' => true,
			'alexaPosition'  => true,
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
				'blockGap'	=> true,
			],
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
			'alexaAnimation'      => true,
			'alexaBackground'     => true,
			'alexaBoxShadow'      => true,
			'alexaFilter'         => true,
			'alexaPosition'       => true,
			'alexaNegativeMargin' => true,
		],
		'core/query'               => [
			'spacing'          => [
				'padding'  => true,
				'margin'   => true,
				'blockGap' => true,
			],
			'alexaAnimation'	=> true,
			'alexaPosition' 	=> true,
		],
		'core/query-pagination'    => [
			'spacing' => [
				'margin'  => true,
				'padding' => true,
				'blockGap' => true,
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
			'alexaAnimation'      => true,
			'alexaBackground'     => true,
			'alexaBoxShadow'      => true,
			'alexaPosition'       => true,
			'alexaNegativeMargin' => true,
		],
		'core/row'                 => [
			'alexaAnimation' => true,
			'alexaBoxShadow' => true,
			'alexaBackground'=> true,
			'alexaPosition'  => true,
		],
		'core/search'              => [
			'alexaBoxShadow' => true,
			'alexaPosition'  => true,
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
				'radius'                        => true,
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
				'padding' => true,
			],
			'dimensions' => array('minHeight' => true),
			'dimensions' => array('width' => true),							
		],
		"core/site-title"		=>	[
			'alexaAnimation'	=>	true,
			'alexaPosition'       => true,
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
			'alexaAnimation'		=> true,
			'alexaPosition'       	=> true,
			'alexaFilter'			=> true,
		],
		'core/stack'               => [
			'spacing'              => [
				'margin'  => true,
				'padding' => true,
				'blockGap'	=> true,
			],
			'alexaAnimation'	=> true,
			'alexaPosition' 	=> true,
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
			'dimensions' => array('minHeight' => true),
			'dimensions' => array('width' => true),
			'alexaAnimation'	=> true,
			'alexaPosition'     => true,
		],
		'core/social-link'         => [
			'color' => [
				'background' => false,
				'text'       => true,
			],
			'alexaAnimation'	=> true,
			'alexaPosition'     => true,
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
			'alexaBoxShadow'    => true,
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
			'alexaPosition'     => true,
			'alexaFilter'       => true,
			'alexaTransform'    => true,
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
			'alexaBoxShadow' => true,
			'color'             => [
				'background' => true,
				'gradients'  => true,
				'link'       => true,
				'text'       => true,
			],
			'alexaAnimation'	=> true,
			'alexaPosition'  => true,
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
			'alexaAnimation'	=> true,
			'alexaBoxShadow'    => true,
			'alexaFilter'       => true,
			'alexaPosition'     => true,
			'alexaTransform'    => true,
		],
	];

	return $config;
}
