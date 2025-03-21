import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()], 
  // other rules...
  // Removed `parserOptions` property because it is not supported in Vite's configuration schema.
});

 

