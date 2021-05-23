import { Card, CardContent, List, Typography } from "@material-ui/core";
import React from "react";
import Transaction from "./Transaction";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontSize: "1.5em",
      textAlign: "center",
    },
    transactionList: {
      padding: "0",
      margin: "0",
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
    },
  })
);

const TransactionList = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} variant="h5">
          Historical Transactions
        </Typography>
        <List className={classes.transactionList}>
          <Transaction title="Salary" amount="1000.00" />
          <Transaction title="Book" amount="-50.00" />
        </List>
      </CardContent>
    </Card>
  );
};

export default TransactionList;
