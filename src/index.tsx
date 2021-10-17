import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

const queryClient = new QueryClient();
const theme = extendTheme({
  fonts: {
    heading: "Noto Sans Mono",
    body: "Noto Sans Mono",
  },
  colors: {
    transparent: "transparent",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AnimateSharedLayout type="crossfade">
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AnimateSharedLayout>
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
