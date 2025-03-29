"use client";

import { PageModal } from "@repo/ui/components";
import * as styles from "./style.css";
import AddLocation from "./pages/AddLocation";
import ContextProvider from "./molecules/ContextProvider";

interface AddLocationModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const AddLocationModal = ({ isOpen, onClose }: AddLocationModalProps) => {
  return (
    <PageModal isOpen={isOpen}>
      <div className={styles.container}>
        <ContextProvider>
          <AddLocation onClose={onClose} />
        </ContextProvider>
      </div>
    </PageModal>
  );
};

export default AddLocationModal;
