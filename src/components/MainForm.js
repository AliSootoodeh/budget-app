import React from "react";
import { Form } from "semantic-ui-react";
import MainButton from "./MainButton";

function MainForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          label="Description"
          icon="tags"
          width={12}
          placeholder="new shoes"
        />
        <Form.Input
          label="Value"
          icon="dollar"
          width={3}
          placeholder="100.00"
          IconPosition="left"
        />
      </Form.Group>
      <MainButton />
    </Form>
  );
}

export default MainForm;
