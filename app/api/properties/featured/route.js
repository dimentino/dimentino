import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/featured
export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Property.find({
      is_featured: true,
    });

    if (!properties) {
      return new Response(JSON.stringify({ message: "No properties found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(properties), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // добавление CORS заголовка
      },
    });
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
