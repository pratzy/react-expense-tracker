import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flex: 1,
    },
    cardContent: {
      padding: "30px",
      margin: "20px 0",
      textAlign: "center",
    },
    cardContentWithRightBorder: {
      padding: "30px",
      margin: "20px 0",
      borderRight: "1px solid #b3b0b8",
    },
    title: {
      fontSize: "1.5em",
      textTransform: "uppercase",
    },
    amountPositive: {
      fontSize: "2em",
      color: "#2ecc71",
    },
    amountNegative: {
      fontSize: "2em",
      color: "#c0392b",
    },
  })
);

const IncomeExpense = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContentWithRightBorder}>
        <Typography variant="h5" className={classes.title}>
          Income
        </Typography>
        <Typography variant="h5" className={classes.amountPositive}>
          $1000
        </Typography>
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" className={classes.title}>
          Expense
        </Typography>
        <Typography variant="h5" className={classes.amountNegative}>
          $0
        </Typography>
      </CardContent>
    </Card>
  );
};

export default IncomeExpense;
