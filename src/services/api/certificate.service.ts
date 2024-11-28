import api from './config';

export const certificateService = {
  async getUserCertificates() {
    try {
      const response = await api.get('/certificates');
      return response.data || []; // Ensure we always return an array
    } catch (error: any) {
      console.error('Error fetching certificates:', error);
      return []; // Return empty array on error
    }
  },

  async getCertificateById(id: string) {
    try {
      const response = await api.get(`/certificates/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch certificate');
    }
  },

  async downloadCertificate(id: string) {
    try {
      const response = await api.get(`/certificates/${id}/download`, { responseType: 'blob' });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to download certificate');
    }
  },

  async getUserProgress() {
    try {
      const response = await api.get('/certificates/progress');
      return response.data;
    } catch (error: any) {
      console.error('Error fetching user progress:', error);
      // Return default progress data on error
      return {
        totalCertificates: 0,
        currentLevel: {
          id: 'apprentice',
          name: 'Aprendiz do Saber',
          description: 'Início da jornada de aprendizado.',
          minCertificates: 0,
          maxCertificates: 5,
          icon: 'scroll',
          color: '#4CAF50'
        },
        nextLevel: {
          id: 'explorer',
          name: 'Explorador Determinado',
          description: 'Avançando na exploração.',
          minCertificates: 6,
          maxCertificates: 15,
          icon: 'compass',
          color: '#2196F3'
        },
        progressToNextLevel: 0
      };
    }
  },

  async getUserStats() {
    try {
      const response = await api.get('/certificates/stats');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch user stats');
    }
  }
};