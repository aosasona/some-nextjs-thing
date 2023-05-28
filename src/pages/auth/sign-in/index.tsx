import { Button, Input } from "@/dui";
import BaseLayout from "@/layouts/BaseLayout";
import Link from "next/link";
import { FormEvent } from "react";

export default function SignIn() {
	function handleSignin(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<BaseLayout title="Sign In">
			<div className="w-full h-screen flex flex-col items-center justify-center">
				<div className="w-5/6 lg:w-full max-w-sm mx-auto">
					<h2 className="text-2xl font-bold mb-1">Sign In</h2>
					<p className="text-stone-500 mb-6">Welcome back, sign in to continue</p>

					<form onSubmit={handleSignin} className="flex flex-col gap-1">
						<Input name="email" type="email" placeholder="johndoe@mail.com" label="E-mail address" mb={1} required />
						<Input name="password" type="password" placeholder="******" label="Password" mb={1} required />
						<div className="text-right">
							<Link href="/auth/forgot-password">Forgot password?</Link>
						</div>

						<Button type="submit" title="Continue" mt={18} />

						<div className="text-center mt-5">
							<Link href="/auth/sign-up">Create an account</Link>
						</div>
					</form>
				</div>
			</div>
		</BaseLayout>
	);
}
