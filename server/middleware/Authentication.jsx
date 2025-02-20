import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Not authorized as an admin" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role!== "admin") {
      return res.status(401).json({ message: "Not authorized as an admin" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authorized as an admin" });
  }
};

export default adminAuth;
