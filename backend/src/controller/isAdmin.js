export default function isAdmin(req, res, next) {
  if (req.user.role === "Admin" ) {
    next();
  } else {
    return res.status(403).json({ message: "Forbidden access" });
  }
}
  