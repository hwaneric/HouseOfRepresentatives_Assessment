import React, { useState, useEffect } from "react";
import { PAGE_LEN } from "@/utils/constants";
import { TypographyP } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

import "@/styles/Pagination.css";

interface IProps {
  numMembers: number;
  curPageIndex: number;
  setCurPageIndex: (index: number) => void;
}

export default function MemberList({ ...props }: IProps) {
  const { numMembers, curPageIndex, setCurPageIndex } = props;
  console.log(numMembers, curPageIndex)
  const [pageArray, setPageArray] = useState<(number | string)[]>([]);

  // Define page buttons to display
  // Displays page 1, 3 buttons prior to current page, current page, 3 buttons after current page, and final page
  useEffect(() => {
    if (numMembers === 0) {
      setPageArray([]);
      return;
    }
    const maxPage = Math.ceil(numMembers / 20);
    const curPage = curPageIndex + 1; // Convert to 1-indexed page number
  
    const pageIndexes = [
      curPage - 3,
      curPage - 2,
      curPage - 1,
      curPage,
      curPage + 1,
      curPage + 2,
      curPage + 3,
    ];
  
    // Filter and keep only valid page numbers
    const validIndexes = pageIndexes.filter((index) => index >= 1 && index <= maxPage);
    validIndexes.push(1, maxPage); // Always include 1 and maxPage

    // Remove duplicates and sort
    const uniqueIndexes = Array.from(new Set(validIndexes)).sort((a, b) => a - b);
    console.log(uniqueIndexes)
  
    // Build out final array to display
    const finalArray: (number | string)[] = []; 
    for (let i = 0; i < uniqueIndexes.length; i++) {
      if (i > 0 && uniqueIndexes[i] !== uniqueIndexes[i - 1] + 1) {
        finalArray.push("..."); // Add "..." if there is a gap between page numbers
      } 
      finalArray.push(uniqueIndexes[i]);
    }

    setPageArray(finalArray);
  }, [curPageIndex, numMembers]);


  return (
    <div className="pagination">
      
      <TypographyP>
        Showing {Math.min(numMembers, curPageIndex * PAGE_LEN + 1)} - {Math.min((curPageIndex + 1) * PAGE_LEN, numMembers)} of {numMembers} members
      </TypographyP>

      {/* Pagination Buttons */}
      <div className="flex flex-row gap-4">
        {pageArray.map((page, index) => {
          if (page === "...") {
            return (
              <TypographyP key={index}>...</TypographyP>
            )
          }

          // Page is current page
          if (page as number - 1 == curPageIndex) {
            return (
              <Button className="h-8 w-8 rounded-full" key={index}>
                {page}
              </Button>
            )
          }
          
          // Page is not current page
          return (
            <Button className="h-8 w-8 rounded-full bg-white text-slate-800 hover:bg-slate-300" key={index} onClick={() => setCurPageIndex(page as number - 1)}>
              {page}
            </Button>
          )
        } 
        )}
      </div>

    </div>
     
  );
}
