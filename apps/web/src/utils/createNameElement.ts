export interface NameElementOptions {
  displayName: string;
  isVisible?: boolean;
}

export function createNameElement({
  displayName,
  isVisible = false,
}: NameElementOptions): HTMLDivElement {
  const nameElement = document.createElement("div");
  nameElement.textContent = displayName;
  nameElement.style.position = "absolute";
  nameElement.style.top = "100%";
  nameElement.style.left = "50%";
  nameElement.style.transform = "translateX(-50%)";
  nameElement.style.color = "#1D1D1D";
  nameElement.style.webkitTextStrokeWidth = "0.1px";
  nameElement.style.webkitTextStrokeColor = "#FFF";
  nameElement.style.fontFamily = "Pretendard";
  nameElement.style.fontSize = "16px";
  nameElement.style.fontStyle = "normal";
  nameElement.style.fontWeight = "700";
  nameElement.style.lineHeight = "24px";
  nameElement.style.whiteSpace = "nowrap";
  nameElement.style.display = isVisible ? "block" : "none";

  return nameElement;
}
