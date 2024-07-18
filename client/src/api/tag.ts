import service from './service.ts'
import {AxiosResponseData, Tag} from '../index'

export function getTags(pageNum?: number, pageSize?: number) {
  const url = 'tag' + (pageNum && pageSize) ? `?pageNum=${pageNum}&pageSize=${pageSize}` : ''
  return service.get<any, AxiosResponseData<{ data: Tag[], count: number }>>(url)
}

export function addTag(data: Tag) {
  return service.post<any, AxiosResponseData<Tag[]>>('tag', data)
}

export function updateTag(id: string, name: string) {
  return service.put<any, AxiosResponseData<Tag>>('tag/' + id, {name})
}

export function deleteTag(id: string) {
  return service.delete<any, AxiosResponseData<Tag>>('tag/' + id)
}
