import {doRequestAction} from '../utils/request'
import {magazineList,loginCode} from './config'
import Taro from "@tarojs/taro";

// 调用封装方法 返回promise对象 得到获取到的数据
// export const getTopics = (data) => {
//   return doRequestAction({
//     url: Api.topics,
//     data: data
//   })
// }

export const getMagezineLists = (data) => {
  return doRequestAction({
    url: magazineList,
    data: data
  })
}

export const getLoginCode = (res) => {
  return  Taro.request({
    url: "https://vivimini.havefunentertain.com/api/user/login",
    header: {
      "X-Requested-With": "XMLHttpRequest",
    },
    data: {
      code: res.code,
    },
    method: "GET",
  })
}







