import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from "path";

const { resolve } = require('path')
    // const rootSrc = resolve(__dirname, "../src");
    // https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, './main.jsx'),
                root: resolve(__dirname, './'),

            }
        }
    },
    // css: {
    //     preprocessorOptions: {
    //         scss: { additionalData: `@import "${rootSrc}/scss/_config";` },
    //     },
    // },

})