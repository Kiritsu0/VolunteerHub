import { MdHail } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center overflow-hidden">
      <h1 className="text-4xl font-bold cursor-pointer text-center text-white mb-12">
        Welcome to Volunteer<span className="text-green-600">Hub!</span>
      </h1>

      <div className="p-10 bg-white rounded-md flex flex-col items-center pa">
        <p className="text-center font-medium mb-7">
          Choose your role below to get started:
        </p>
        <div className="flex gap-8 justify-center">
          <Link href="">
            <MdHail className="rounded-full text-4xl sm:text-5xl lg:text-6xl text-green-600 border-2 border-black p-1 mx-auto hover:bg-green-400" />
            <b>Volunteer</b>
          </Link>

          <Link href="">
            <VscOrganization className="rounded-full text-4xl sm:text-5xl lg:text-6xl text-green-600 border-2 border-black p-1 mx-auto hover:bg-green-400" />
            <b>Organization</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
