import service from './service.ts'
import {AxiosResponse} from 'axios'
import {User, AxiosResponseData, Password} from '../index'

export const login = async (data: User) => {
  return service.post<any, AxiosResponse<AxiosResponseData<User>>>('user/login', data)
}

export const getUser = async (id:string) => {
  return service.get<any, AxiosResponseData<User>>('user/' + id)
}

export const updateUser = async (id: string, data: User) => {
  return service.put<any, AxiosResponseData<User>>('user/' + id, data)
}

export const updatePassword = async (id: string, data: Password) => {
  return service.post<any, AxiosResponseData<never>>('user/password/' + id, data)
}

