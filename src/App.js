import {
  Container,
  Grid,
  GridColumn,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>2,553.23</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic color="green" size="tiny">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>1,405.24</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic color="red" size="tiny">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>629.25</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <GridColumn width={10} textAlign="left">
              Somthing
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              $10,00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}

export default App;
