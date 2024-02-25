import Choose from "@/components/(home)";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home/volunteer");

  return <Choose />;
}

export default Home;
