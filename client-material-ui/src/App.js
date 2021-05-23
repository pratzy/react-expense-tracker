import { Container, CssBaseline } from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import ButtonAppBar from "./components/ButtonAppBar";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import theme from "./layout/theme";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingBottom: theme.spacing(1.5),
      marginTop: theme.spacing(10),
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container className={classes.container} maxWidth="sm">
          <ButtonAppBar />
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
