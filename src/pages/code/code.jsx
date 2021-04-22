import React, {useState,useEffect } from "react";
import { View, WebView,Image} from "@tarojs/components";
import CodeCard from "@components/CodeCard";
import Taro from "@tarojs/taro";

import normal_clicked from "@icons/normal_clicked.png";
import normal_default from "@icons/normal_default.png";
import plus_clicked from "@icons/plus_clicked.png";
import plus_default from "@icons/plus_default.png";

import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";
import DetailNav from "@components/DetailNav";

function Code() {
  // 可以使用所有的 React Hooks
  const [data, setData] = useState();
  const [dataplus, setDataPlus] = useState();
  const [index,setIndex] = useState(false);

  useEffect(() => {
    Taro.request({
      url: "https://vivimini.havefunentertain.com/api/order/codes?magazine_id=1&type=0&page=1&pagesize=2",
      header: {
        // 'content-type': 'application/x-www-form-urlencoded', // 默认值
        "X-Requested-With": "XMLHttpRequest",
        "X-Token":
          "49f8B1UEAwcDBARVVAVVDVYDAgQLUQdUCFsNBgFUXAoGAwNUVQxXVAVVBgcCBAAOAQIOBwgBVAQDCAwDAQ",
      },
      method: "GET",
      // dataType:'其他'
    }).then((res) => {
      console.log(res.data);
      setData(() => res.data);
    });
  }, [index]);

  useEffect(() => {
    Taro.request({
      url: "https://vivimini.havefunentertain.com/api/order/codes?magazine_id=1&type=1&page=1&pagesize=2",
      header: {
        // 'content-type': 'application/x-www-form-urlencoded', // 默认值
        "X-Requested-With": "XMLHttpRequest",
        "X-Token":
          "49f8B1UEAwcDBARVVAVVDVYDAgQLUQdUCFsNBgFUXAoGAwNUVQxXVAVVBgcCBAAOAQIOBwgBVAQDCAwDAQ",
      },
      method: "GET",
      // dataType:'其他'
    }).then((res) => {
      console.log(res.data);
      setDataPlus(() => res.data);
    });
  }, [index]);

  // 对应 onReady
  useReady(() => {});

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Taro 文档】-> 【进阶指南】->【Hooks】
  usePullDownRefresh(() => {});

  return (
    <View className="min-h-screen bg-white">
      <View className="flex items-center justify-around m-2">
        <View onClick={()=>setIndex(true)}>
        {
          index === false?<Image src={normal_default} className="w-10 h-10 rounded-full shadow-xl"/>:<Image src={normal_clicked} className="w-10 h-10 rounded-full shadow-xl"/>
        }
        </View>
        <View onClick={()=>setIndex(false)}>
        {
          index === true?<Image src={plus_default} className="w-10 h-10 rounded-full"/>:<Image src={plus_clicked} className="w-10 h-10 rounded-full"/>
        }
        </View>
      </View>
      <View>
      {
        index === false && data&&data.data.lists.map((item,index) =>(
          <CodeCard sn={item.sn} code={item.code} key={index}/>
        ))
      }
      {
        index === true && dataplus&&dataplus.data.lists.map((item,index)=>(
          <CodeCard sn={item.sn} code={item.code} key={index}/>
        ))
      }
      </View>

    </View>
  );
}

export default Code;
