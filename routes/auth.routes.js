import { Router } from "express";



const authRouter = Router();

authRouter.get("/", (req, res) => {
  res.send("Auth route is working");
});

authRouter.post("/login", (req, res) => {
  res.send("Login route is working");
});

authRouter.post("/register", (req, res) => {
  res.send("Register route is working");
});