import React from "react";
import { useNavigate } from "react-router-dom";

import { Header, ButtonGetOut } from "./styles";

export default function MenuHeader() {
  const navigate = useNavigate();
  return (
    <Header>
      <h1>How I Find You?</h1>
      <ButtonGetOut onClick={() => navigate("/")}>Sair</ButtonGetOut>
    </Header>
  );
}
