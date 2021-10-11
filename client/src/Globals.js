import axios from 'axios'

const ApiClient = axios.create({ baseURL: 'http://localhost:3001/api' })

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost3001/api'

// const ApiClient = axios.create({ baseURL: BASE_URL })

export default ApiClient
