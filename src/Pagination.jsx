
import { useEffect, useState } from 'react';
import './App.css'

function Pagination() {
  const[products,SetProducts]=useState([])
  const[pages,setPages]=useState(1);
const fetchProduct=async()=>{
  const res=await fetch(`https://dummyjson.com/products?limit=100`)
const data=await res.json();
if(data && data.products)
SetProducts(data.products)
}
console.log(products);
useEffect(()=>{
  fetchProduct()
},[])
const selectpageHandel=(selectedPage)=>{
  if(selectedPage>=1 && selectedPage<=products.length /10 && selectedPage!=pages)
  setPages(selectedPage)
}
  
  return (
   <>
<div>
  { products.length>0 && <div className='products'>
{products.slice(pages*10-10,pages*10).map((prod, index)=>{
  return(
    <span className='product__single' key={index}>
      <img  src={prod.thumbnail} alt={prod.title}/>
    <p>{prod.title}</p>
    </span>
  )
  
})}
  </div>}
  {
    products.length>0 && 
    <div className='pagination'>
    
    <span onClick={() => selectpageHandel(pages - 1)} className={pages > 1 ? "" : "pagination__disable"}>◀</span>
    {
      [...Array(products.length/10)].map((_,i)=>{
        return <span  className={pages===i+1? "pagination_selected":''} onClick={()=> selectpageHandel(i+1)} key={i}>{i+1}</span>
      })
      }
    
      <span onClick={() => selectpageHandel(pages + 1)} className={pages < products.length / 10 ? "" : "pagination__disable"}>▶</span>

    </div>
  }
</div>
   </>
  )
}

export default Pagination
