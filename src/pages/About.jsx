import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="space-y-16 animate-in fade-in duration-500">
            <SEO
                title="About Us"
                description="Learn about our journey bringing authentic Bengali flavors to Malaysia. Committed to freshness, quality, and tradition."
            />
            {/* Header */}
            <div className="text-center space-y-4 pt-8">
                <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Our Story</span>
                <h1 className="text-5xl md:text-6xl font-black text-slate-800">
                    Authentic Taste of <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-500">Home</span>
                </h1>
                <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                    <p>
                        Welcome to <strong className="text-slate-900">Restoran Fresh Food</strong>, a hidden gem in Seri Kembangan dedicated to bringing the vibrant and bold flavors of Bangladesh to Malaysia.
                    </p>
                    <p>
                        Our journey began with a simple mission: to serve food that tastes exactly like it does back home. We believe that authentic cuisine is not just about ingredients, but about the memories and culture it represents.
                    </p>
                    <p>
                        Every dish is prepared using traditional recipes passed down through generations, ensuring that from our spicy <em className="text-green-700">Vortas</em> to our rich <em className="text-green-700">Curries</em>, every bite is a celebration of Bengali heritage.
                    </p>
                </div>
                <div className="relative group">
                    <div className="absolute inset-0 bg-green-200 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                    <img
                        src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
                        alt="Restaurant Interior"
                        className="relative rounded-[2rem] shadow-2xl z-10 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Stats / Values */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: "Years Served", value: "5+" },
                    { label: "Daily Dishes", value: "30+" },
                    { label: "Happy Customers", value: "10k+" },
                    { label: "Chefs", value: "Expert" }
                ].map((stat, i) => (
                    <div key={i} className="glass-card p-6 text-center space-y-2 rounded-2xl hover:bg-white/60 transition-colors">
                        <div className="text-4xl font-black text-green-600">{stat.value}</div>
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
