"use client";

import type { IProfileData } from "@/api/types/profile-list/index.types";

import { useState, useRef, useEffect } from "react";
import ProfileItem from "../../molecules/profile-item/ProfileItem";
import ProfileCreateBtn from "../../molecules/profile-create-btn/ProfileCreateBtn";

import { gridContainerStyle, maskedContainerStyle } from "./style.css";

interface IProfileListContentProps {
  profileData: IProfileData;
  currentMemberId: string;
  setCurrentMemberId: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMemberAddress: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMemberNickname: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMemberImage: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileListContent = ({
  profileData,
  currentMemberId,
  setCurrentMemberId,
  setCurrentMemberAddress,
  setCurrentMemberNickname,
  setCurrentMemberImage,
}: IProfileListContentProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelectProfile = (
    profileId: string,
    profileAddress: string,
    profileNickname: string,
    profileImage: string
  ) => {
    if (currentMemberId === profileId) {
      setCurrentMemberId("");
      setCurrentMemberAddress("");
      setCurrentMemberNickname("");
      setCurrentMemberImage("");
    } else {
      setCurrentMemberId(profileId);
      setCurrentMemberAddress(profileAddress);
      setCurrentMemberNickname(profileNickname);
      setCurrentMemberImage(profileImage);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setIsScrolled(containerRef.current.scrollTop > 0);
      }
    };

    const el = containerRef.current;
    el?.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${gridContainerStyle} ${isScrolled ? maskedContainerStyle : ""}`}
    >
      <ProfileCreateBtn isFull={profileData.isFull} />
      {profileData.members.map((item) => (
        <ProfileItem
          key={item.memberId}
          profileId={item.memberId}
          profileImg={item.profile}
          profileName={item.nickname}
          isSelected={currentMemberId === item.memberId}
          onSelect={handleSelectProfile}
          profileAddress={item.address}
        />
      ))}
    </div>
  );
};

export default ProfileListContent;
