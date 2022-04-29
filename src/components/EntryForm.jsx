import React from "react";
import { Form, Segment, Checkbox } from "semantic-ui-react";

function EntryForm({
  description,
  price,
  isExpense,
  setDescription,
  setPrice,
  setIsExpense,
}) {
  return (
    <>
      <Form.Group>
        <Form.Input
          label="Description"
          icon="tags"
          width={12}
          placeholder="new shoes"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          label="Value"
          icon="dollar"
          width={3}
          placeholder="100.00"
          IconPosition="left"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpense}
          onChange={() => setIsExpense((prevState) => !prevState)}
        />
      </Segment>
    </>
  );
}

export default EntryForm;
