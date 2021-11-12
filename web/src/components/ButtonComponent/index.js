import React from "react";

import { Button } from "./styles";

export default function ButtonComponent({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}
