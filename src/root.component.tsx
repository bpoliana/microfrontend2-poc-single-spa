import React from "react";
import { Button } from "@material-ui/core";

export default function Root(props) {
  return <Button>{props.name} is mounted!</Button>;
}
