import { NextRequest, NextResponse } from "next/server";
const API_BASE_URL = process.env.API_BASE_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log(
    "Lead payload:",
    JSON.stringify(body, null, 2)
    );

    const response = await fetch(`${API_BASE_URL}/website/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        // Remove if your API doesn't need auth
        Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
      },

      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message: "Lead submission failed",
      },
      {
        status: 500,
      }
    );
  }
}