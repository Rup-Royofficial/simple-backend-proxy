import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
//If your frontend code contains something fetching data from the backend
//Vite's proxy will forward this request to http://localhost:3000/api/users, 
//bypassing any CORS restrictions that would typically occur if the frontend tried to access the backend directly.
  server: {
    proxy: {
      '/api' : 'http://localhost:3000', // This helps in preventing th CORS error,
    },
  },
  plugins: [react()],
})
/*

proxy: The proxy property inside the server object is used to configure a proxy for the development server.
'/api': 'http://localhost:3000': This line specifies that any request made to a path that starts with /api should be proxied to http://localhost:3000.

Example Scenario
Frontend: Your frontend application is running on http://localhost:5173 (Vite's default port).
Backend: Your backend API server is running on http://localhost:3000.

When your frontend code makes a request to /api/some-endpoint, Vite will forward this request to http://localhost:3000/api/some-endpoint. 
This way, you can develop your frontend and backend separately without running into CORS issues during local development.

*/
