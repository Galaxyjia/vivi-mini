import React, { useState,useEffect,useRouter} from "react";
import { View, Image, Text,RichText} from "@tarojs/components";
import Taro,{getCurrentInstance} from "@tarojs/taro";
import Rank from "@components/Rank";
import Card from "@components/Card";
import arrow from "@icons/arrow.png";
import {getMagezineDetails,getMagezineRank,getCheckCodeNormal,getCheckCodePlus} from "@service/api"

import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";
import DetailNav from "@components/DetailNav";

function Detail() {
  // const {id} = props;
  const [data,setData]= useState()
  const [rankdata,setRankData] = useState()
  const [isCheckedNormal,setCheckedNormal] = useState()
  const [isCheckedPlus,setCheckedPlus] = useState()
  const [path,setPath] = useState()
  const [path2,setPath2] = useState()

  // magazine_id
  let { id } = getCurrentInstance().router.params
  console.log(getCurrentInstance().router.params)
  // 可以使用所有的 React Hooks

  const parentCallbackNormal = (value) =>{
    console.log("normal value:",value)
  }

  const parentCallbackPlus = (value) =>{
    console.log("plus value:",value)
  }

  useEffect(() => {
    getMagezineDetails(id)
    .then(res=>{
        console.log("data: ",res.data)
        setData(()=>res.data)
        setPath(()=>res.data.path)
        setPath2(()=>res.data.path2)
    })
  },[]);

  useEffect(() => {
    getMagezineRank(id).then(res=>{
        console.log(res.data)
        setRankData(()=>res.data)
    })
  },[]);

  useEffect(()=>{
    getCheckCodeNormal(id)
    .then((res)=>
      {
        console.log("checknormal:",res)
        setCheckedNormal(()=>res.data.code)
      })
  },[])

  useEffect(() => {
    getCheckCodePlus(id)
    .then((res)=>
      {
        console.log("checkplus:",res)
        setCheckedPlus(()=>res.data.code)
      })
  },[])

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
      <View className="w-full">
        <View className="z-0">
        {
          data&&data.data&&
          <Image
            className={"w-full h-48"}
            src={data.data.cover}
          />
        }
        </View>
        <View className="z-50">
          <View className="p-3 bg-gray-100 rounded-3xl">
          {
            data&&data.data&&
            <RichText nodes={data.data.content} />
          }
          </View>
        </View>
        <View className="flex items-center justify-center h-8">
          <View className="text-xl text-bold">订阅排行榜</View>
        </View>
        <View className="w-full m-2">
        {
          rankdata&&rankdata.data&&rankdata.data.lists.map((item,index)=>(
            <Rank key={index} amount={item.amount} nickname={item.user.nick_name} avatar_url={item.user.avatar_url} callers={item.callers} magazine_id={item.magazine_id} user_id={item.user.id} index={index}/>
          ))
        }
        </View>
      </View>
        {
          data&&data.data?<DetailNav id={id} path={data.data.path} path2={data.data.path2} magazine_id={id} isCheckedNormal={isCheckedNormal} isCheckedPlus={isCheckedPlus} parentCallbackNormal={parentCallbackNormal} parentCallbackPlus={parentCallbackPlus}/>:<DetailNav id={id}/>
        }
    </View>
  );
}

export default Detail;
