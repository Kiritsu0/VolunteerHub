import SignUpForm from "@/components/signupForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function SignUp() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home/volunteer");

  return <SignUpForm />;
}

export default SignUp;
