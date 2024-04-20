import cloudinary from "cloudinary";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    secure: true,
});



export async function GET(req, res) {

    // const apiUrl = new URL(req.nextUrl)
    // const secretKey = apiUrl.searchParams.get("secret")

    // if (secretKey) {
    //     const hash = await bcrypt.hash("digex_super_secret_password", 2);
    //     const isCorrect = await bcrypt.compare(secretKey, hash);
    //     if (!isCorrect) {
    //         return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    //     }
    // }
    // else {
    //     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    // }


    try {
        const results = await cloudinary.v2.search
            .expression(`folder:${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER}/*`)
            .sort_by("public_id", "desc")
            .max_results(10)
            .execute();
        // const results = []
        return NextResponse.json(results, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error fetching images' }, { status: 500 });
    }
}