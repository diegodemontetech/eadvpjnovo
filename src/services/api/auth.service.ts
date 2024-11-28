import api from './config';

export const authService = {
  async login(email: string, password: string) {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to login');
    }
  },

  async register(data: { name: string; email: string; password: string }) {
    try {
      const response = await api.post('/auth/register', data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to register');
    }
  },

  async validateToken(token: string) {
    try {
      const response = await api.post('/auth/validate', { token });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Invalid token');
    }
  },

  async refreshToken() {
    try {
      const response = await api.post('/auth/refresh');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to refresh token');
    }
  }
};