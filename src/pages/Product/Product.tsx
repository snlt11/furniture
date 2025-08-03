import { useState, useMemo } from "react";
import ProductCard from "@/components/Products/ProductCard"
import ProductFilter from "@/components/Products/ProductFilter"
import { filterList, products } from "@/data/products"
import Pagination from "@/components/Products/Pagination"

function Product() {
  const [filters, setFilters] = useState<{ categories: string[]; types: string[] }>({ categories: [], types: [] });

  const filteredProducts = useMemo(() => {
    if (filters.categories.length === 0 && filters.types.length === 0) {
      return products;
    }

    return products.filter((product) => {
      const categoryMatch = filters.categories.length === 0 || 
        filters.categories.includes(product.categoryId);
      const typeMatch = filters.types.length === 0 || 
        filters.types.includes(product.typeId);
      
      return categoryMatch && typeMatch;
    });
  }, [filters]);

  const handleFilterChange = (newFilters: { categories: string[]; types: string[] }) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto">
      <section className="flex flex-col lg:flex-row">
        <section className="my-8 ml-4 w-full lg:w-1/5 lg:ml-0">
          <ProductFilter 
            filterList={filterList} 
            onFilterChange={handleFilterChange}
          />
        </section>
        <section className="w-full lg:w-4/5 my-8 ml-4 lg:ml-0">
          <h1 className="text-2xl font-bold mb-2">
            All Products ({filteredProducts.length})
          </h1>
          <ProductCard products={filteredProducts} />
        </section>
      </section>
    </div>
  ) 
}

export default Product