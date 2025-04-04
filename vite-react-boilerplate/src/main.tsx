import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'
import App from './pages/App.tsx'

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)
