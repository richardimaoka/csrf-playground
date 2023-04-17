// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;
  const cookies = [
    `csrf_token=cccssssrrrrfffffffff; SameSite=Lax; Secure; HttpOnly; Path=/;`,
  ];
  console.log(req.headers);
  console.log(req.body.set_cookie_name);
  console.log(req.body.set_cookie_value);
  if (req.method === "POST" && body.set_cookie_name && body.set_cookie_value) {
    console.log("set-cookie", body.set_cookie_name, body.set_cookie_value);
    cookies.push(
      `${body.set_cookie_name}=${body.set_cookie_value}; SameSite=Lax; Secure; HttpOnly; Path=/;`
    );
  }
  res.setHeader("Set-Cookie", cookies);
  res.status(200).json({ name: "John Doe" });
}
