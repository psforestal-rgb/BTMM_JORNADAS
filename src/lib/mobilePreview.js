export const MOBILE_PREVIEW_WIDTH = 390;
export const MOBILE_PREVIEW_HEIGHT = 844;
export const MOBILE_PREVIEW_PARAM = "mobile-preview";

export function isMobilePreviewLocation(locationLike = window.location) {
  return new URLSearchParams(locationLike.search).get(MOBILE_PREVIEW_PARAM) === "1";
}

export function mobilePreviewUrl(locationLike = window.location) {
  const url = new URL(locationLike.href);
  url.searchParams.set(MOBILE_PREVIEW_PARAM, "1");
  return url.toString();
}
