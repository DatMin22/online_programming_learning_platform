import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store/index.js';
import { Provider } from 'react-redux';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  </Provider>
)
