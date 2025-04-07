"use client";

import { usePolygon } from "./hooks/usePolygon";
import { useCenterMarker, CenterMarkerProps } from "./hooks/useCenterMarker";
import { useDotMarkers, DotMarkerProps } from "./hooks/useDotMarker";
import { useProfileMarker, ProfileMarkerProps } from "./hooks/useProfileMarker";

export const MapPolygon = ({
  path,
}: {
  path: { lat: number; lng: number }[];
}) => {
  usePolygon(path);
  return null;
};

export const MapCenterMarker = ({
  markerData,
}: {
  markerData: CenterMarkerProps;
}) => {
  useCenterMarker(markerData);
  return null;
};

export const MapProfileMarker = ({
  markerData,
}: {
  markerData: ProfileMarkerProps;
}) => {
  useProfileMarker(markerData);
  return null;
};

export const MapDotMarkers = ({ markers }: { markers: DotMarkerProps[] }) => {
  useDotMarkers(markers);
  return null;
};

export const MapOverlay = ({
  centerMarker,
  profileMarker,
  dotMarkers = [],
  polygon = [],
}: {
  centerMarker?: CenterMarkerProps;
  profileMarker?: ProfileMarkerProps;
  dotMarkers?: DotMarkerProps[];
  polygon?: { lat: number; lng: number }[];
}) => {
  return (
    <>
      {polygon.length >= 3 && <MapPolygon path={polygon} />}
      {centerMarker && <MapCenterMarker markerData={centerMarker} />}
      {profileMarker && <MapProfileMarker markerData={profileMarker} />}
      {dotMarkers.length > 0 && <MapDotMarkers markers={dotMarkers} />}
    </>
  );
};

export default MapOverlay;
