import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Button } from "@/components/ui/button";

const NavbarSearch = ({ onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    const inputRef = useRef(null);

    // Auto-focus input when opened
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Filter products based on query
    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered.slice(0, 5));
    }, [query]);

    // Handle selection
    const handleSelect = (productId) => {
        navigate(`/product/${productId}`);
        onClose();
    };

    return (
        <div className="flex-1 flex items-center max-w-2xl mx-auto relative animate-in fade-in slide-in-from-top-1 duration-200 mr-4">
            <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                    ref={inputRef}
                    placeholder="Search dishes..."
                    className="w-full pl-10 pr-10 py-2 bg-slate-100/50 border-0 focus-visible:ring-1 focus-visible:ring-green-500 rounded-full text-slate-800"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') onClose();
                    }}
                />
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full hover:bg-slate-200/50"
                    onClick={onClose}
                >
                    <X className="w-3 h-3 text-slate-500" />
                </Button>

                {/* Results Dropdown */}
                {query && (
                    <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                        {results.length > 0 ? (
                            <div className="py-2">
                                {results.map(product => (
                                    <div
                                        key={product.id}
                                        onClick={() => handleSelect(product.id)}
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-10 h-10 rounded-lg object-cover bg-slate-100"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-sm text-slate-800 truncate">{product.name}</h4>
                                            <span className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-full uppercase tracking-wide">{product.category}</span>
                                        </div>
                                        <div className="font-bold text-xs text-green-600 whitespace-nowrap">
                                            RM {product.price.toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-6 text-center text-sm text-slate-500">
                                No dishes found for "{query}"
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavbarSearch;
