import { Button, Input } from "@/dui";
import BaseLayout from "@/layouts/BaseLayout";
import Link from "next/link";
import { FormEvent } from "react";

export default function SignUp() {
	function handleSignup(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<BaseLayout title="Sign In">
			<div className="w-full min-h-screen flex flex-col items-center justify-center py-28 lg:py-6">
				<div className="w-5/6 lg:w-full max-w-sm mx-auto">
					<h2 className="text-2xl font-bold mb-1">Sign Up</h2>
					<p className="text-stone-500 mb-6">Get started, create an account to continue</p>

					<form onSubmit={handleSignup} className="flex flex-col">
						<Input name="first_name" type="text" placeholder="John" label="First name" required />
						<Input name="last_name" type="text" placeholder="Doe" label="Last name" required />
						<Input name="email" type="email" placeholder="johndoe@mail.com" label="E-mail address" required />
						<Input name="password" type="password" placeholder="******" label="Password" required />
						<Input name="confirm_password" type="password" placeholder="******" label="Confirm password" required />

						<Button type="submit" title="Continue" mt={20} />

						<div className="text-center mt-3">
							<Link href="/auth/sign-in">Already have an account?</Link>
						</div>
					</form>
				</div>
			</div>
		</BaseLayout>
	);
}
