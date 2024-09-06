import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/data/sample_inventory_response.json`);
  const data = await res.json();
  return NextResponse.json(data);
}
