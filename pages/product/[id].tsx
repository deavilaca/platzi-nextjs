import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter();
  const [productLIst,setProductList] = useState<TProduct>()
let data;


useEffect(()=>{
  window
  .fetch('/api/avo'+query.id)
    .then((response) => response.json())
    .then(({data,length})=>{
      setProductList(data)
      })
  },[])

  return (  
    <section>
      <h1>Página producto: {data.name}</h1>
    </section>
  )
}

export default ProductPage
