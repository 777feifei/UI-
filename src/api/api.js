/*
 * @Description:
 * @Autor: JF
 * @Date: 2021-04-29 10:29:17
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-30 20:02:54
 */
import http from './http.js';

// 登录
export const websocketUrl = "wss://wg.fxgkpt.com/hdPush?uuid="
export const login = (params) => {
  return http.formPost('/v1/user/login', params);
};
