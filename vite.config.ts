import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	plugins: [solidPlugin(), tailwindcss()],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
	resolve: {
		alias: {
			"@": "/src",
			"@components": "/src/components",
			"@utils": "/src/utils",
			"@assets": "/src/assets",
			"@stores": "/src/stores",
			"@pages": "/src/pages",
		},
	},
});
