import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              color="green"
              size="tiny"
              labelText="Income"
              valueText="12,000"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              color="red"
              size="tiny"
              labelText="Expenses"
              valueText="11,000"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
