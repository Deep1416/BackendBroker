const usermodel = require("../Model/user");
const jwt = require("jsonwebtoken");

const authmiddleware = (role) => async (req, res, next) => {

  // console.log(req.headers.authorization);
  try {
    // const tokenfromheader = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(req.headers.authorization, "AJSJF9837FK30R6FU4");

    // console.log(data);
    const payload = jwt.decode(req.headers.authorization);
    // console.log(payload);
    if (role.includes(data.role)) {
      const user = await usermodel.findById(data.id);
      // console.log(user);
      req.user = user;
      next();
    } else {
      res.status(403).json({
        success: false,
        message: "forbiden",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(403).json({
      success: false,
      message: "something went wrong",
    });
  }
};

module.exports = authmiddleware;
