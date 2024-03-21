import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Router from './shared/router';

const queryClient = new QueryClient();

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
