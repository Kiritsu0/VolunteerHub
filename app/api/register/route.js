import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password, isOrganization } = await req.json();

    const hashpass = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashpass, isOrganization });
    console.log("Register Successfully.");

    return NextResponse.json({ message: "User Registered." }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
