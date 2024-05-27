import jwt from "jsonwebtoken";

const generateAccessToken = async ( data, secret) => {
 const accessToken = await   jwt.sign(
    {
      data: data,
    },
    secret,
    { expiresIn: "1d" }
  );
 return accessToken
};

export { generateAccessToken };
