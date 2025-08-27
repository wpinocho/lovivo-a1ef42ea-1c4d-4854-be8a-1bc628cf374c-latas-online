import { useState, useMemo } from "react";
import { Search, ShoppingBag, Star, TrendingUp } from "lucide-react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CartProvider } from "@/contexts/CartContext";
import { products } from "@/data/products";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log('Index page rendered with filters:', {
    selectedCategory,
    selectedBrand,
    priceRange,
    searchTerm
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
      const matchesBrand = selectedBrand === "Todos" || product.brand === selectedBrand;
      const matchesPrice = product.price <= priceRange[1];
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
    });
  }, [selectedCategory, selectedBrand, priceRange, searchTerm]);

  const featuredProducts = products.filter(product => product.tags.includes('popular')).slice(0, 3);
  const onSaleProducts = products.filter(product => product.originalPrice).slice(0, 3);

  const clearFilters = () => {
    setSelectedCategory("Todos");
    setSelectedBrand("Todos");
    setPriceRange([0, 10]);
    setSearchTerm("");
    console.log('Filters cleared');
  };

  return (
    <CartProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-col">
              {/* Header */}
              <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
                <div className="flex h-16 items-center gap-4 px-4">
                  <SidebarTrigger />
                  <div className="flex-1 flex items-center gap-4">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                </div>
              </header>

              <main className="flex-1 p-6">
                {/* Hero Section */}
                <section className="mb-12">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
                    <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h1 className="text-4xl font-bold mb-4">Bienvenido a CanStore</h1>
                    <p className="text-xl text-muted-foreground mb-6">
                      La mejor selección de bebidas en lata para todos los gustos
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Badge variant="secondary" className="text-sm px-3 py-1">
                        <Star className="h-4 w-4 mr-1" />
                        Productos de calidad
                      </Badge>
                      <Badge variant="secondary" className="text-sm px-3 py-1">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        Mejores precios
                      </Badge>
                    </div>
                  </div>
                </section>

                {/* Featured Products */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Productos Destacados</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>

                {/* On Sale Products */}
                {onSaleProducts.length > 0 && (
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Ofertas Especiales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {onSaleProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </section>
                )}

                {/* Products Section */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Todos los Productos</h2>
                    <Badge variant="outline">
                      {filteredProducts.length} productos
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                      <ProductFilters
                        selectedCategory={selectedCategory}
                        selectedBrand={selectedBrand}
                        priceRange={priceRange}
                        onCategoryChange={setSelectedCategory}
                        onBrandChange={setSelectedBrand}
                        onPriceRangeChange={setPriceRange}
                        onClearFilters={clearFilters}
                      />
                    </div>

                    {/* Products Grid */}
                    <div className="lg:col-span-3">
                      {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                          {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                          ))}
                        </div>
                      ) : (
                        <Card>
                          <CardContent className="flex flex-col items-center justify-center py-12">
                            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                            <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
                            <p className="text-muted-foreground text-center mb-4">
                              Intenta ajustar los filtros o buscar con otros términos
                            </p>
                            <Button onClick={clearFilters} variant="outline">
                              Limpiar filtros
                            </Button>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </CartProvider>
  );
};

export default Index;