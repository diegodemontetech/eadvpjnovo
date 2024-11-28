import api from './config';

export const quizService = {
  async getQuizByLessonId(lessonId: string) {
    const response = await api.get(`/quiz/lesson/${lessonId}`);
    return response.data;
  },

  async submitQuizAnswers(quizId: string, answers: number[]) {
    const response = await api.post(`/quiz/${quizId}/submit`, { answers });
    return response.data;
  },
};