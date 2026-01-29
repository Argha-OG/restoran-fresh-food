import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Utensils, CalendarDays, ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: <Utensils className="w-10 h-10 text-orange-500" />,
            title: "Premium Buffet",
            description: "Experience an endless array of authentic Bangladeshi delicacies. Our buffet features over 20+ dishes including signature Biryanis, Bhortas, and Curries.",
            price: "Starts from RM 25/pax",
            image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
        },
        {
            icon: <CalendarDays className="w-10 h-10 text-purple-500" />,
            title: "Event Hosting",
            description: "Host your special moments with us. From corporate gatherings to wedding receptions, our dedicated event space can accommodate up to 100 guests.",
            price: "Custom Packages",
            image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1798&auto=format&fit=crop"
        },
        {
            icon: <ChefHat className="w-10 h-10 text-green-500" />,
            title: "Authentic Cuisines",
            description: "Our chefs bring the true taste of Bengal to Malaysia. We specialize in traditional cooking methods using imported spices for that nostalgic home-cooked flavor.",
            price: "A La Carte Menu",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="space-y-16 animate-in fade-in duration-500">
            <SEO
                title="Services & Catering"
                description="We offer premium buffet services, event hosting, and authentic catering for weddings and corporate events."
            />
            {/* Hero Section */}
            <div className="text-center space-y-4 max-w-3xl mx-auto pt-8">
                <h1 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tight">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Services</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Beyond just a restaurant, we offer comprehensive dining experiences suited for every occasion.
                </p>
                <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card overflow-hidden group hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-lg">
                                {service.price}
                            </div>
                        </div>
                        <div className="p-8 space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center -mt-16 relative z-20 shadow-lg border border-white">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                            <Button
                                variant="outline"
                                className="w-full border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300"
                                onClick={() => navigate('/contact')}
                            >
                                Book Now
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="glass-card p-12 rounded-3xl text-center space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />
                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800">Planning a Big Event?</h2>
                    <p className="text-slate-600 text-lg">
                        Let us handle the food while you enjoy the moment. Contact our event manager directly for custom packages and tastings.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-slate-900 hover:bg-slate-800 px-8" onClick={() => navigate('/contact')}>
                            Contact Us
                        </Button>
                        <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 px-8" onClick={() => window.open('https://wa.me/601136544462', '_blank')}>
                            WhatsApp Manager
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
