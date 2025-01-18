// export default async function ProductDetails({ params }) {
//     const productid = params.productid; // Access the productid directly
//     return <h1>Product Details: {productid}</h1>;
// }

export default async function ProductDetails({ params }) {
    const { productid } = await params; // Await the params object
    return <h1>Product Details: {productid}</h1>;
}
