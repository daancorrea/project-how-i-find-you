import Sequelize, { Model } from "sequelize";

class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        user_id: Sequelize.STRING
      },
      {
        sequelize,
      }
    );
  }
}

export default Contact;
