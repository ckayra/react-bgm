// const FormatDate=(date)=>{
//   const d= new Date(date)
//   const day = d.getDate();
//   const month = d.getMonth();
//   const year = d.getFullYear();
//   return day + '/' + month+1 + '/' + year;
// }
const FormatDate=(date)=>{
  let d=date;
  if (date.length===5)  d='0'+d;

  const day = d.substring(0,2);
  const month = d.substring(2,4);
  const year = d.substring(4);
   return day + '/' + month + '/' + year;

}

export const data6ToInputFormat=(date)=>{
  if (date===undefined) return date

  if (date==="") return date
  let d=date;
  if (date.length===5)  d='0'+d;
  const day = d.substring(0,2);
  const month = d.substring(2,4);
  const year = d.substring(4);
  // YYYY-MM-DD
  console.log("DATA INIZ:",20+year + '-' + month + '-' + day )

 return 20+year + '-' + month + '-' + day;
}

export default FormatDate
