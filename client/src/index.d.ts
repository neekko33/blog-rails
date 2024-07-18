export interface Post {
  id?: string
  key?: string
  title: string
  content?: string
  published?: boolean
  authorId?: number
  categoryId?: string
  author?: { name: string }
  category?: Category
  tags: Tag[]
  creatAt?: string
  updateAt?: string
}

export type SelectType = {
  title?: string
  categoryId?: string
  tags?: string[]
}

export interface AxiosResponseData<T> {
  code: number,
  message: string,
  data: T
}

export interface User {
  id?: number,
  email: string,
  name?: string,
  avatar?: string,
  intro?: string,
  password?: string,
}

export interface Category {
  id?: string,
  name: string,
  createAt?: string,
  updateAt?: string,
  posts?: Post[]
}

export interface Tag {
  id?: string,
  name?: string,
  createAt?: string,
  updateAt?: string,
  posts?: Post[]
}

export interface SelectOptions {
  value: string
  label: string
}

export interface Password {
  oldPassword?: string
  newPassword?: string
}

