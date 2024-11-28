import api from './config';

export const newsService = {
  async getAllNews() {
    const response = await api.get('/news');
    return response.data;
  },

  async getNewsById(id: string) {
    const response = await api.get(`/news/${id}`);
    return response.data;
  },

  async addComment(newsId: string, content: string) {
    const response = await api.post(`/news/${newsId}/comments`, { content });
    return response.data;
  },

  async likeNews(newsId: string) {
    const response = await api.post(`/news/${newsId}/like`);
    return response.data;
  },
};