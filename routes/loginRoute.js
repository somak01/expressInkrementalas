import { Router } from "express";
import { authenticate } from "../lib/authMiddleware.js";
export const loginRouter = Router();

let fail = false;

loginRouter.get("/", (req, res) => {
  if (req.session.user) {
    console.log(req.session.user);
    res.status(301).redirect("/main");
  } else {
    res.render("loginPage", { loginFailed: fail });
  }
});

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body;
  //console.log(username, password);
  const user = { username, password };
  //console.log(user.username, user.password);
  if (req.session.user) {
    console.log("Ide is bejon?");
    res.status(301).redirect("/main");
  } else {
    try {
      const auth = await authenticate(username, password);

      if (auth) {
        console.log("Authentication Succesful");
        fail = false;
        req.session.user = user;
        req.session.number = 1;
        res.status(201).send();
      } else {
        console.log("Authenctication Failed");
        fail = true;
        res.status(401).render(
            "loginPage",
            {loginFailed:fail}
        );
      }
    } catch (error) {
      console.error("Error during authentication: ", error);
    }
  }
});
