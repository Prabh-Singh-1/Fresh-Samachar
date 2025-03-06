import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "punajb news";
  console.log(query);

  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2025-03-01&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;

  try {
    const response = await fetch(apiUrl);

    // Check if the response status is valid
    if (!response.ok) {
      console.error("Failed to fetch news from API:", response.statusText);
      return NextResponse.json(
        { error: "Failed to fetch news from API" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 }); // Explicitly set status to 200
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 } // Set status to 500 for server errors
    );
  }
}
