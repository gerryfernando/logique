import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import SnackBarProvider from "./component/SnackbarProvider";
import { store } from "./redux/store";
import router from "./router";
import theme from "./theme/base";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SnackBarProvider>
            <ThemeProvider theme={theme}>
              <RouterProvider router={router} />
            </ThemeProvider>
          </SnackBarProvider>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
