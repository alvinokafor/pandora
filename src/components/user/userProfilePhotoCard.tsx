import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import profileImage from "../../assets/profileImageTest.png";

export default function UserProfilePhotoCard() {
  return (
    <div>
      {/* <img src={profileImage} alt="" /> */}
      <Image
        src={profileImage}
        alt="User Profile Picture"
        className="rounded-full w-[40px] h-[40px]"
      />
    </div>
  );
}
