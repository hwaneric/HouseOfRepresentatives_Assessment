"use client"

import React, { useState, useEffect } from "react";
import { getMembers, getMemberName, sortAlphabetically, getMemberOfficialName, filterBySearchQuery } from "@/utils/helpers";
import { PAGE_LEN } from "@/utils/constants";
import MemberProfile from "@/components/MemberProfile";
import { TypographyP } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

import "@/styles/MemberList.css";
import Pagination from "./Pagination";
import { Input } from "./ui/input";

interface IProps {
  members: Record<string, any>;
}

export default function MemberList({ ...props }: IProps) {
  const [curPageMembers, setCurPageMembers] = useState<Record<string, any>[]>([]);
  const [curPageIndex, setCurPageIndex] = useState<number>(0);
  const [isAlphabeticalSort, setIsAlphabeticalSort] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredMembers, setFilteredMembers] = useState<Record<string, any>[]>([]);

  const members = props.members;

  // Sort data alphabetically or reverse alphabetically
  useEffect(() => {
    const sortedMembers = [...filteredMembers].sort(
      (a, b) => isAlphabeticalSort ? sortAlphabetically(a, b) : -1 * sortAlphabetically(a, b)
    )
    console.log(sortedMembers);
    setFilteredMembers(sortedMembers);
  }, [isAlphabeticalSort]);

  // Handle Search
  useEffect(() => {
    // Reset filtered members
    if (searchQuery === "") {
      members.sort((a: Record<string, any>, b: Record<string, any>) => 
        isAlphabeticalSort ? sortAlphabetically(a, b) : -1 * sortAlphabetically(a, b)
      )
      setFilteredMembers(members as Record<string, any>[]);
      setCurPageIndex(0);
      return;
    }

    setFilteredMembers(
      members.filter((member: any) => {
        return filterBySearchQuery(member, searchQuery);
      })
    )
    setCurPageIndex(0);
  }, [searchQuery]);

  return (
    <div className="member-list">
      <div className="flex flex-row items-center justify-between mb-6">
        <Pagination numMembers={filteredMembers.length} curPageIndex={curPageIndex} setCurPageIndex={setCurPageIndex}/>
        <Input 
          className="w-1/4 border-slate-500" 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search"
        />
        <Button className="" onClick={() => setIsAlphabeticalSort(!isAlphabeticalSort)}>
          {isAlphabeticalSort ? "A-Z" : "Z-A"}
        </Button>
      </div>
      
      {filteredMembers.slice(curPageIndex * PAGE_LEN, (curPageIndex + 1) * PAGE_LEN).map(
        (member: any) => (
          // Display member profile if member name is not empty
          getMemberName(member) && <MemberProfile key={member.statedistrict} member={member} />
        )
      )}
      {/* {curPageMembers.map(
        (member: any) => (
          // Display member profile if member name is not empty
          getMemberName(member) && <MemberProfile key={member.statedistrict} member={member} />
        )
      )} */}
      <div className="mb-6">
        <Pagination  numMembers={filteredMembers.length} curPageIndex={curPageIndex} setCurPageIndex={setCurPageIndex}/>
      </div>
      
    </div>
     
  );
}
