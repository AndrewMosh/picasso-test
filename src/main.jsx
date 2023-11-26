import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './components/store/store';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <App />
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Provider>
 
)
