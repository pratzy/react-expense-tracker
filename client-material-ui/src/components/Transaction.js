import { ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontSize: "1.5em",
      textAlign: "center",
    },
    transaction: {
      fontSize: "3em",
      textAlign: "left",
      padding: "10px",
      margin: "10px 0",
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      boxShadow: "var(--box-shadow)",
      backgroundColor: "#fff",
      positive: {
        borderRight: "5px solid #2ecc71",
      },
      negative: {
        borderRight: "5px solid #c0392b",
      },
    },
  })
);

const Transaction = ({ title, amount }) => {
  const classes = useStyles();
  return (
    <Paper variant="outlined" elevation={3}>
      <ListItem className={classes.transaction}>
        <ListItemText
          className={
            amount > 0
              ? classes.transaction.positive
              : classes.transaction.negative
          }
        >
          {`${title} $${amount}`}
        </ListItemText>
        <ListItemIcon onClick={() => console.log("Hello")}>
          <DeleteForeverIcon color="secondary" />
        </ListItemIcon>
      </ListItem>
    </Paper>
  );
};

export default Transaction;
