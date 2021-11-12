import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useUser } from "../../hooks/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

import {
  Body,
  Container,
  ButtonAddNewContact,
  Label,
  Input,
  ErrorMessage,
  TableHeader,
  PEmail,
  PName,
  PNumber,
  POptions,
  Card,
  Button,
  CardContainer,
} from "./styles";

import MenuHeader from "../../components/MenuHeader";
import IconPlus from "../../assets/add-black.svg";

export default function Home() {
  const { userData, clientInfo } = useUser();
  const [contact, setContact] = useState();
  const [loadData, setLoadData] = useState(false);
  const [addNewContact, setAddNewContact] = useState(false);

  const schema = Yup.object().shape({
    name: Yup.string().required("Campo de nome é obrigatório!"),
    email: Yup.string()
      .email("Digite um e-mail valido!")
      .required("Campo de email é obrigatório!"),
    phone: Yup.string()
      .required("Campo de telefone é obrigatório!")
      .min(9, "O número de telefone deve conter pelo menos 9 digitos."),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  const onSubmit = async (dataUser) => {
    await api.post("/home", {
      name: dataUser.name,
      email: dataUser.email,
      phone: dataUser.phone,
    });
    toast.success("Contato criado com sucesso!");
    setAddNewContact(false);
    reset();
    loadContact();
  };
  const loadContact = async () => {
    if (userData.id) {
      const { data } = await api.get(`home/${userData.id}`);
      setContact(data.contacts);
    }
  };

  const deteletContact = async (id) => {
    await api.delete(`/home/${id}`);
    toast.success("Contato deletado com sucesso!");
    loadContact();
  };

  useEffect(() => {
    const loadClientInfo = async () => {
      await clientInfo();
      setLoadData(true);
    };
    loadClientInfo();
  }, []);

  useEffect(() => {
    loadContact();
  }, [loadData]);

  return (
    <Body>
      <MenuHeader />
      <Container>
        {!addNewContact ? (
          <ButtonAddNewContact onClick={() => setAddNewContact(true)}>
            <img src={IconPlus} alt="plus-icon" className="image" />
            <p>Adicionar contato</p>
          </ButtonAddNewContact>
        ) : (
          <>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="name">Nome:</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Digite o nome"
                  id="name"
                  {...register("name")}
                  error={errors.name?.message}
                />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              </div>
              <div>
                <Label htmlFor="phone">Telefone:</Label>
                <Input
                  type="text"
                  name="phone"
                  placeholder="Digite o telefone"
                  id="phone"
                  {...register("phone")}
                  error={errors.phone?.message}
                />
                <ErrorMessage>{errors.phone?.message}</ErrorMessage>
              </div>
              <div>
                <Label htmlFor="email">E-mail:</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail"
                  id="email"
                  {...register("email")}
                  error={errors.email?.message}
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </div>
              <div className="buttons">
                <button type="submit">
                  <span className="done">done</span>
                </button>
                <button
                  onClick={() => {
                    reset();
                    setAddNewContact(false);
                  }}
                >
                  <span className="close">close</span>
                </button>
              </div>
            </form>
          </>
        )}
        {contact && contact.length > 0 && (
          <TableHeader>
            <PName>Nome</PName>
            <PNumber>Telefone</PNumber>
            <PEmail>Email</PEmail>
            <POptions>Excluir</POptions>
          </TableHeader>
        )}
        <CardContainer>
          {contact &&
            contact.map((c) => {
              return (
                <Card key={c.id}>
                  <PName>{c.name}</PName>
                  <PNumber>{c.phone}</PNumber>
                  <PEmail>{c.email}</PEmail>
                  <div className="buttons">
                    <Button onClick={() => deteletContact(c.id)}>
                      <span>close</span>
                    </Button>
                  </div>
                </Card>
              );
            })}
        </CardContainer>
      </Container>
    </Body>
  );
}
