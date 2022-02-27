import axios from 'axios'




export default async function handler(req, res) {
    let response = await axios.get('https://api.coingecko.com/api/v3/ping')
    console.log(response.data)
    res.status(200).json({ name: 'John Doe' })
  }