import { defineStore } from 'pinia';
import { reqLogin } from '@/api/login';
import { LoginParamsModel } from '@/api/login/type.ts';
import { UserInfoModel } from '@/store/modules/types/type.ts';

/**
 * @description 用户信息仓库
 * */
const useUserStore = defineStore('user', {
  state: (): UserInfoModel => {
    return {
      token: localStorage.getItem('token') ?? ''
    };
  },
  getters: {},
  actions: {
    // 获取token
    GET_TOKEN() {
      return localStorage.getItem('token') ?? '';
    },
    // 设置token
    SET_TOKEN(token: string) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    /**
     * @description 用户登录
     * @description 1 请求登录
     * @description 2 存储token到store和localStorage（以防页面强制刷新，token丢失）里面
     * @param {LoginParamsModel} data 用户信息
     */
    async userLogin(data: LoginParamsModel) {
      try {
        const res: any = await reqLogin(data);
        if (res?.code === 200) {
          this.SET_TOKEN(res?.data?.token ?? '');
          return true;
        } else {
          this.token = '';
          this.SET_TOKEN('');
          return Promise.reject(res?.data?.message);
        }
      } catch (e) {
        return Promise.reject('请求出错');
      }
    }
  }
});

export default useUserStore;
