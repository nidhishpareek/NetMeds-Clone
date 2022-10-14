import { json } from "react-router-dom";

export const SigninAuthentication = async (formEntries) => {
  const BaseURL = "https://netmedsdata.onrender.com/user";
  const jsontrial = "http://localhost:3000/user";
  
  return fetch(jsontrial, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formEntries),
  }).then((res) => res.json());
};
