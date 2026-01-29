import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

function Home() {
    const { addToCart } = useCart();
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Main", "Curry", "Rice", "Fish", "Vorta", "Side", "Dessert", "Drink"];

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="space-y-20">
            <SEO
                title="Home"
                description="Welcome to Restoran Fresh Food. Enjoy the best authentic Bangladeshi cuisine in Malaysia, from flavorful curries to traditional sweets."
            />
            {/* Hero Section */}
            <section className="relative rounded-3xl overflow-hidden glass-card min-h-[70vh] flex items-center p-8 md:p-12 shadow-2xl shadow-green-900/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 max-w-2xl space-y-8 pl-4 border-l-4 border-green-500">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                        Authentic & Halal
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                        Taste of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-500">Bengal</span>
                    </h2>
                    <p className="text-xl text-slate-700 leading-relaxed font-medium">
                        Experience the rich culinary heritage of Bangladesh right here in Seri Kembangan.
                        From spicy <strong>Vorta</strong> to aromatic <strong>Curries</strong>.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Button size="lg" className="rounded-full bg-green-600 hover:bg-green-700 shadow-xl shadow-green-600/30 text-lg px-8 py-6" onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
                            Order Now
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-lg px-8 py-6 bg-transparent" onClick={() => document.getElementById('location').scrollIntoView({ behavior: 'smooth' })}>
                            Find Us
                        </Button>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="scroll-mt-24">
                <div className="text-center space-y-4 mb-12">
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Our Menu</span>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-800">Explore Authentic Dishes</h3>
                    <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-10 sticky top-24 z-30 py-2 glass rounded-2xl md:mx-auto md:w-fit px-2 backdrop-blur-xl">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${activeCategory === cat
                                ? 'bg-green-600 text-white shadow-lg shadow-green-600/20'
                                : 'text-slate-500 hover:text-green-600 hover:bg-green-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} onAdd={addToCart} />
                    ))}
                </motion.div>
            </section>

            {/* Location Section */}
            <section id="location" className="scroll-mt-24 pb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center glass-card p-8 rounded-3xl">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-slate-800">Visit Us</h3>
                            <p className="text-slate-500">Come dine with us or pick up your order.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Address</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        B-LG-6, Perdana Selatan Blok B,<br />
                                        Taman Serdang Perdana Seksyen 1,<br />
                                        43300 Seri Kembangan, Selangor
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Contact</h4>
                                    <p className="text-slate-600">+60 11-3654 4462</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] rounded-2xl overflow-hidden glass border-4 border-white shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2515564334362!2d101.70699812472976!3d3.0270038969488837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcb1159df7935%3A0x793ce12a518e1ded!2sRestoran%20Fresh%20Food%20-%20Best%20Bangladeshi%20Food%20%26%20Cuisine!5e0!3m2!1sen!2smy!4v1769672113665!5m2!1sen!2smy"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
