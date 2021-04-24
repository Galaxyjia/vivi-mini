import React from "react";
import Taro from "@tarojs/taro";
import arrow from "@icons/arrow.png";

import { View, Text, Button, Image } from "@tarojs/components";
export default function Rank(props) {
  const {amount,nickname,avatar_url,callers,magazine_id,user_id,index} = props;

  const gotodacall =()=>{
    Taro.redirectTo({ url: `/pages/dacall/dacall?magazine_id=${magazine_id}&user_id=${user_id}`});
  }

  return (
    <View className="w-full h-24 shadow-xl">
      <View className="flex flex-row items-center justify-start">
        <View className="flex flex-row items-center justify-center ml-3 text-3xl text-bold">
        {
          index+1
        }
        </View>
        <View className="flex flex-row items-center justify-center ml-10">
          <Image
            className={"w-14 h-14 mt-2 mx-auto rounded-full"}
            src={avatar_url}
          />
        </View>
        <View className="pt-2 ml-10">
          <View className="w-32">{nickname}</View>
          <View className="w-32">{amount}份</View>
          <View>
            {
              callers&&callers.map((item, index)=>(
                <Image
                  className={"w-4 h-4 mt-2 mx-auto rounded-full"}
                  mode={"scaleToFill"}
                  src={item.avatar_url}
              />
              ))
            }
          </View>
        </View>
        <View className="relative pt-2" onClick={gotodacall}>
          <Image className="absolute right-0 w-4 h-4" src={arrow} />
        </View>
      </View>
    </View>
  );
}
