const Products = ({ products }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5 gap-4">
      {products.map((item: any) => (
        <ProductCart key={item._id} item={item} />
      ))}
    </div>
  );
};

const ProductCart = ({ item }: any) => {
  return (
    <div className="w-full bg-white p-2">
      <img
        className="w-full h-[200px] lg:h-[300px] object-cover"
        src={item.thumbnail}
        alt=""
      />
      <div className="py-3">
        <h6 className="font-semibold">₹{item.price}</h6>
        <h5 className="font-semibold text-sm">{item.title}</h5>
        <p className="text-sm">{item.description}</p>
      </div>
    </div>
  );
};

export default Products;
