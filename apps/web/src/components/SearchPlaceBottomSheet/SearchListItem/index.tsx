import { Flex, Text } from "@repo/ui/components";
import { Place } from "../types";
import * as Style from "./style.css";
import { classMerge } from "node_modules/@repo/ui/src/utils";

interface SearchListItemProps extends Place {
  isLast?: boolean;
  onSelect: (place: Place) => void;
}

const SearchListItem = ({
  title,
  address,
  isLast = false,
  onSelect,
  mapy,
  mapx,
}: SearchListItemProps) => {
  const parts = title.split(/(<b>.*?<\/b>)/g);

  return (
    <li className={classMerge(Style.listItem, isLast ? "" : Style.divider)}>
      <Flex
        as="button"
        direction="column"
        gap={12}
        className={Style.button}
        onClick={() => onSelect({ title, address, mapy, mapx })}
      >
        <Text as="p" variant="body3" className={Style.title}>
          {parts.map((part, index) => {
            if (part.startsWith("<b>") && part.endsWith("</b>")) {
              return (
                <Text key={index} className={Style.searchTarget}>
                  {part.replace(/<\/?b>/gi, "")}
                </Text>
              );
            }
            return part;
          })}
        </Text>

        <Text variant="caption" className={Style.address}>
          {address}
        </Text>
      </Flex>
    </li>
  );
};

export default SearchListItem;
