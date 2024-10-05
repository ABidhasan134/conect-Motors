
import connectDB from '@/lib/coneectDB';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  // Set CORS headers
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*"); // Allow all origins
  headers.append("Access-Control-Allow-Methods", "POST, OPTIONS"); // Allow specific HTTP methods
  headers.append("Access-Control-Allow-Headers", "Content-Type");

  try {
    const db = await connectDB();
    const userCollection = db.collection('user');
    const newUser = await request.json();
    const res = await userCollection.insertOne(newUser);

    return NextResponse.json({ message: "New user added" }, { headers, status: 201 });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ message: "Something went wrong" }, { headers, status: 500 });
  }
};

// Handle preflight OPTIONS requests
export const OPTIONS = async () => {
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.append("Access-Control-Allow-Headers", "Content-Type");
  return new NextResponse(null, { headers });
};
