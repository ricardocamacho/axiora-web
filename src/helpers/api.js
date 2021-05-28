import axios from 'axios';

const baseUrl = {
  development: 'https://bcq3petmyf.execute-api.us-east-2.amazonaws.com/dev',
  production: 'https://ssa61tzph4.execute-api.us-east-2.amazonaws.com/prod'
};

// Singleton instance
let instance = null;

class Api {
  constructor() {
    if (!instance) {
      this.axioraApi = axios.create({
        baseURL: baseUrl[process.env.REACT_APP_ENV],
        headers: {
          'Content-Type': 'application/json'
        }
      });
      instance = this;
    }
    return instance;
  }

  setToken(token) {
    this.axioraApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  async signUp(email, password) {
    const response = await this.axioraApi.post('/sign-up', { email, password });
    return response.data;
  }

  async loginUser(email, password) {
    const response = await this.axioraApi.post('/sign-in', { email, password });
    return response.data;
  }

  async getStores() {
    const response = await this.axioraApi.get('/stores');
    return response.data;
  }

  async addStore(meliUserId, code, redirectUri) {
    const response = await this.axioraApi.post('/mercadolibre/store', {
      meliUserId,
      code,
      redirectUri
    });
    return response.data;
  }
}

export default Api;
