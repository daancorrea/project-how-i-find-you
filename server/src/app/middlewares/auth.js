import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";

export default (request, response, next) => {
  const authToken = request.headers.authorization;
  if (!authToken) response.status(401).json({ error: "Token não enviado!" });

  const token = authToken.split(" ")[1];
  try {
    jwt.verify(token, authConfig.secret, function (err, decoded) {
      if (err) {
        throw new Error();
      }
      request.userId = decoded.id;
      return next();
    });
  } catch (error) {
    return response.status(401).json({ Erro: "Token invalido!" });
  }
};
