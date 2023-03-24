// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  runtime: 'edge'
}

export default function handler(req) {
  return new Response(JSON.stringify({ name: 'John Doe' }))
}
