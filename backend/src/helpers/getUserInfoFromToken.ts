import jsonwebtoken from "jsonwebtoken";

/**
 *
 * @param access_token signed cookie from request body
 * @param callback a callback function that has 2 arguments, first is err, second is result
 */
export default function getUserInfoFromToken(
  access_token: string,
  callback: Function
) {
  const token = access_token.split(" ")[1];
  jsonwebtoken.verify(
    token,
    "replace me with secret from dotenv",
    (err: any, user: any) => {
      if (err) callback(err, undefined);
      callback(undefined, {
        userId: user._doc.userId,
        email: user._doc.email,
        role: user._doc.role,
        blockList: user._doc.blockList,
      });
    }
  );
}
