

const StringToNum=(imp) =>{
  let num=imp
  if(num==='') num=0
  return parseFloat( String(num).replace(",", ".") );
}

const StringToImporto = (imp,asZero) =>{
  if (imp===undefined) return ''
  if (StringToNum(imp)===0){
    if (asZero) return asZero
    return ''
  }
  const num=imp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return  `€ ${num}`;
}

const senzaDecimali=(val) =>
  parseInt(StringToNum(val),10)


export { StringToImporto,  StringToNum, senzaDecimali}
