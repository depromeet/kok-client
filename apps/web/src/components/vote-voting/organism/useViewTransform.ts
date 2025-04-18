import { animate } from "@repo/motion";
import { useCallback, useEffect } from "react";

interface Props {
  listLength: number;
  focusedCarouselIndex: number;
  view: "card" | "list";
}

export function useViewTransform({
  listLength,
  view,
  focusedCarouselIndex,
}: Props) {
  const cardToList = useCallback(() => {
    new Array(listLength + 2).fill(0).forEach((_, index) => {
      const width = Math.min(600, window.innerWidth);
      if (index === focusedCarouselIndex) {
        return;
      }
      animate(
        `.card-${index}`,
        {
          x: width * (focusedCarouselIndex - index),
        },
        { ease: [0, 0, 1, 1], duration: 0.3 }
      );
    });
  }, [focusedCarouselIndex, listLength]);

  const listToCard = useCallback(async () => {
    const timeout = setTimeout(() => {
      new Array(listLength + 2).fill(0).forEach((_, index) => {
        animate(
          `.card-${index}`,
          {
            x: 0,
          },
          { ease: [0, 0, 1, 1], duration: 0.3 }
        );
      });
    }, 1100);

    return () => clearTimeout(timeout);
  }, [listLength]);

  useEffect(() => {
    if (view === "list") {
      cardToList();
    } else {
      listToCard();
    }
  }, [cardToList, listToCard, view]);
}
