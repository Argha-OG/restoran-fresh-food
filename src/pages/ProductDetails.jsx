import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import SEO from '../components/SEO';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, setIsCartOpen } = useCart();

    // Convert id to number since params returns string
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
                <SEO title="Product Not Found" />
                <h2 className="text-3xl font-bold text-slate-800">Product Not Found</h2>
                <Button onClick={() => navigate('/')}>Back to Home</Button>
            </div>
        );
    }

    const handlePurchase = () => {
        addToCart(product);
        setIsCartOpen(true);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <SEO
                title={product.name}
                description={product.description}
                image={product.image}
            />
            <Button variant="ghost" onClick={() => navigate('/')} className="hover:text-green-600 gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Menu
            </Button>

            <div className="grid md:grid-cols-2 gap-12 items-start glass-card p-8 rounded-3xl">
                {/* Image Section */}
                <div className="aspect-square rounded-2xl overflow-hidden bg-white/50 border border-white/40 shadow-inner group relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-800 font-bold px-4 py-2 rounded-full shadow-lg">
                        RM {product.price.toFixed(2)}
                    </div>
                </div>

                {/* Details Section */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full tracking-wider">
                                {product.category}
                            </span>
                            {product.popular && (
                                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase rounded-full tracking-wider flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-current" /> Popular
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight">
                            {product.name}
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            {product.description}
                        </p>

                        <div className="text-3xl font-black text-green-600">
                            RM {product.price.toFixed(2)}
                        </div>
                    </div>

                    <div className="h-px bg-slate-200" />

                    <div className="flex gap-4">
                        <Button
                            size="lg"
                            className="flex-1 rounded-xl bg-slate-900 hover:bg-slate-800 h-14 text-lg"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </Button>
                        <Button
                            size="lg"
                            className="flex-1 rounded-xl bg-green-600 hover:bg-green-700 h-14 text-lg shadow-xl shadow-green-600/20"
                            onClick={handlePurchase}
                        >
                            Purchase Now
                        </Button>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-slate-800 mb-2">Delivery Information</h4>
                        <p className="text-sm text-slate-500">
                            Available for immediate delivery. Order now and receive it hot within 30-45 minutes depending on your location in Seri Kembangan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
