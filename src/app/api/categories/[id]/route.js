import { NextResponse } from "next/server";
import Category from "@/models/Category";

export const PUT = async (request, { params }) => {
  const { id } = params;
  const dataUpdate = await request.json();

  try {
    const result = await Category.update(dataUpdate, {
      where: {
        id
      },
    });

    return new NextResponse("Category has been updated", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    const result = await Category.findOne({
      where: {
        id
      },
    });
    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    const result = await Category.destroy({
      where: {
        id
      },
    });

    return new NextResponse("Category has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
