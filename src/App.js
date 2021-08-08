import Grid from "@material-ui/core/Grid";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Banner from "./common/Banner";
import "./App.css";
import MainContent from "./common/MainContent";

const theme = createTheme({
  palette: {
    type: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid container item xs={12}>
          <Banner />
        </Grid>
        <Grid container item xs={12}>
          <MainContent />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
