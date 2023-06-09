import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
