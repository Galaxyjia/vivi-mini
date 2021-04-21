import React from "react";
import Taro from "@tarojs/taro";
import arrow from "@icons/arrow.png";

import { View, Text, Button, Image } from "@tarojs/components";
export default function Rank(props) {
  const {amount,nickname,avatar_url,callers} = props;

  const gotodacall =()=>{
    Taro.redirectTo({ url: "/pages/dacall/dacall" });
  }

  return (
    <View className="w-full h-24 shadow-xl">
      <View className="flex flex-row justify-around">
        <View>
          <Image
            className={"w-14 h-14 bg-pink-500 mt-2 mx-auto p-1 rounded-full"}
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
                  className={"w-4 h-4 bg-pink-500 mt-2 mx-auto p-1 rounded-full"}
                  mode={"scaleToFill"}
                  src={item.avatar_url}
              />
              ))
            }
            <Image
              className={"w-4 h-4 bg-pink-500 mt-2 mx-auto p-1 rounded-full"}
              src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            />
            <Image
              className={"w-4 h-4 bg-pink-500 mt-2 mx-auto p-1 rounded-full"}
              src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            />
            <Image
              className={"w-4 h-4 bg-pink-500 mt-2 mx-auto p-1 rounded-full"}
              src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            />
            <Image
              className={"w-4 h-4 bg-pink-500 mt-2 mx-auto p-1 rounded-full"}
              src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            />
          </View>
        </View>
        <View className="pt-2" onClick={gotodacall}>
          <Image className="w-4 h-4" src={arrow} />
        </View>
      </View>
    </View>
  );
}
