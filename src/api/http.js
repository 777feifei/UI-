import axios from "./axios";
import QS from "qs";

export default {
  /**
   * get方法，对应get请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params || ""
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
  /**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  post: (url, params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params, {
          headers: { "Content-Type": "application/json;charset=UTF-8" }
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
  /**
   * patch方法，对应patch请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  patch: (url, params) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(url, params, {
          headers: { "Content-Type": "application/json;charset=UTF-8" }
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
  /**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  formPost: (url, params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, QS.stringify(params), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
          }
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          console.log(err);
          reject(err.data);
        });
    });
  },

  formDataPost: (url, params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          console.log(err);
          reject(err.data);
        });
    });
  },
  /**
   * delete方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  delete: (url, params) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, {
          params: params || ""
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },

  /**
   * put请求
   * @param url 接口路由
   * @param data 接口参数
   * @param auth 是否需要带登录信息
   * @returns {AxiosPromise<any>}
   */
  put: (url, params) => {
    return new Promise((resolve, reject) => {
      axios
        .put(url, params, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          }
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },

  /**
   * 上传文件
   * @param url 接口路由
   * @param file 接口文件
   * @param auth 是否需要带登录信息
   */
  upload: (url, file) => {
    let param = new FormData();
    param.append("file", file);
    return axios.post(url, param);
  }
};
