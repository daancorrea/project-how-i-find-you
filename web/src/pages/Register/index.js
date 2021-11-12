import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import {
  Label,
  Input,
  Container,
  Body,
  P,
  ErrorMessage,
  RegisterP,
} from "./styles";

import ButtonComponent from "../../components/ButtonComponent";
import Peoples from "../../assets/peoples.svg";

export default function Register() {
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    name: Yup.string().required("Campo de nome é obrigatório!"),
    email: Yup.string()
      .email("Digite um e-mail valido!")
      .required("Campo de email é obrigatório!"),
    password: Yup.string()
      .required("Campo de senha é obrigatório!")
      .min(6, "A senha deve conter pelo menos 6 digitos."),
    confirmPassword: Yup.string()
      .required("Campo de senha é obrigatório!")
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        "/register",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (status === 201 || status === 200) {
        toast.success("Cadastro criado com sucesso!");
        return navigate("/");
      } else if (status === 409) {
        toast.error("E-mail já cadastrado, faça login para continuar!");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Falha no sistema! Tente novamente mais tarde.");
    }
  };
  return (
    <Body>
      <img src={Peoples} className="image" alt="peoples" />
      <P>Preencha os campos e clique em "Registrar".</P>
      <Container>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="name">Nome:</Label>
          <Input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            id="name"
            {...register("name")}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
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
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha novamente"
            id="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
            passwordConfirm={true}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <ButtonComponent register={true} type="submit">
            Registrar
          </ButtonComponent>
        </form>
        <div className="return">
          <P>Já possui uma conta?</P>
          <RegisterP onClick={() => navigate("/")}>Login</RegisterP>
        </div>
      </Container>
    </Body>
  );
}
