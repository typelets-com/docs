// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Public site URL. Drives canonical links + sitemap.xml. Update if the
	// docs end up on a different host.
	site: 'https://docs.typelets.com',
	integrations: [
		starlight({
			title: 'Typelets Docs',
			description:
				'Documentation for Typelets - a collaborative IDE with persistent, hostable preview workspaces.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/typelets-com' },
			],
			editLink: {
				baseUrl: 'https://github.com/typelets-com/docs/edit/main/',
			},
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'What is Typelets?', slug: 'index' },
						{ label: 'Quickstart', slug: 'start/quickstart' },
						{ label: 'Concepts', slug: 'start/concepts' },
					],
				},
				{
					label: 'Hosting',
					items: [
						{ label: 'Persistent preview', slug: 'hosting/persistent-preview' },
						{ label: 'Host a static site', slug: 'hosting/static-site' },
						{ label: 'Custom domains', slug: 'hosting/custom-domains' },
					],
				},
				{
					label: 'Automation',
					items: [{ label: 'MCP server', slug: 'automation/mcp' }],
				},
			],
		}),
	],
});
