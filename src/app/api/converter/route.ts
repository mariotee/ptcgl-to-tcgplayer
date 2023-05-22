import { NextResponse } from 'next/server';
import { convertAsync } from '../../../../util/convert';
 
export async function POST(request: Request) {
  try 
  {
    return NextResponse.json(await convertAsync(await request.json()));
  } catch(err) {
    console.log(err);
  }
}