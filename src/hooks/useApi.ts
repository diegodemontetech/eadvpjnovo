import { useState, useCallback } from 'react';
import api from '../services/api/config';
import { useToast } from '../contexts/ToastContext';

export function useApi<T = any>() {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const request = useCallback(async (endpoint: string, options?: RequestInit) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get(endpoint, options);
      setData(response.data);
      return response.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'An error occurred';
      setError(errorMessage);
      showToast('error', errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  const mutate = useCallback(async (
    endpoint: string,
    method: 'POST' | 'PUT' | 'DELETE' = 'POST',
    data?: any
  ) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api({
        method,
        url: endpoint,
        data
      });
      return response.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'An error occurred';
      setError(errorMessage);
      showToast('error', errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  return {
    data,
    error,
    loading,
    request,
    mutate
  };
}