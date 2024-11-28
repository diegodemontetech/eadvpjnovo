import api from './config';

export const courseService = {
  async getAllCourses() {
    const response = await api.get('/courses');
    return response.data;
  },

  async getCourseById(id: string) {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },

  async createCourse(data: any) {
    const response = await api.post('/courses', data);
    return response.data;
  },

  async updateCourse(id: string, data: any) {
    const response = await api.put(`/courses/${id}`, data);
    return response.data;
  },

  async deleteCourse(id: string) {
    const response = await api.delete(`/courses/${id}`);
    return response.data;
  },

  async createLesson(courseId: string, data: any) {
    const response = await api.post(`/courses/${courseId}/lessons`, data);
    return response.data;
  },

  async updateLesson(courseId: string, lessonId: string, data: any) {
    const response = await api.put(`/courses/${courseId}/lessons/${lessonId}`, data);
    return response.data;
  },

  async deleteLesson(courseId: string, lessonId: string) {
    const response = await api.delete(`/courses/${courseId}/lessons/${lessonId}`);
    return response.data;
  },

  async createQuiz(lessonId: string, data: any) {
    const response = await api.post(`/lessons/${lessonId}/quiz`, data);
    return response.data;
  },

  async updateQuiz(lessonId: string, quizId: string, data: any) {
    const response = await api.put(`/lessons/${lessonId}/quiz/${quizId}`, data);
    return response.data;
  },

  async deleteQuiz(lessonId: string, quizId: string) {
    const response = await api.delete(`/lessons/${lessonId}/quiz/${quizId}`);
    return response.data;
  }
};