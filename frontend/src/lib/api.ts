import axios from 'axios'
import type { NewsListOut, NewsItem, Favorite, BroadcastLog, DashboardStats, Source } from '../types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 30000,
})

export const fetchNews = (params: {
  page?: number; per_page?: number; search?: string
  source?: string; tag?: string; sort?: 'date' | 'impact' | 'source'
}) => api.get<NewsListOut>('/news/', { params }).then(r => r.data)

export const fetchNewsItem = (id: number) =>
  api.get<NewsItem>(`/news/${id}`).then(r => r.data)

export const refreshNews = () =>
  api.post('/news/refresh').then(r => r.data)

export const fetchTags = () =>
  api.get<{ tag: string; count: number }[]>('/news/meta/tags').then(r => r.data)

export const fetchFavorites = () =>
  api.get<Favorite[]>('/favorites/').then(r => r.data)

export const addFavorite = (news_item_id: number) =>
  api.post<Favorite>('/favorites/', { news_item_id }).then(r => r.data)

export const removeFavoriteByNews = (news_item_id: number) =>
  api.delete(`/favorites/by-news/${news_item_id}`).then(r => r.data)

export const removeFavorite = (favorite_id: number) =>
  api.delete(`/favorites/${favorite_id}`).then(r => r.data)

export const sendBroadcast = (body: {
  favorite_id: number; platform: string
  recipients?: string[]; custom_message?: string
}) => api.post<BroadcastLog>('/broadcast/', body).then(r => r.data)

export const fetchBroadcastLogs = () =>
  api.get<BroadcastLog[]>('/broadcast/logs').then(r => r.data)

export const fetchSources = () =>
  api.get<Source[]>('/sources/').then(r => r.data)

export const toggleSource = (id: number) =>
  api.patch(`/sources/${id}/toggle`).then(r => r.data)

export const fetchStats = () =>
  api.get<DashboardStats>('/admin/stats').then(r => r.data)

export const seedAndFetch = () =>
  api.post('/admin/seed').then(r => r.data)

export default api