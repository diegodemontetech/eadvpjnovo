import api from './config';

export const userService = {
  async getAllUsers() {
    const response = await api.get('/users');
    return response.data;
  },

  async getUserById(id: string) {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  async createUser(data: any) {
    const response = await api.post('/users', data);
    return response.data;
  },

  async updateUser(id: string, data: any) {
    const response = await api.put(`/users/${id}`, data);
    return response.data;
  },

  async deleteUser(id: string) {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  }
};