import React from "react";
import { Statistic } from "semantic-ui-react";

function DisplayBalance({
  color,
  size,
  labelText,
  valueText,
  textAlign = "left",
}) {
  return (
    <Statistic color={color} size={size}>
      <Statistic.Label style={{ textAlign: { textAlign } }}>
        {labelText}
      </Statistic.Label>
      <Statistic.Value>{isNaN(valueText) ? 0 : valueText}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalance;
