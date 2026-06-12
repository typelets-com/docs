// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Public site URL. Drives canonical links + sitemap.xml.
	site: 'https://docs.typelets.com',
	integrations: [
		starlight({
			title: 'Typelets Docs',
			description:
				'Documentation for Typelets - collaborative code workspaces in your browser for interviews, take-home assessments, mentoring, pair programming, and hosting.',
			// Header logo: the Typelets brand mark (matches the marketing site's
			// /og-image.png), shown alongside the "Typelets Docs" wordmark.
			logo: {
				src: './src/assets/logo.png',
				alt: 'Typelets',
			},
			// Brand theme: sky-blue accent on neutral grays. See src/styles/theme.css.
			customCss: ['./src/styles/theme.css'],
			favicon: '/favicon.ico',
			head: [
				// Use the real brand mark for the tab icon (matches the header logo),
				// not the old sparkle. apple-touch-icon is the same PNG mark.
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', href: '/icon.png' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/typelets-com' },
			],
			editLink: {
				baseUrl: 'https://github.com/typelets-com/docs/edit/main/',
			},
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'What is Typelets?', slug: 'index' },
						{ label: 'Quickstart', slug: 'start/quickstart' },
						{ label: 'Core concepts', slug: 'start/concepts' },
					],
				},
				{
					label: 'Collaboration',
					items: [
						{ label: 'Real-time editing', slug: 'collaboration/editing' },
						{ label: 'Shared terminal', slug: 'collaboration/terminal' },
						{ label: 'Video', slug: 'collaboration/video' },
						{ label: 'Sharing & roles', slug: 'collaboration/sharing-and-roles' },
						{ label: 'Mobile view', slug: 'collaboration/mobile' },
					],
				},
				{
					label: 'Running code',
					items: [
						{ label: 'Sandboxed execution', slug: 'running-code/sandbox' },
						{ label: 'Run & output', slug: 'running-code/run' },
						{ label: 'Languages & runtimes', slug: 'running-code/languages' },
					],
				},
				{
					label: 'Interviews',
					items: [
						{ label: 'Overview', slug: 'interviews/overview' },
						{ label: 'Problem library', slug: 'interviews/problem-library' },
						{ label: 'Running an interview', slug: 'interviews/running-an-interview' },
						{ label: 'Recording & replay', slug: 'interviews/recording' },
						{ label: 'Scoring', slug: 'interviews/scoring' },
					],
				},
				{
					label: 'Take-home assessments',
					items: [
						{ label: 'Overview', slug: 'assessments/overview' },
						{ label: 'Inviting candidates', slug: 'assessments/inviting-candidates' },
						{ label: 'The candidate experience', slug: 'assessments/candidate-experience' },
						{ label: 'Reviewing submissions', slug: 'assessments/reviewing-submissions' },
						{ label: 'Grading', slug: 'assessments/grading' },
					],
				},
				{
					label: 'Hosting',
					items: [
						{ label: 'Persistent preview', slug: 'hosting/persistent-preview' },
						{ label: 'Host a static site', slug: 'hosting/static-site' },
						{ label: 'Custom subdomains', slug: 'hosting/custom-subdomains' },
						{ label: 'Custom domains', slug: 'hosting/custom-domains' },
					],
				},
				{
					label: 'Automation',
					items: [
						{ label: 'MCP server', slug: 'automation/mcp' },
						{ label: 'Personal access tokens', slug: 'automation/tokens' },
						{ label: 'REST API reference', slug: 'automation/api' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Limits & sandbox model', slug: 'reference/limits' },
						{ label: 'Accounts & organizations', slug: 'reference/accounts' },
						{ label: 'FAQ', slug: 'reference/faq' },
					],
				},
			],
		}),
	],
});
