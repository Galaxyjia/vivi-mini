import React, { useState, useEffect } from "react";
import { View, Image,Button } from "@tarojs/components";
import LongCard from "@components/LongCard";
import Taro from "@tarojs/taro";
import logo from "@assets/images/vivi.jpg";
import earphone from "@assets/icons/earphone.png";
import {getLoginCode,getProfile,getOrderLists} from "@service/api";

import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
  login,
} from "@tarojs/taro";
import Nav from "@components/Nav";

function My() {
  // 可以使用所有的 React Hooks
  const [data, setData] = useState();
  const [mydata, setMyData] = useState();
  const [islogin, setIsLoggin] = useState(false);

  useEffect(() => {
    getOrderLists().then((res) => {
      console.log(res.data);
      setData(() => res.data);
    });
  }, []);

  useEffect(() => {
    getProfile().then((res) => {
      console.log(res.data);
      setMyData(() => res.data);
    });
  }, []);

  // 对应 onReady
  useReady(() => {});

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Taro 文档】-> 【进阶指南】->【Hooks】
  usePullDownRefresh(() => {});

  const userLogin = () => {
    Taro.login({
      success: function (res) {
        if (res.code) {
          console.log(res);
          getLoginCode(res).then((result) => {
            console.log(result);
            Taro.setStorage({
              key:"token",
              data:result.data.data.token
            })
            getProfile().then((res) => {
              console.log(res.data);
              setMyData(() => res.data);
            });
          });
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      },
    });
  };

  return (
    <View className="min-h-screen bg-white">
      <View className="w-full ">
        <View className="flex flex-row justify-around h-20 bg-pink-400 shadow-xl" onClick={userLogin}>
          {
            mydata&&mydata.data?
            <Image
              src={mydata.data.avatar_url}
              className="w-10 h-10 rounded-full shadow-xl"
            />:
            <Image
              src={logo}
              className="w-10 h-10 bg-gray-500 rounded-full shadow-xl "
            />
          }

          <View className="ml-2 text-white">
            <View>{mydata&&mydata.data?mydata.data.nick_name:"请登录"}</View>
            <View>
              id:
              {mydata&&mydata.data?mydata.data.id:"请登录"}
            </View>
          </View>
          <View className="mt-2 ml-8 text-white">
          <Button id="button" openType="contact" bindContact="handleContact" className="w-10 h-10 bg-pink-400 rounded-full"><Image src={earphone} className="w-6 h-6"></Image></Button>
          </View>
        </View>
        <View className="-mt-6">
          {data && data.data && data.data.lists.map((item, index) => (
              <LongCard
                key={index}
                title={item.title}
                total_subscribe={item.total_subscribe}
                cover={item.cover}
              />
            ))}
        </View>
      </View>
      <Nav index="2" />
    </View>
  );
}

export default My;
