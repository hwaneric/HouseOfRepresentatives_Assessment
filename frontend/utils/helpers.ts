import { MEMBER_API } from "./constants";

/**
 * Returns Member data from API
 * @returns {Promise<Record<string, any>}
 */
export const fetchMemberData = async (): Promise<Record<string, any>>  => {
  const res = await fetch(MEMBER_API);

  if (!res.ok) {
    throw new Error('Unable to fetch member data');
  }

  return res.json() as Record<string, any>;
}

/**
 * Parses API response and returns a list of members
 * @param data - API response
 * @returns {Record<string ,any>[]}
 */
export const getMembers = (data: Record<string, any>): Record<string, any>[] => {
  // Remove any members with empty names
  const members = data?.MemberData?.members?.member.filter(
    (member: Record<string, any>) => getMemberName(member) != ''
  );

  return members || [];
}

/**
 * Parses Member data and returns the member's name
 * @param member
 * @returns {string}
 */
export const getMemberName = (member: Record<string, any>): string => {
  return member?.['member-info']?.namelist || '';
};

/**
 * Parses Member data and returns the member's official name
 * @param member
 * @returns {string}
 */
export const getMemberOfficialName = (member: Record<string, any>): string => {
  return member?.['member-info']['official-name'] || '';
};

export const getMemberState = (member: Record<string, any>): string => {
  return member?.['member-info']?.state['state-fullname'] || '';
};

/**
 * Sorts members alphabetically by name
 * @param a
 * @param b
 * @returns {number}
 */
export const sortAlphabetically = (a: Record<string, any>, b: Record<string, any>) => {
  const nameA = a["member-info"]["sort-name"];
  const nameB = b["member-info"]["sort-name"];
  
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  
  return 0;  // When names are equal
}

/**
 * Filters members by name and state using a search query
 * @param member
  * @param searchQuery
 * @returns {boolean}
 */
export const filterBySearchQuery = (member: Record<string, any>, searchQuery: string): boolean => {
  const name = getMemberOfficialName(member).toLowerCase();
  const state = getMemberState(member).toLowerCase();
  return name.includes(searchQuery.toLowerCase()) || state.includes(searchQuery.toLowerCase());
};

