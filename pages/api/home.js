import axios from 'axios'

export default async function handler(req) {
    console.log('this is req',req)
    let response 
    try {
      response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    } catch(e) {
      console.log(e)
    }
    return response.data
  }