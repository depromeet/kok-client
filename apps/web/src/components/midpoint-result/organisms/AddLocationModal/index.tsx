import { PageModal, Header, Flex, Input } from "@repo/ui/components";
import * as styles from "./style.css";
import XIcon from "@/assets/icons/XIcon";
import { SearchIcon } from "@repo/ui/icons";

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
            <button onClick={onClose}>
              <XIcon />
            </button>
          }
        />

        <Flex as="section" direction="column" className={styles.searchSection}>
          <Input
            variant="search"
            placeholder="지하철역 검색"
            rightElement={
              <button>
                <SearchIcon />
              </button>
            }
          />
        </Flex>
      </div>
    </PageModal>
  );
};

export default AddLocationModal;
