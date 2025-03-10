export const getCenterMarkerElement = () => {
  const element = document.createElement("div");
  element.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
      <g filter="url(#filter0_d_315_55763)">
        <circle cx="20.5" cy="20.5" r="4.5" fill="#313131" />
        <circle cx="20.5" cy="20.5" r="4.5" stroke="#F6F6F6" stroke-width="2" />
      </g>
      <defs>
        <filter id="filter0_d_315_55763" x="0" y="0" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_315_55763" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.819608 0 0 0 0 0.819608 0 0 0 0 0.819608 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_315_55763" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_315_55763" result="shape" />
        </filter>
      </defs>
    </svg>
  `;
  return element;
};
