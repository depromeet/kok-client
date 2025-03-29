import XIcon from "@/assets/icons/XIcon";
import { Header } from "@repo/ui/components";
import SelectStation from "../templates/SelectStation";
import { useSelectFlag } from "../contexts/selected-flag";
import CompleteSelection from "../templates/CompleteSelection";

interface AddLocationProps {
  onClose: VoidFunction;
}

const AddLocation = ({ onClose }: AddLocationProps) => {
  const { selectFlag } = useSelectFlag();
  return selectFlag ? (
    <CompleteSelection onClose={onClose} />
  ) : (
    <>
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
      <SelectStation />
    </>
  );
};

export default AddLocation;
