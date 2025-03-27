"use client";

import { PageModal, Header } from "@repo/ui/components";
import * as styles from "./style.css";
import XIcon from "@/assets/icons/XIcon";
import SearchList from "./organisms/SearchList";
import { useState } from "react";
import SearchResultMap from "./organisms/SearchResultMap";

interface AddLocationModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export interface StationInfo {
  id: number;
  name: string;
  lines: string[];
}

const AddLocationModal = ({ isOpen, onClose }: AddLocationModalProps) => {
  const [location, setLocation] = useState<StationInfo | null>(null);

  const handleSelectSearchItem = (item: StationInfo) => {
    setLocation(item);
  };

  return (
    <PageModal isOpen={isOpen}>
      <div className={styles.container}>
        <Header
          title="만날 역 추가"
          rightElement={
            <button
              onClick={onClose}
              style={{ width: "fit-content", height: "32px" }}
            >
              <XIcon />
            </button>
          }
        />

        {location ? (
          <SearchResultMap />
        ) : (
          <SearchList onSelect={handleSelectSearchItem} />
        )}
      </div>
    </PageModal>
  );
};

export default AddLocationModal;
