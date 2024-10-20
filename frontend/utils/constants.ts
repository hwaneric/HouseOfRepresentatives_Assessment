export const MEMBER_API = process.env.API_URL;

export const BUILDINGS = {
  "CHOB":"Cannon House Office Building",
  "LHOB":"Longworth House Office Building",
  "RHOB":"Rayburn House Office Building"} as const;

export type BUILDING_ACRONYMS = keyof typeof BUILDINGS;