"use client";

import { IMemberProfile } from "@/api/types/profile-list/index.types";
import ProfileItem from "../../molecules/profile-item/ProfileItem";
import { gridContainerStyle, maskedContainerStyle } from "./style.css";
import { useState, useRef, useEffect } from "react";

interface IProfileListContentProps {
  profileData: IMemberProfile[];
}

const ProfileListContent = ({ profileData }: IProfileListContentProps) => {
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(
    null
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelectProfile = (profileId: string) => {
    setSelectedProfileId(profileId);
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
      {profileData.map((item) => (
        <ProfileItem
          key={item.memberId}
          profileId={item.memberId}
          profileImg={item.profile}
          profileName={item.nickname}
          isSelected={selectedProfileId === item.memberId}
          onSelect={handleSelectProfile}
        />
      ))}
    </div>
  );
};

export default ProfileListContent;
