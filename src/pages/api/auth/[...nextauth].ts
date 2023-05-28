import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
	return await NextAuth(req, res, {
		providers: [
			Credentials({
				name: "Credentials",
				credentials: {
					username: {
						label: "Username",
						type: "text",
					},
					password: { label: "Password", type: "password" },
				},
				async authorize(credentials, req) {
					return null;
				},
			}),
		],
	});
}
