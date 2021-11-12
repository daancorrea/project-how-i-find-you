import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import { useUser } from "../../hooks/UserContext";
import ButtonComponent from "../../components/ButtonComponent";
import Users from "../../assets/users.svg";
import {
  Body,
  Title,
  P,
  Input,
  Label,
  Container,
  RegisterP,
  ErrorMessage,
} from "./styles";

export default function SignIn() {
  const { putUserData } = useUser();

  const navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail valido!")
      .required("Campo de email é obrigatório!"),
    password: Yup.string()
      .required("Campo de senha é obrigatório!")
      .min(6, "A senha deve conter pelo menos 6 digitos."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (dataUser) => {
    const { data } = await toast.promise(
      api.post("/", {
        email: dataUser.email,
        password: dataUser.password,
      }),
      {
        success: `Seja Bem vindo(a)!`,
        pending: "Verificando seus dados.",
        error: "Verifique seu e-mail e senha!",
      }
    );
    putUserData(data);

    navigate("/home");
  };

  return (
    <Body>
      <img src={Users} alt="users-img" className="image" />
      <Title>Bem Vindo!</Title>

      <Container>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">E-mail:</Label>
          <Input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            id="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label htmlFor="password">Senha:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            id="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <ButtonComponent type="submit">Entrar</ButtonComponent>
        </form>
      </Container>
      <P>Não possui uma conta? </P>
      <RegisterP onClick={() => navigate("/registrar")}>Registrar</RegisterP>
    </Body>
  );
}
