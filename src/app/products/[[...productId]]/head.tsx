import React from 'react'


interface PageProps {
    params: {
      productId: number;
    }
  }

const head = ({params}: PageProps) => {
    const { productId } = params;
  return (
    <>
    <title>`Product: ${productId}`</title>
    </>
  )
}

export default head