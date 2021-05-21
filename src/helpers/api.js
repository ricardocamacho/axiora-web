import axios from 'axios';

const baseUrl = {
  development: 'https://bcq3petmyf.execute-api.us-east-2.amazonaws.com/dev',
  production: 'https://bcq3petmyf.execute-api.us-east-2.amazonaws.com/dev'
};

// Singleton instance
let instance = null;

class Api {
  constructor() {
    if (!instance) {
      this.axioraApi = axios.create({
        baseURL: baseUrl[process.env.NODE_ENV],
        headers: {
          'Content-Type': 'application/json'
        }
      });
      instance = this;
    }
    return instance;
  }

  async signUp(email, password) {
    const response = await this.axioraApi.post('/sign-up', { email, password });
    return response.data;
  }

  async loginUser(email, password) {
    const response = await this.axioraApi.post('/sign-in', { email, password });
    return response.data;
  }
}

export default Api;
