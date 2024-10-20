import React, { useState, useEffect } from 'react';
import MemberList from '@/components/MemberList';
import { fetchMemberData } from '@/utils/helpers';
import { getMembers } from "@/utils/helpers";



import '@/styles/page.css';
import './globals.css';

export default async function App() {
  const data = await fetchMemberData();
  const members = getMembers(data);


  


  // console.log(data)
  return (
    <main className="main-container">
      <header>
        <h1>LCS Programming Exercise</h1>
      </header>
      <MemberList members={members} />
    </main>
  );
}

