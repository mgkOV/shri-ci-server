import express from "express";
import ru from "../locale/ru/ru.json";
import en from "../locale/en/en.json";

const router = express.Router();

router.get("/:lang", async (req, res) => {
  const { lang } = req.params;
  switch (lang) {
    case "ru":
      res.json(ru);
      break;

    default:
      res.json(en);
  }
});

export default router;
