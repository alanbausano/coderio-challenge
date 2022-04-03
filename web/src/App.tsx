import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./components/main/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </div>
  );
}

export default App;
