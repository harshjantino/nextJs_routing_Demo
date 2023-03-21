import React from 'react'

// Define an interface for the props that the component will receive
interface PageProps {
  params: {
    productId: number;
  }
}

// Define the component as a function that takes in props of type PageProps
const Page = ({params}: PageProps) => {
  // Destructure the productId property from the params object
  const { productId } = params;

  // Render the component
  return (
    <div>
      Details About the Product {productId}
    </div>
  )
}

// Export the component as the default export
export default Page;
