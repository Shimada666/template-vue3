import type { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosConfig: AxiosRequestConfig = {
  baseURL: '/',
  // 请求前的数据处理
  // transformRequest: [function (data: any, headers) {
  //   headers['Content-Type'] = 'application/json'
  //   return JSON.stringify(data)
  // }],
  // 请求后的数据处理
  transformResponse: [function (data: AxiosResponse) {
    return data
  }],
  // 自定义的请求头
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  // 超时设置s
  timeout: 10000,
  // 跨域是否带Token
  withCredentials: true,
  // 自定义请求处理
  // adapter: function(resolve, reject, config) {},
  // 响应的数据格式 json / blob /document /arraybuffer / text / stream
  responseType: 'json',
  // xsrf 设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  // 下传和下载进度回调
  onUploadProgress(progressEvent: any) {
    Math.round(progressEvent.loaded * 100 / progressEvent.total)
  },
  onDownloadProgress(progressEvent: any) {
    Math.round(progressEvent.loaded * 100 / progressEvent.total)
  },
  // 最多转发数，用于node.js
  maxRedirects: 5,
  // 最大响应数据大小
  maxContentLength: 2000,
  // 自定义错误状态码范围
  validateStatus(status: number) {
    return status >= 200 && status < 300
  },
}

export default axiosConfig
