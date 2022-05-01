import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({ entries }) {
  return (
    <Container>
      {entries.map(({ id, isExpense, description, price }) => {
        return (
          <EntryLine
            key={id}
            id={id}
            isExpense={isExpense}
            description={description}
            price={price}
          />
        );
      })}
    </Container>
  );
}

export default EntryLines;
