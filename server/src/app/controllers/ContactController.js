import * as Yup from "yup";

import Contact from "../models/Contact";

class ContactController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.string().required(),
    });
    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }
    const { name, email, phone } = request.body;
    const user_id = request.userId;

    const contact = await Contact.create({
      name,
      email,
      phone,
      user_id,
    });

    return response.status(200).json(contact);
  }
  async index(request, response) {
    const contacts = await Contact.findAll();
    return response.status(200).json({ contacts });
  }
  async show(request, response) {
    const { id } = request.params;
    const user_id = request.userId;

    if (!(id === user_id)) {
      return response.status(400).json({
        Menssagem:
          "Não encontramos nenhum contato! Crie um novo contato e tente novamente.",
      });
    }
    const contacts = await Contact.findAll({
      where: {
        user_id: id,
      },
    });
    return response.status(200).json({ contacts });
  }
  async delete(request, response) {
    const { id } = request.params;
    try {
      await Contact.destroy({
        where: {
          id,
        },
      });
      const contacts = await Contact.findAll({
        where: {
          user_id: id,
        },
      });
      return response.status(204).json(contacts);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export default new ContactController();
