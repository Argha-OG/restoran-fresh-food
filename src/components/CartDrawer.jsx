import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2 } from 'lucide-react';
import CheckoutDialog from './CheckoutDialog';

const CartDrawer = () => {
    const { cart, removeFromCart, updateQuantity, total, isCartOpen, setIsCartOpen } = useCart();
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    return (
        <>
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                <SheetContent className="glass-card w-full sm:max-w-md border-l border-white/40">
                    <SheetHeader>
                        <SheetTitle className="text-2xl font-bold flex items-center gap-2">
                            Your Order <Badge variant="secondary" className="bg-green-100 text-green-700">{cart.length} items</Badge>
                        </SheetTitle>
                        <SheetDescription>
                            Review your items before checkout.
                        </SheetDescription>
                    </SheetHeader>

                    <ScrollArea className="h-[calc(100vh-250px)] mt-6 pr-4">
                        {cart.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-40 text-slate-400">
                                <p>Your cart is empty.</p>
                                <Button variant="link" onClick={() => setIsCartOpen(false)}>Continue Shopping</Button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cart.map(item => (
                                    <div key={item.id} className="flex gap-4 p-3 bg-white/40 rounded-xl border border-white/30">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                                        <div className="flex-1 space-y-1">
                                            <h4 className="font-semibold text-slate-800 text-sm">{item.name}</h4>
                                            <p className="text-green-600 font-bold text-sm">RM {(item.price * item.quantity).toFixed(2)}</p>

                                            <div className="flex items-center gap-2 mt-2">
                                                <Button size="icon" variant="outline" className="h-6 w-6 rounded-full" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                    <Minus className="w-3 h-3" />
                                                </Button>
                                                <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                <Button size="icon" variant="outline" className="h-6 w-6 rounded-full" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                    <Plus className="w-3 h-3" />
                                                </Button>

                                                <Button size="icon" variant="ghost" className="h-6 w-6 ml-auto text-red-400 hover:text-red-500 hover:bg-red-50" onClick={() => removeFromCart(item.id)}>
                                                    <Trash2 className="w-3 h-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ScrollArea>

                    <SheetFooter className="absolute bottom-0 left-0 right-0 p-6 bg-white/60 backdrop-blur-md border-t border-white/20">
                        <div className="w-full space-y-4">
                            <div className="flex justify-between items-center text-lg font-bold">
                                <span>Total</span>
                                <span className="text-green-700">RM {total.toFixed(2)}</span>
                            </div>
                            <Button
                                className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20"
                                size="lg"
                                disabled={cart.length === 0}
                                onClick={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }}
                            >
                                Proceed to Checkout
                            </Button>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

            <CheckoutDialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen} cart={cart} total={total} />
        </>
    );
};

export default CartDrawer;
