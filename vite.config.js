import { defineConfig } from 'vite'
import  adapter  from '@sveltejs/adapter-netlify';
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
	adapter:adapter()
})
