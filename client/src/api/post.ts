import service from './service'
import { AxiosResponseData, Post } from '../index'

export const getPosts = (pageNum: number = 1, pageSize: number = 10) => {
  return service.get<any, AxiosResponseData<{ data: Post[]; count: number }>>(
    `posts?pageNum=${pageNum}&pageSize=${pageSize}`
  )
}

export const getPost = (id: number) => {
  return service.get<any, AxiosResponseData<Post>>(`posts/${id}`)
}

export const addPost = (data: Post) => {
  return service.post<any, AxiosResponseData<Post>>('posts', data)
}

export const updatePost = (id: string, data: Post) => {
  return service.put<any, AxiosResponseData<Post>>('posts/' + id, data)
}

export const publishPost = (id: string, isPublished: boolean) => {
  return service.post<any, AxiosResponseData<null>>('posts/' + id, {
    published: isPublished
  })
}

export const deletePost = (id: string) => {
  return service.delete<any, AxiosResponseData<Post>>('posts/' + id)
}
