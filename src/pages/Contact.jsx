import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-500 pt-8">
            <SEO
                title="Contact Us"
                description="Visit us at Jalan Tun Tan Cheng Lock or contact us via WhatsApp. We are open for dine-in and takeaway."
            />
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-black text-slate-800">Get in Touch</h1>
                <p className="text-xl text-slate-600">We'd love to hear from you. Visit us or drop a message.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info Cards */}
                <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl space-y-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-800">Phone & WhatsApp</h3>
                            <p className="text-slate-500">+60 11-3654 4462</p>
                            <Button variant="link" className="p-0 text-green-600 h-auto" onClick={() => window.open('https://wa.me/601136544462', '_blank')}>
                                Chat on WhatsApp
                            </Button>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-2xl space-y-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-800">Location</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                B-LG-6, Perdana Selatan Blok B,<br />
                                Taman Serdang Perdana Seksyen 1,<br />
                                43300 Seri Kembangan, Selangor
                            </p>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-2xl space-y-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-800">Opening Hours</h3>
                            <p className="text-slate-500 text-sm">Everyday: 10:00 AM - 10:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="lg:col-span-2 h-[500px] rounded-3xl overflow-hidden glass border-4 border-white shadow-2xl relative">
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
        </div>
    );
};

export default Contact;
