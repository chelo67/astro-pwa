import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
    site: 'https://chelo67.github.io',
    base: 'astro-pwa',
    integrations: [AstroPWA({
      manifest: {
				display: 'standalone',
				display_override: ['window-controls-overlay'],
				lang: 'es-ES',
				name: 'Astro Pwa',
				short_name: 'Astro Pwa 08',
				description: 'Ejemplo de PWA creada en Socratech',
				theme_color: '#19223c',
				background_color: '#d4d4d4',
				icons: [
					{
						src: 'icon-72x72.png',
						sizes: '64x64',
						type: 'image/png',
					},
					{
						src: 'apple-touch-icon.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: 'icon-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable',
					},
				],
			},
		}),
	],
	base: 'astro-pwa',
})
