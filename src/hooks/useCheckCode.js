import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";
import {getCheckCodeNormal,getCheckCodePlus} from "@service/api"

function useCheckCodeNormal(magazine_id){
  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    getCheckCodeNormal(magazine_id).then(res=>{
      console.log("checkcode:",res.data)
      setIsChecked(()=>res.data.code)
    })
  },[]);

  return isChecked==0?"true":"false";
};

function useCheckCodePlus(magazine_id){
  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    getCheckCodePlus(magazine_id).then(res=>{
      console.log("checkcode:",res.data)
      setIsChecked(()=>res.data.code)
    })
  },[]);

  return isChecked==0?"true":"false";
};

export {useCheckCodeNormal,useCheckCodePlus}
