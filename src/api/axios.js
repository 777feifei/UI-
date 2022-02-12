import axios from "axios";
import Cookies from "js-cookie";
// import self from "../main.js";

// axios.defaults.withCredentials = true;
// 创建一个axios实例

const instance = axios.create({
  baseURL: process.env.VUE_BASE_URL,
  timeout: 300000,
  //   withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "X-Requested-With": "XMLHttpRequest"
  }
});
// 开启发送cookie, 设置在创建实例化后面headers中的参数是cookie，如果设置在创建实例化中的参数是set-cookie
// instance.defaults.withCredentials = true;

// 给axios实例添加一个setToken方法，用于登录后方便将最新token动态添加到header，同时将token保存在Cookies中
instance.setToken = obj => {
  instance.defaults.headers["token"] = obj.token;
  Cookies.set("token", JSON.stringify(obj), { expires: 31 });
};

//是否正在刷新token标识
let isRefreshing = false;
//请求队列数组
let requests = [];
instance.interceptors.request.use(
  config => {
    const tokenObj = getToken();
    // 添加请求头
    // config.headers["token"] = tokenObj.token;
    // 登录接口和刷新token接口绕过
    if (
      config.url.indexOf("/rereshToken") >= 0 ||
      config.url.indexOf("/login") >= 0
    ) {
      return config;
    }
    if (tokenObj.token && tokenObj.tokenExpireTime) {
      const now = Date.now();
      if (now >= tokenObj.tokenExpireTime) {
        // 立即刷新token
        if (!isRefreshing) {
          console.log("刷新token ing...");
          isRefreshing = true;

          refreshToken()
            .then(res => {
              const { token, tokenExprieIn } = res.data;
              const tokenExpireTime = now + tokenExprieIn * 1000;
              instance.setToken({ token, tokenExpireTime });
              isRefreshing = false;
              return token;
            })
            .then(token => {
              console.log("刷新token成功，执行队列");
              requests.map(cb => cb(token));
              // 执行完成后，清空队列
              requests = [];
            })
            .catch(res => {
              console.error("refresh token error: ", res);
            });
        }

        //将所有的请求都存到数组中
        const retryOriginalRequest = new Promise(resolve => {
          requests.push(token => {
            // 因为config中的token是旧的，所以刷新token后要将新token传进来
            config.headers["token"] = token;
            resolve(config);
          });
        });

        return retryOriginalRequest;
      }
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 请求返回后拦截
instance.interceptors.response.use(
  response => {
    const { code } = response.data;
    if (code !== 200) {
      if (code === 4001 || code === 4002 || code === 4003) {
        localStorage.clear(); // 用户失效清楚所有缓存
        // token过期了，直接跳转到登录页
        // if (self.$route.path != "/login") {
        //   self.$router.replace("/login");
        // }
      }
      return Promise.reject(response);
    }
    return response;
  },
  error => {
    console.log("catch", error);
    return Promise.reject(error);
  }
);

// 从Cookies中获取token，token存的是object信息，有tokenExpireTime和token两个字段
const getToken = () => {
  let tokenData = {};
  try {
    tokenData = Cookies.get("token");
    tokenData = tokenData ? JSON.parse(tokenData) : {};
  } catch {
    console.error("Cookies获取token失败");
  }
  return tokenData;
};

//刷新token
const refreshToken = () => {
  // instance是当前request.js中已创建的axios实例
  return instance.post("/refreshtoken").then(res => res.data);
};

export default instance;
