// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default function handler(req, res) {
    console.log('this is req',req)
    let response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=cad')
    console.log(response.data)
    
  res.status(200).json({ name: 'John Doe' })
}
