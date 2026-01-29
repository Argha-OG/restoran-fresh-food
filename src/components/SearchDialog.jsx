import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const SearchDialog = ({ open, onOpenChange }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered.slice(0, 5)); // Limit to 5 results
    }, [query]);

    const handleSelect = (productId) => {
        onOpenChange(false);
        navigate(`/product/${productId}`);
        setQuery('');
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[550px] p-0 gap-0 overflow-hidden bg-white/80 backdrop-blur-xl border-white/20 shadow-2xl">
                <DialogHeader className="sr-only">
                    <DialogTitle>Search Products</DialogTitle>
                </DialogHeader>

                <div className="flex items-center px-4 border-b border-slate-100">
                    <Search className="w-5 h-5 text-slate-400 mr-3" />
                    <Input
                        placeholder="Search for food (e.g., 'Beef', 'Curry')..."
                        className="border-0 focus-visible:ring-0 px-0 py-6 text-lg bg-transparent placeholder:text-slate-400"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                {results.length > 0 && (
                    <div className="py-2">
                        <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Suggestions</div>
                        {results.map(product => (
                            <div
                                key={product.id}
                                onClick={() => handleSelect(product.id)}
                                className="flex items-center gap-4 px-4 py-3 hover:bg-green-50/50 cursor-pointer transition-colors group"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-12 h-12 rounded-lg object-cover shadow-sm group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-800 group-hover:text-green-700 transition-colors">{product.name}</h4>
                                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{product.category}</span>
                                </div>
                                <div className="font-bold text-green-600">
                                    RM {product.price.toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {query && results.length === 0 && (
                    <div className="p-8 text-center text-slate-500">
                        <p>No delicious matches found for "{query}"</p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default SearchDialog;
