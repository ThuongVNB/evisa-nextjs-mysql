import { NextResponse } from "next/server";
import Xref_post_category from "@/models/Xref_post_category";
// const upload = '../middleware/multer.js';
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };


export const POST = async (request) => {
   const xrefData = await request.json();
  try {
    const result = await Xref_post_category.create(xrefData);
    return new NextResponse("Post has been added to category", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const PUT = async (request) => {
  const {post_id, old_post_id, category_id, old_category_id} = await request.json();

  try {
    const result = await Xref_post_category.update({post_id, category_id}, {
      where: { post_id: old_post_id, category_id: old_category_id },
    });

    return new NextResponse("Post has been changed category", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


