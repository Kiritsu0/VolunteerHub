import LoginForm from "@/components/loginform";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function LogIn() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home/volunteer");

  return <LoginForm />;
}

export default LogIn;
