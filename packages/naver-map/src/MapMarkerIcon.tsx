interface MapMarkerIconProps {
  borderColor: string;
}

export const createMapMarkerIcon = ({ borderColor }: MapMarkerIconProps) => {
  const markerContainer = document.createElement("div");
  markerContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  `;

  const markerElement = document.createElement("div");
  markerElement.style.cssText = `
    width: 37px;
    height: 37px;
    border-radius: 50px;
    border: 2.5px solid ${borderColor};
    cursor: pointer;
    margin-bottom: -2px;
  `;

  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.style.cssText = `
    margin-top: -1px;
    display: block;
  `;
  svgElement.setAttribute("width", "15");
  svgElement.setAttribute("height", "7");
  svgElement.setAttribute("viewBox", "0 0 15 7");
  svgElement.setAttribute("fill", "none");

  const pathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathElement.setAttribute(
    "d",
    "M7.85889 1.41349L14.9447 0.148588L9.03986 6.05346C8.38763 6.70569 7.33015 6.70569 6.67791 6.05346L0.773043 0.148588L7.85889 1.41349Z"
  );
  pathElement.setAttribute("fill", borderColor);

  svgElement.appendChild(pathElement);
  markerContainer.appendChild(markerElement);
  markerContainer.appendChild(svgElement);

  return markerContainer;
};
