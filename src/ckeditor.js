/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Font from '@ckeditor/ckeditor5-font/src/font';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Font,
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Highlight
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	fontFamily: {
		options: [
			'default',
			'Arial, Helvetica, sans-serif',
			'Courier New, Courier, monospace',
			'Georgia, serif',
			'Lucida Sans Unicode, Lucida Grande, sans-serif',
			'Tahoma, Geneva, sans-serif',
			'Times New Roman, Times, serif',
			'Trebuchet MS, Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif',
			'Font Family1',
			'Font Family2',
		]
	},
	highlight: {
		options: [{
				model: 'greenMarker',
				class: 'marker-green',
				title: 'Green marker',
				color: 'var(--ck-highlight-marker-green)',
				type: 'marker'
			},
			{
				model: 'redPen',
				class: 'pen-red',
				title: 'Red pen',
				color: 'var(--ck-highlight-pen-red)',
				type: 'pen'
			}
		]
	},
	highlight: {
		options: [{
				model: 'yellowMarker',
				class: 'marker-yellow',
				title: 'Yellow Marker',
				color: 'var(--ck-highlight-marker-yellow)',
				type: 'marker'
			},
			{
				model: 'greenMarker',
				class: 'marker-green',
				title: 'Green marker',
				color: 'var(--ck-highlight-marker-green)',
				type: 'marker'
			},
			{
				model: 'pinkMarker',
				class: 'marker-pink',
				title: 'Pink marker',
				color: 'var(--ck-highlight-marker-pink)',
				type: 'marker'
			},
			{
				model: 'blueMarker',
				class: 'marker-blue',
				title: 'Blue marker',
				color: 'var(--ck-highlight-marker-blue)',
				type: 'marker'
			},
			{
				model: 'redPen',
				class: 'pen-red',
				title: 'Red pen',
				color: 'var(--ck-highlight-pen-red)',
				type: 'pen'
			},
			{
				model: 'greenPen',
				class: 'pen-green',
				title: 'Green pen',
				color: 'var(--ck-highlight-pen-green)',
				type: 'pen'
			}
		]
	},
	fontSize: {
		options: [
			9,
			11,
			13,
			'default',
			17,
			19,
			21, 23, 24, 25, 26, 27, 28, 29, 30, 40, 50
		]
	},

	fontColor: {
		colors: [{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true
			},

			// ...
		]
	},
	fontBackgroundColor: {
		colors: [{
				color: 'hsl(0, 75%, 60%)',
				label: 'Red'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Orange'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green'
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green'
			},

			// ...
		]
	},
	toolbar: {
		items: [
			'heading',
			'|',
			'fontFamily',
			'fontSize',
			'highlight',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
