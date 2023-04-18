const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { SelectControl } = wp.components;

registerBlockType('alexa/flex-block', {
    title: __('Flex Block', 'alexa'),
    icon: 'smiley',
    category: 'layout',
    edit: ({ attributes, setAttributes }) => {
        const { position, top, right, bottom, left, zIndex, display, order, overflow, pointerEvents, width, maxWidth, height, maxHeight, flexDirection } = attributes;

        const onChangePosition = (value) => {
            setAttributes({ position: value });
        };

        const onChangeTop = (value) => {
            setAttributes({ top: value });
        };

        const onChangeRight = (value) => {
            setAttributes({ right: value });
        };

        const onChangeBottom = (value) => {
            setAttributes({ bottom: value });
        };

        const onChangeLeft = (value) => {
            setAttributes({ left: value });
        };

        const onChangeZIndex = (value) => {
            setAttributes({ zIndex: value });
        };

        const onChangeDisplay = (value) => {
            setAttributes({ display: value });
        };

        const onChangeOrder = (value) => {
            setAttributes({ order: value });
        };

        const onChangeOverflow = (value) => {
            setAttributes({ overflow: value });
        };

        const onChangePointerEvents = (value) => {
            setAttributes({ pointerEvents: value });
        };

        const onChangeWidth = (value) => {
            setAttributes({ width: value });
        };

        const onChangeMaxWidth = (value) => {
            setAttributes({ maxWidth: value });
        };

        const onChangeHeight = (value) => {
            setAttributes({ height: value });
        };

        const onChangeMaxHeight = (value) => {
            setAttributes({ maxHeight: value });
        };

        const onChangeFlexDirection = (value) => {
            setAttributes({ flexDirection: value });
        };

        const positionOptions = [{ label: '', value: '' }, { label: __('Relative', 'alexa'), value: 'relative' }, { label: __('Absolute', 'alexa'), value: 'absolute' }, { label: __('Sticky', 'alexa'), value: 'sticky' }, { label: __('Fixed', 'alexa'), value: 'fixed' }, { label: __('Static', 'alexa'), value: 'static' },];

        const displayOptions = [
            { label: '', value: '' }, 
            { label: __('None', 'alexa'), value: 'none' }, 
            { label: __('Flex', 'alexa'), value: 'flex' }, 
            { label: __('Inline Flex', 'alexa'), value: 'inline-flex' }, 
            { label: __('Block', 'alexa'), value: 'block' }, 
            { label: __('Inline Block', 'alexa'), value: 'inline-block' }, 
            { label: __('Inline', 'alexa'), value: 'inline' }, 
            { label: __('Grid', 'alexa'), value: 'grid' },