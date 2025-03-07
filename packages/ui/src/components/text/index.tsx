import { HTMLAttributes, PropsWithChildren, Ref } from "react";
import { textRecipe } from "./style.css";
import { veMerge } from "../../utils";

type TextElement = "span" | "p";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: TextElement;
  ref?: Ref<HTMLParagraphElement>;
}

/*
  NOTE:
  - p, span 만 대응
  : label은 사용할 일이 적을 것 같고, div에 텍스트를 넣어 사용하는 것은 시멘틱 태그에 어긋나는 면이 있다고 생각
  - heading 태그들에 대해서 대응해야할까?
  : 현 시스템에 사용이 적을뿐더러, typography 토큰을 만들어둔다면 대체 가능하다고 생각
*/
export const Text = ({
  as: Tag = "span",
  children,
  ref,
  className,
  ...props
}: PropsWithChildren<TextProps>) => {
  return (
    <Tag className={veMerge(textRecipe({}), className)} ref={ref} {...props}>
      {children}
    </Tag>
  );
};
