import { NextRequest, NextResponse } from 'next/server'
import { getServerSideUser } from './lib/payload-utils'

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req
  const { user } = await getServerSideUser(cookies)

