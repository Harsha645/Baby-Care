import React from 'react'
import { BiCopyright } from "react-icons/bi";


export default function Footer() {
  return (
    <div className="bottom-0 fixed ml-[650px] mx-auto  flex justify-center items-center space-x-1 ">
          <BiCopyright className="text-lg text-gray-600" />
          <label className="text-gray-700">Harsha Pramod | All Rights Reserved.</label>
        </div>
  )
}
