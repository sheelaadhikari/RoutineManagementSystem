// vite.config.js
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  server: {
    hmr: {
      overlay: true, // Show overlay for HMR errors
    },
  },
};
