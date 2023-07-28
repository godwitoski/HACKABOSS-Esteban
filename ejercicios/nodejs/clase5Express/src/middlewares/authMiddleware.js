const authMiddleware = (req, res, next) => {
  if (req.headers.auth === "admin") {
    next();
  } else {
    res.status(403).send({
      status: "NOOO",
      message: "No tiene autorización, debe ser administrador",
    });
  }
};

module.exports = authMiddleware;
