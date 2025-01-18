export default async function ProductDetails({ params }) {
    const { productid, reviewsid } = await params; // Await the params object
    return <h1>Review: {reviewsid} Product: {productid}</h1>;
}