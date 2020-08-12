const axios = require('axios').default;

const api2 = axios.create({
  baseURL: 'http//localhost:3333',
})

export default api2;