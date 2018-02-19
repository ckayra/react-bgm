

const StringToNum=(imp) =>{
  let num=imp
  if(num==='') num=0
  return parseFloat( String(num).replace(",", ".") );
}

const StringToImporto = (imp,asZero) =>{
  if (StringToNum(imp)===0){
    if (asZero) return asZero
    return ''
  }
  const num=imp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return  `€ ${num}`;
}

export { StringToImporto,  StringToNum}