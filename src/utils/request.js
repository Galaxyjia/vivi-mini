import Taro from '@tarojs/taro'
// 暂时考虑 req的属性都会传入
export const doRequestAction = (req) => {
  return new Promise((resolve, reject) => {
    if (req.loading) Taro.showLoading({ title: req.title ? req.title : '数据加载中...' })
    Taro.request({
      url: /^http(s?):\/\//.test(req.url) ? req.url : '', //暂时留空
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        "X-Requested-With":"XMLHttpRequest",
        'X-Token':''
      }
    })
    .then(res => {})
    .catch(err => {
        //报错提示
    })
    .finally(() => {
      if (req.loading) Taro.hideLoading()
    })
  })
}

export const getRequestHeader = () => {
  let token = Taro.getStorageSync('token')
  return token ? {
    "content-type": 'application/x-www-form-urlencoded',
    "X-Requested-With":"XMLHttpRequest",
    'X-Token': token
  } : {
    "content-type": 'application/x-www-form-urlencoded',
    "X-Requested-With":"XMLHttpRequest",
  }
}

// const NormalRquestData = {
//   url: api.DOMAIN, // 默认请求地址
//   method: 'GET', // 默认get请求
//   header : { // 默认使用的header头
//     "content-type": 'application/x-www-form-urlencoded',
//     "X-Requested-With":"XMLHttpRequest",
//     'X-Token':''
//   },
//   data: {}, // 默认没有参数，传入空对象
//   loading: true, //默认开启loading层
//   mask: true, //请求时不需要点击
//   title: '数据加载中', //loading提示文字
//   failToast: false // 一般我们会处理相应业务逻辑，就不直接提示阻断流程
// }

// 调用封装方法 返回promise对象 得到获取到的数据
// const getTopics = (data) => {
//   return doRequestAction({
//     url: Api.topics,
//     data: data
//   })
// }
