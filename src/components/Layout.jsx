import React, { useState } from 'react';
import { ShoppingCart, MapPin, Menu, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from '../assets/rff.jpg';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import NavbarSearch from './NavbarSearch';

const Layout = ({ children }) => {
    const { setIsCartOpen, cart } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans selection:bg-green-100 selection:text-green-900">
            {/* Background gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-200/30 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-200/30 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '10s' }} />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-lime-100/40 rounded-full blur-3xl opacity-50" />
            </div>

            {/* Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300">
                <div className="container mx-auto max-w-7xl">
                    <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-xl shadow-black/5 ring-1 ring-white/50 relative">
                        {!isSearchOpen ? (
                            <>
                                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                                    <img src={logo} alt="Restoran Fresh Food" className="w-12 h-12 rounded-xl object-cover shadow-lg shadow-green-500/20" />
                                    <div className="hidden sm:block">
                                        <h1 className="text-lg font-bold text-slate-800 leading-tight">Restoran Fresh Food</h1>
                                        <p className="text-[10px] text-green-600 font-medium tracking-wider uppercase">Authentic Taste</p>
                                    </div>
                                </Link>

                                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                                    <Link to="/" className="hover:text-primary transition-colors py-2 relative group">
                                        Home
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
                                    </Link>
                                    <Link to="/services" className="hover:text-primary transition-colors py-2 relative group">
                                        Services
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
                                    </Link>
                                    <Link to="/about" className="hover:text-primary transition-colors py-2 relative group">
                                        About
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
                                    </Link>
                                    <Link to="/contact" className="hover:text-primary transition-colors py-2 relative group">
                                        Contact
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <NavbarSearch onClose={() => setIsSearchOpen(false)} />
                        )}

                        <div className="flex items-center gap-3">
                            {!isSearchOpen && (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full text-slate-500 hover:bg-green-50 hover:text-green-600 hidden sm:flex"
                                    onClick={() => setIsSearchOpen(true)}
                                >
                                    <Search className="w-5 h-5" />
                                </Button>
                            )}

                            <Button
                                variant="default"
                                onClick={() => setIsCartOpen(true)}
                                className="rounded-full relative bg-white border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white shadow-lg shadow-green-600/10 px-4 md:px-5 group transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-2 font-bold">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span className="hidden md:inline">Cart</span>
                                </span>
                                {cartCount > 0 && (
                                    <Badge className="absolute -top-2 -right-2 min-w-[20px] h-5 bg-red-600 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white p-0 shadow-md z-20 pointer-events-none">
                                        {cartCount}
                                    </Badge>
                                )}
                            </Button>

                            <Button variant="ghost" size="icon" className="md:hidden rounded-full text-slate-800 hover:bg-green-50">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 pt-28 pb-12 px-4 container mx-auto max-w-7xl min-h-[calc(100vh-80px)]">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative z-10 py-10 bg-white/50 backdrop-blur-md border-t border-white/20">
                <div className="container mx-auto max-w-7xl px-4 text-center">
                    <div className="flex flex-col items-center gap-4 mb-6">
                        <img src={logo} alt="Restoran Fresh Food" className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                        <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
                            Bringing the authentic flavors of Bangladesh to Malaysia. Experience premium dining with fresh ingredients.
                        </p>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-6" />
                    <p className="text-slate-400 text-xs font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} RESTORAN FRESH FOOD. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
