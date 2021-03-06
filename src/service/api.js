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
    url: baseurl+`/api/magazine/lists?page=1&pagesize=5&is_recommend=-1&sort=-listorder,-id`,
    data: data
  })
}

export const getAllMagezineLists = (data='') => {
  return doRequestAction({
    url: baseurl+`/api/magazine/lists?page=1&pagesize=5&is_recommend=-1&sort=-listorder,-id`,
    data: data
  })
}

export const getRecommendMagezineLists = (data='') => {
  return doRequestAction({
    url: baseurl+`/api/magazine/lists?page=1&pagesize=5&is_recommend=1&sort=-listorder,-id`,
    data: data
  })
}

export const getMagezineDetails = (id,data='') => {
  return doRequestAction({
    url: baseurl+`/api/magazine/detail?id=${id}`,
    data: data
  })
}

export const getMagezineRank = (id,data='') => {
  return doRequestAction({
    url: baseurl+`/api/magazine/rank_lists?magazine_id=${id}&page=1&pagesize=5`,
    data: data
  })
}

export const getCodeNormal = (magazine_id,data='') => {
  return doRequestAction({
    url: baseurl+`/api/order/codes?magazine_id=${magazine_id}&type=0&page=1&pagesize=10000`,
    data: data
  })
}

export const getCodePlus = (magazine_id,data='') => {
  return doRequestAction({
    url: baseurl+`/api/order/codes?magazine_id=${magazine_id}&type=1&page=1&pagesize=10000`,
    data: data
  })
}

export const getProfile = (data='') => {
  return doRequestAction({
    url: baseurl+`/api/user/get_profile`,
    data: data
  })
}

export const getDacallDetail = (magazine_id,user_id,data='') => {
  return doRequestAction({
    url: baseurl+`/api/magazine/call_detail?magazine_id=${magazine_id}&user_id=${user_id}`,
    data: data
  })
}

export const getDacallCaller = (magazine_id,user_id,data='') => {
  return doRequestAction({
    url: baseurl+`/api/magazine/called_users?magazine_id=${magazine_id}&user_id=${user_id}`,
    data: data
  })
}

export const getOrderLists = (data='') => {
  return doRequestAction({
    url: baseurl+`/api/order/lists`,
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

//?????????0???plus???1
export const getCheckCodeNormal = (magazine_id,data='') => {
  return doRequestAction({
    url: baseurl+`/api/code/check_auth?magazine_id=${magazine_id}&code_type=0`,
    data: data
  })
}

export const getCheckCodePlus= (magazine_id,data='') => {
  return doRequestAction({
    url: baseurl+`/api/code/check_auth?magazine_id=${magazine_id}&code_type=1`,
    data: data
  })
}


