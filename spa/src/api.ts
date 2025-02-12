import axios from 'axios';

const baseUrl = {
  development: 'https://bcq3petmyf.execute-api.us-east-2.amazonaws.com/dev',
  production: 'https://ssa61tzph4.execute-api.us-east-2.amazonaws.com/prod'
};

type LoginUserResponse = {
  email: string;
  token: string;
}

export type Store = {
  PK: string,
  SK: string,
  created_at: string,
  data: {
    access_token: string,
    refresh_token: string,
    user_id: number,
    name: string,
  },
  channel: 'mercadolibre' | 'shopify',
  status: string
}

export default class Api {
  private static axioraApi = axios.create({
    baseURL: baseUrl[import.meta.env.PROD ? 'production' : 'development'],
    headers: {
      'Content-Type': 'application/json'
    }
  });

  public static setToken(token: string) {
    this.axioraApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  public static async signUp(email: string, password: string) {
    const response = await this.axioraApi.post('/sign-up', { email, password });
    return response.data;
  }

  public static async loginUser(email: string, password: string): Promise<LoginUserResponse> {
    const response = await this.axioraApi.post('/sign-in', { email, password });
    return response.data;
  }

  public static async getStores(): Promise<Store[]> {
    const response = await this.axioraApi.get('/stores');
    return response.data;
  }

  public static async addStore(meliUserId: number, code: string, redirectUri: string) {
    const response = await this.axioraApi.post('/mercadolibre/store', {
      meliUserId,
      code,
      redirectUri
    });
    return response.data;
  }

  public static async updateInventory(sku: string, quantity: number) {
    const response = await this.axioraApi.put('/inventory', { sku, quantity });
    return response.data;
  }
}
