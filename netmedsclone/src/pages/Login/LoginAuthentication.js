import emailjs from "@emailjs/browser";
import { User_API } from "../../api";
export const SigninAuthentication = async (formEntries) => {
  const BaseURL = User_API
  const jsontrial = "http://localhost:3000/user";
  const sendEmail = () => {
    emailjs
      .send(
        "service_zun9zaa",
        "template_o8h6w1m",
        formEntries,
        "yv8odGIkO8jpyoaqP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return fetch(BaseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formEntries),
  }).then((res) => {
    sendEmail();
    return res.json();
  });
};
