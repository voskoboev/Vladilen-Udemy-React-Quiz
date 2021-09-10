import axios from 'axios'

const baseUrlLink = process.env.REACT_APP_DATABASE_URL

export default axios.create({
  baseURL: baseUrlLink
})