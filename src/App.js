import { QueryClient, QueryClientProvider } from "react-query";

import { BaseProvider } from "context/BaseContext";
import { SwapProvider } from "context/SwapContext";
import Trade from "components/Trade";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BaseProvider>
        <SwapProvider>
          <Trade />
        </SwapProvider>
      </BaseProvider>
    </QueryClientProvider>
  );
}

export default App;
