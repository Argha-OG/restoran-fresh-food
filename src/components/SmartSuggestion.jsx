import React from 'react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import ProductCard from './ProductCard';

const SmartSuggestion = () => {
    const { suggestionItem, setSuggestionItem, addToCart } = useCart();

    if (!suggestionItem) return null;

    // Logic: If Rice selected, suggest Curries (except items already in cart maybe? or just top curries)
    const suggestions = products.filter(p => p.category === 'Curry').slice(0, 2);

    const handleAddSuggestion = (product) => {
        addToCart(product);
        setSuggestionItem(null); // Close after adding
    };

    return (
        <Dialog open={!!suggestionItem} onOpenChange={(open) => !open && setSuggestionItem(null)}>
            <DialogContent className="sm:max-w-3xl glass-card border-white/40">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-green-800">Perfect Pairing!</DialogTitle>
                    <DialogDescription className="text-slate-600">
                        You added <span className="font-bold text-green-700">{suggestionItem.name}</span>.
                        It goes great with our signature curries!
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                    {suggestions.map(product => (
                        <div key={product.id} className="scale-90 origin-top">
                            <ProductCard product={product} onAdd={handleAddSuggestion} />
                        </div>
                    ))}
                </div>

                <DialogFooter>
                    <Button variant="ghost" onClick={() => setSuggestionItem(null)}>No, thanks</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default SmartSuggestion;
