
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "./theme";
import React from "react";
import Blog from "./components/blog.component";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Blog/>
      </ThemeProvider>
  );
}

export default App;
