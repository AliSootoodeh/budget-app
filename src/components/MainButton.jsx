import React from "react";
import { Button } from "semantic-ui-react";

function MainButton({ addEntry, saveText = "Okay", cancelText = "Cancel" }) {
  return (
    <Button.Group style={{ marginTop: "20px" }}>
      <Button>{cancelText}</Button>
      <Button.Or />
      <Button primary onClick={addEntry}>
        {saveText}
      </Button>
    </Button.Group>
  );
}

export default MainButton;
