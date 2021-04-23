import React from "react";
import Taro from "@tarojs/taro";
import arrow from "@icons/arrow.png";

import { View, Text, Button, Image } from "@tarojs/components";
export default function Rank(props) {
  const {amount,nickname,avatar_url,callers,magazine_id,user_id} = props;

  const gotodacall =()=>{
    Taro.redirectTo({ url: `/pages/dacall/dacall?magazine_id=${magazine_id}&user_id=${user_id}`});
  }

  return (
    <View className="w-full h-24 shadow-xl">
      <View className="flex flex-row items-center justify-around">
        <View>
          <Image
            className={"w-14 h-14 bg-pink-500 mt-2 mx-auto rounded-full"}
            src={avatar_url}
          />
        </View>
        <View className="pt-2">
          <View>{nickname}</View>
          <View>{amount}份</View>
          <View>
            {
              callers&&callers.map((item, index)=>(
                <Image
                  className={"w-4 h-4 bg-pink-500 mt-2 mx-auto rounded-full"}
                  mode={"scaleToFill"}
                  src={item.avatar_url}
              />
              ))
            }
          </View>
        </View>
        <View className="pt-2" onClick={gotodacall}>
          <Image className="w-4 h-4" src={arrow} />
        </View>
      </View>
    </View>
  );
}
