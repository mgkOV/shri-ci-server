import express from "express";
import ru from "../locale/ru/ru.json";
import en from "../locale/ru/ru.json";

const router = express.Router();

router.get("/", async (req, res) => {
  const { lang } = req.body;
  switch (lang) {
    case "ru":
      res.json(ru);
      break;

    default:
      res.json(en);
  }
});

export default router;
