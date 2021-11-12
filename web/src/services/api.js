import axios from "axios";

let userData = localStorage.getItem("desafiolabs:userData");

if (userData) {
  userData = JSON.parse(userData);
}

export const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    authorization: `Bearer ${userData && userData.token}`,
  },
});
