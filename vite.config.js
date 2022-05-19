import { defineConfig } from 'vite'
// import { envData } from './src/components/FetchEnv'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

})