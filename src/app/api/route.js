import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    secure: true,
});

export async function GET(req, res) {
    try {
        const results = await cloudinary.v2.search
            .expression(`folder:${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER}/*`)
            .sort_by("public_id", "desc")
            .max_results(10)
            .execute();
        return NextResponse.json(results, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error fetching images' }, { status: 500 });
    }
}