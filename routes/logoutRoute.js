import { Router } from "express";

export const logoutRouter = Router();

logoutRouter.post("/", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destorying the session: ", err);
      res.status(500).json({ error: "Logout failed!" });
    } else {
      res.status(301).redirect("/login");
    }
  });
});
