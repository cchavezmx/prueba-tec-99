// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch'
// express - NODEJS
export default async function handler (req, res) {
  // req.params, req.query
  // instalar node-fetch
  // node 17 experimental FETCH
  const { limit } = req.query
  const url = 'https://api.spacexdata.com/v3/launches'

  const data = await fetch(url)
    .then(res => res.json())
    .then(json => json.slice(0, Number(limit)))
  return res.status(200).json({ launches: data })
}
