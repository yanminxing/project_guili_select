import request from '@/utils/request';
import { LoginParamsModel } from '@/api/login/type';

export enum userEnumApi {
  LOGIN_API = '/user/login'
}

// 登录请求
export const reqLogin = (data: LoginParamsModel) => {
  return request.post(userEnumApi.LOGIN_API, data);
};
