import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token,{maxAge: 15*24 * 60 * 60*1000,
httpOnly:true, // prevent XSS attacks Cross Site script attacks
sameSite:"strict", //CRF AATTACK cross site request forgery protection
secure:process.env.NODE_ENV !=='development' 
});
};
export default generateTokenAndSetCookies