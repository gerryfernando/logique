import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import SnackBarProvider from "./component/SnackbarProvider";
import { store } from "./redux/store";
import router from "./router";
import theme from "./theme/base";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SnackBarProvider>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </SnackBarProvider>
      </Provider>
    </div>
  );
}

export default App;
