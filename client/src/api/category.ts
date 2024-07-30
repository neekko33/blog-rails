import service from './service.ts'
import { AxiosResponseData, Category } from '../index'

export function getCategories() {
  return service.get<any, AxiosResponseData<Category[]>>('categories')
}

export function addCategory(name: string) {
  return service.post<any, AxiosResponseData<Category>>('categories', {
    name
  })
}

export function updateCategory(id: number, name: string) {
  return service.put<any, AxiosResponseData<Category>>('categories/' + id, {
    name
  })
}

export function deleteCategory(id: number) {
  return service.delete<any, AxiosResponseData<Category>>('categories/' + id)
}
