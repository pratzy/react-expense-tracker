import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const AddTransaction = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Add Transaction</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6">$1000</Typography>
      </CardContent>
    </Card>
  );
};

export default AddTransaction;
