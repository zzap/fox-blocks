// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

// Register block.
registerBlockType( 'fox-blocks/text-cta', {
	title: __( 'Text CTA', 'fox-blocks' ),
	description: __( 'Test CTA desc', 'fox-blocks' ),
	icon: 'admin-site',
	category: 'common',

	attributes: {
		title: {
			type: 'string',
			source: 'text',
			selector: 'h2',
		},
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},

	edit( { attributes, className, setAttributes } ) {
		const { title, content } = attributes;

		function onChangeTitle( newTitle ) {
			setAttributes( { title: newTitle } );
		}

		function onChangeContent( newContent ) {
			setAttributes( { content: newContent } );
		}

		return (
			<div className={ className }>
				<RichText
					tagName="h2"
					placeholder={ __( 'Callout title', 'fox-blocks' ) }
					label={ __( 'Title', 'fox-blocks' ) }
					value={ title }
					onChange={ onChangeTitle }
				/>
				<RichText
					tagName="p"
					placeholder={ __( 'Callout text' ) }
					onChange={ onChangeContent }
					value={ content }
				/>
			</div>
		);
	},

	save( { attributes } ) {
		const { title, content } = attributes;

		return (
			<div>
				<RichText.Content
					tagName="h2"
					value={ title }
				/>
				<RichText.Content
					tagName="p"
					value={ content }
				/>
			</div>
		);
	},
} );
