import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',           
  base: '/goit-js-hw-12/', 
  build: {
    outDir: '../dist',  
    emptyOutDir: true,   
  },
  server: {
    port: 3000,
    open: true,
  },
});