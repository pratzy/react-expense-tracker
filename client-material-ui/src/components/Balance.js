import { Card, CardContent, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontSize: "1.5em",
      textTransform: "uppercase",
      textAlign: "center",
    },
    amount: {
      fontSize: "3em",
      padding: theme.spacing(1.2),
      textAlign: "center",
    },
  })
);

const Balance = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" className={classes.title}>
          Your Balance
        </Typography>
        <Typography variant="h4" className={classes.amount}>
          $1000
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Balance;
