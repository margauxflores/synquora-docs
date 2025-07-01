// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Synquora',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/margauxflores/synquora' }],
			sidebar: [
				{
					label: 'Setup Guides',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
