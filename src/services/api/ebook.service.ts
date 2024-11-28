import api from './config';

export const ebookService = {
  async getAllEbooks() {
    const response = await api.get('/ebooks');
    return response.data;
  },

  async getEbookById(id: string) {
    const response = await api.get(`/ebooks/${id}`);
    return response.data;
  },

  async createEbook(data: any) {
    const response = await api.post('/ebooks', data);
    return response.data;
  },

  async updateEbook(id: string, data: any) {
    const response = await api.put(`/ebooks/${id}`, data);
    return response.data;
  },

  async deleteEbook(id: string) {
    const response = await api.delete(`/ebooks/${id}`);
    return response.data;
  }
};