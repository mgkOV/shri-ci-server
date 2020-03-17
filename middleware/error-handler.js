module.exports = (err, req, res, next) => {
  if (err.isAxiosError) {
    console.error(err.message, err.config);
  } else {
    console.error(err.message, err);
  }

  res.status(500).json({ error: "Внутренняя ошибка сервера." });
};
