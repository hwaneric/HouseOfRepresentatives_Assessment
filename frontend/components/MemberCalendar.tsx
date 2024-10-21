import { 
  Calendar,
  CalendarCurrentDate,
  CalendarDayView,
  CalendarMonthView,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTodayTrigger,
  CalendarViewTrigger,
  CalendarWeekView,
  CalendarYearView, } from "@/components/ui/full-calendar";

interface IProps {
  member: Record<string, any>;
}

export default function MemberCalendar({ ...props }: any) {
  return (
    <div className="">
      <Calendar
        events={[
          {
            id: '1',
            start: new Date('2024-08-26T09:30:00Z'),
            end: new Date('2024-08-26T14:30:00Z'),
            title: 'event A',
            color: 'pink',
          },
          {
            id: '2',
            start: new Date('2024-08-26T10:00:00Z'),
            end: new Date('2024-08-26T10:30:00Z'),
            title: 'event B',
            color: 'blue',
          },
        ]}
      >
        <div className=" py-6 flex flex-col">
          <div className="flex px-6 items-center gap-2 mb-6">
            <CalendarViewTrigger className="aria-[current=true]:bg-accent" view="day">
              Day
            </CalendarViewTrigger>
            <CalendarViewTrigger
              view="week"
              className="aria-[current=true]:bg-accent"
            >
              Week
            </CalendarViewTrigger>
            <CalendarViewTrigger
              view="month"
              className="aria-[current=true]:bg-accent"
            >
              Month
            </CalendarViewTrigger>
            <CalendarViewTrigger
              view="year"
              className="aria-[current=true]:bg-accent"
            >
              Year
            </CalendarViewTrigger>

            <span className="flex-1" />

            <CalendarCurrentDate />

            <CalendarPrevTrigger>
              {/* <ChevronLeft size={20} /> */}
              <span className="sr-only">Previous</span>
            </CalendarPrevTrigger>

            <CalendarTodayTrigger>Today</CalendarTodayTrigger>

            <CalendarNextTrigger>
              {/* <ChevronRight size={20} /> */}
              <span className="sr-only">Next</span>
            </CalendarNextTrigger>

            {/* <ModeToggle /> */}
          </div>

          <div className="flex-1 overflow-auto px-6 relative">
            <CalendarDayView />
            <CalendarWeekView />
            <CalendarMonthView />
            <CalendarYearView />
          </div>
        </div>
      </Calendar>
    </div>
    
    // <div className="h-1/2">
    //   <Calendar
    //     events={[
    //       {
    //         id: '1',
    //         start: new Date('2024-08-26T09:30:00Z'),
    //         end: new Date('2024-08-26T14:30:00Z'),
    //         title: 'event A',
    //         color: 'pink',
    //       },
    //       {
    //         id: '2',
    //         start: new Date('2024-08-26T10:00:00Z'),
    //         end: new Date('2024-08-26T10:30:00Z'),
    //         title: 'event B',
    //         color: 'blue',
    //       },
    //     ]}
    //   >
    //     <div className="h-96 py-6 flex flex-col">
    //       <div className="flex-1 overflow-auto px-6 relative">
    //         <CalendarWeekView />
    //         <CalendarMonthView />
    //       </div>
    //     </div>
    //   </Calendar>
    // </div>
    
  );
}

// import React, { useMemo } from 'react';

// interface IProps {
//   member: Record<string, any>;
// }

// export default function Calendar ({...props}: any) {
//   // const { view, date, locale, events } = useCalendar();

//   // const weekDates = useMemo(() => {
//   //   const start = startOfWeek(date, { weekStartsOn: 0 });
//   //   const weekDates = [];

//   //   for (let i = 0; i < 7; i++) {
//   //     const day = addDays(start, i);
//   //     const hours = [...Array(24)].map((_, i) => setHours(day, i));
//   //     weekDates.push(hours);
//   //   }

//   //   return weekDates;
//   // }, [date]);
//   const hours = [...Array(24)].map((_, i) => i);
//   const weekDates = [hours, hours, hours, hours, hours, hours, hours];
//   const headerDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   // const headerDays = useMemo(() => {
//   //   const daysOfWeek = [];
//   //   for (let i = 0; i < 7; i++) {
//   //     const result = addDays(startOfWeek(date, { weekStartsOn: 0 }), i);
//   //     daysOfWeek.push(result);
//   //   }
//   //   return daysOfWeek;
//   // }, [date]);

//   return (
//     <div className="flex flex-col relative overflow-auto h-full">
//       <div className="flex sticky top-0 bg-card z-10 border-b mb-3">
//         <div className="w-12"></div>
//         {headerDays.map((date, i) => (
//           <div
//             key={date.toString()}
//             className={
//               'text-center flex-1 gap-1 pb-2 text-sm text-muted-foreground flex items-center justify-center'
//             }
//           >
//             {date}
//             <span
//               className={'h-6 grid place-content-center'}
//             >
//               {date}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="flex flex-1">
//         <div className="w-fit">
//           {/* <TimeTable /> */}
//         </div>
//         <div className="grid grid-cols-7 flex-1">
//           {weekDates.map((hours, i) => {
//             return (
//               <div
//                 className={
//                   'h-full text-sm text-muted-foreground border-l first:border-l-0'
                  
//                 }
//                 key={hours[0].toString()}
//               >
//                 {hours.map((hour) => (
//                   <p key={hour}>{hour}</p>
//                   // <EventGroup
//                   //   key={hour.toString()}
//                   //   hour={hour}
//                   //   events={events}
//                   // />
//                 ))}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );

// }