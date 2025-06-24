import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const tokenGoogle = request.cookies.get('token')?.value
  const tokenLocal = request.cookies.get('jwt')?.value

  if (!tokenGoogle && !tokenLocal) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
