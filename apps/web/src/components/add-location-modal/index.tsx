"use client";

import { PageModal, Header } from "@repo/ui/components";
import * as styles from "./style.css";
import XIcon from "@/assets/icons/XIcon";
import ContextProvider from "./molecules/ContextProvider";
import ModalBody from "./templates/ModalBody";

interface AddLocationModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const AddLocationModal = ({ isOpen, onClose }: AddLocationModalProps) => {
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

        <ContextProvider>
          <ModalBody />
        </ContextProvider>
      </div>
    </PageModal>
  );
};

export default AddLocationModal;
