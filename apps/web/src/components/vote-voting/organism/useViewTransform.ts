import { animate, delay } from "@repo/motion";
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
    new Array(listLength + 1).fill(0).forEach((_, index) => {
      if (index === focusedCarouselIndex) {
        return;
      } else if (index < focusedCarouselIndex) {
        animate(
          `.card-${index}`,
          {
            x: window.innerWidth * (focusedCarouselIndex - index),
          },
          { ease: [0, 0, 1, 1], duration: 0.3 }
        );
      } else if (index > focusedCarouselIndex) {
        animate(
          `.card-${index}`,
          {
            x: window.innerWidth * (focusedCarouselIndex - index),
          },
          { ease: [0, 0, 1, 1], duration: 0.3 }
        );
      }
    });
  }, [focusedCarouselIndex, listLength]);

  const listToCard = useCallback(async () => {
    const timeout = setTimeout(() => {
      console.log("called");
      new Array(listLength + 1).fill(0).forEach((_, index) => {
        if (index === focusedCarouselIndex) {
          return;
        } else if (index < focusedCarouselIndex) {
          animate(
            `.card-${index}`,
            {
              x: 0,
            },
            { ease: [0, 0, 1, 1], duration: 0.3 }
          );
        } else if (index > focusedCarouselIndex) {
          animate(
            `.card-${index}`,
            {
              x: 0,
            },
            { ease: [0, 0, 1, 1], duration: 0.3 }
          );
        }
      });
    }, 1100);

    return () => clearTimeout(timeout);
  }, [focusedCarouselIndex, listLength]);

  useEffect(() => {
    if (view === "list") {
      cardToList();
    } else {
      listToCard();
    }
  }, [cardToList, listToCard, view]);
}
