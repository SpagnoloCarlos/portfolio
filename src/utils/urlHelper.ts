import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const staticAsset = (path: string) =>
  `${publicRuntimeConfig.BASE_PATH || ""}/static/${path}`;
