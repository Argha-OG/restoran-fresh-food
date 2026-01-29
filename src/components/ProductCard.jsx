import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onAdd }) => {
    const navigate = useNavigate();
    const { setIsCartOpen } = useCart();

    const handleBuyNow = (e) => {
        e.stopPropagation();
        onAdd(product);
        setIsCartOpen(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300"
        >
            <div
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
            >
                <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-3 right-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                    <Button
                        size="icon"
                        className="rounded-full bg-white text-green-600 hover:bg-green-50 shadow-lg"
                        onClick={(e) => { e.stopPropagation(); onAdd(product); }}
                    >
                        <Plus className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                    <Link to={`/product/${product.id}`} className="font-bold text-lg text-slate-800 group-hover:text-green-700 transition-colors line-clamp-1">
                        {product.name}
                    </Link>
                    <span className="font-bold text-green-700 bg-green-50 px-2 py-1 rounded-lg text-xs whitespace-nowrap shadow-sm border border-green-100">
                        RM {product.price.toFixed(2)}
                    </span>
                </div>
                <p className="text-slate-500 text-xs line-clamp-2 min-h-[2.5em]">{product.description}</p>

                <div className="grid grid-cols-2 gap-2 pt-2">
                    <Button
                        className="rounded-xl bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/10 transition-all duration-300 h-10 text-xs md:text-sm"
                        onClick={() => onAdd(product)}
                    >
                        Add to Cart
                    </Button>
                    <Button
                        className="rounded-xl bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20 transition-all duration-300 h-10 text-xs md:text-sm"
                        onClick={handleBuyNow}
                    >
                        <ShoppingBag className="w-4 h-4 mr-1 hidden sm:inline" /> Buy Now
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
