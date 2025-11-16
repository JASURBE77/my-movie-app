// import react from '@vitejs/plugin-react-swc'
// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react()
//   ],
// })
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
 import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
    includeAssets: ["favicon.ico", "apple-touch-icon.png", "Netflix-icon.png"],
      manifest: {
        name: "My React App",
        short_name: "ReactApp",
        description: "My awesome PWA app",
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "standalone",
      icons: [
  { src: "/Netflix-icon.png", sizes: "192x192", type: "image/png" },
  { src: "/Netflix-icon.png", sizes: "512x512", type: "image/png" },
  { src: "/Netflix-icon.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
]
      },
    }),
  ],
})
