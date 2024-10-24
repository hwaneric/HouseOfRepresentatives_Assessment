import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
} from "@/components/ui/typography";
import { BUILDINGS, BUILDING_ACRONYMS } from "@/utils/constants";
import React, { useState } from "react";
import Image from "next/image";

import "@/styles/MemberProfile.css";
import { getMemberInfo } from "@/utils/helpers";

interface IProps {
  member: Record<string, any>;
}

export default function MemberProfile({ ...props }: IProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const member = getMemberInfo(props.member);
  const name = member?.firstname + " " + member?.lastname;
  const officeBuildingAcronym = member?.[
    "office-building"
  ] as BUILDING_ACRONYMS;
  const officeBuilding = BUILDINGS?.[officeBuildingAcronym];

  if (!member) {
    return null;
  }

  return (
    <div className="member-profile">
      <Image
        className="m-2 rounded-sm"
        alt={"Image of " + name}
        src={`https://clerk.house.gov/images/members/${member?.bioguideID}.jpg`}
        onLoad={() => setImageLoaded(true)}
        width={200}
        height={250}
      />

      {/* TODO: Add skeleton placeholder for image as it loads */}
      {imageLoaded ? null : <div>Loading...</div>}

      <div className="ml-4 flex flex-col gap-3">
        <div className="flex flex-row items-end gap-10">
          <TypographyH1 className="">{name}</TypographyH1>

          <TypographyH3>{member.state["state-fullname"]}</TypographyH3>
          <TypographyH3>{member.party}</TypographyH3>
        </div>
        <TypographyH4 className="">
          District: {props.member.statedistrict}
        </TypographyH4>
        <TypographyH4 className="">
          Office Building: {officeBuilding}
        </TypographyH4>

        <TypographyH4 className="">
          Office Room: {member["office-room"]}
        </TypographyH4>
        <TypographyH4 className="">Phone: {member.phone}</TypographyH4>
      </div>

      {/* TODO Add Calendar */}
    </div>
  );
}
