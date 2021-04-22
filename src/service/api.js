import Taro from "@tarojs/taro";
import {baseurl} from "./config"

export const doRequestAction = (req) =>{
  let token='';
  try {
    var value= Taro.getStorageSync('token')
    if (value) {
      // Do something with return value
      token = value
    }
  } catch (e) {
    // Do something when catch error
    console.log(e)
  }

  return Taro.request({
    url:req.url,
    header:{
      "X-Requested-With": "XMLHttpRequest",
      "X-Token":token
    },
    data:req.data,
    method:"GET"
  })
}

export const getMagezineLists = (data='') => {
  return doRequestAction({
    url: baseurl+'/api/magazine/lists?page=1&pagesize=5&is_recommend=-1&sort=-listorder,-id',
    data: data
  })
}

export const getLoginCode = (res) => {
  return doRequestAction({
    url:baseurl+"/api/user/login",
    data:{
      code:res.code
    }
  })
}







