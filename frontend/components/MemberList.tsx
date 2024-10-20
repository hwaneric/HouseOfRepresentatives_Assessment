"use client"

import React, { useState, useEffect } from "react";
import { getMembers, getMemberName } from "@/utils/helpers";
import MemberProfile from "@/components/MemberProfile";

import "@/styles/MemberList.css";

interface IProps {
  members: Record<string, any>;
}

export default function MemberList({ ...props }: IProps) {
  const [curPageMembers, setCurPageMembers] = useState<Record<string, any>[]>([]);
  const members = props.members;
  // console.log(members)

  members.sort((a, b) => {
    if (a["member-info"]["sort-name"] < b["member-info"]["sort-name"]) return -1
    if (a["member-info"]["sort-name"] > b["member-info"]["sort-name"]) return 1
    return 0
  })
  useEffect(() => {
    setCurPageMembers(members.slice(0, 20))
  }, [])


  return (
    <div className="member-list">
      {curPageMembers.map(
        (member: any) => (
          <MemberProfile key={member.statedistrict} member={member} />
        )
      )}
    </div>
     
  );
}
