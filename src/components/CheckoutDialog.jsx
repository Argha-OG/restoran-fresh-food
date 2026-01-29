import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea" // Need to install textarea if not present, use Input for now or install
// Assuming Input for now. I'll modify layout.

const CheckoutDialog = ({ open, onOpenChange, cart, total }) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [locationType, setLocationType] = useState('text'); // 'text' or 'map'
    const [address, setAddress] = useState('');
    const [mapLink, setMapLink] = useState('');

    const handleConfirmOrder = () => {
        // Construct WhatsApp Message
        const itemsList = cart.map(item => `- ${item.name} x${item.quantity} (RM ${(item.price * item.quantity).toFixed(2)})`).join('%0a');
        const locationInfo = locationType === 'text' ? `Address: ${address}` : `Map Link: ${mapLink}`;

        const message = `*Restoran Fresh Food - New Order*%0a%0a` +
            `*Customer Name:* ${name}%0a` +
            `*Contact:* ${contact}%0a` +
            `*Order Details:*%0a${itemsList}%0a%0a` +
            `*Total: RM ${total.toFixed(2)}*%0a%0a` +
            `*Location:*%0a${locationInfo}`;

        const whatsappUrl = `https://wa.me/601136544462?text=${message}`;
        window.open(whatsappUrl, '_blank');
        onOpenChange(false);
        // Should clear cart here conceptually, but maybe after successful send? 
        // For now user clears manually or we assume sent.
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md bg-white shadow-2xl border border-slate-100">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-slate-800">Checkout</DialogTitle>
                    <DialogDescription className="text-slate-500">
                        Enter your delivery details to complete the order on WhatsApp.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-700 font-semibold">Name</Label>
                        <Input
                            id="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="contact" className="text-slate-700 font-semibold">Contact Number</Label>
                        <Input
                            id="contact"
                            type="tel"
                            placeholder="012-3456789"
                            value={contact}
                            onChange={e => setContact(e.target.value)}
                            className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold">Delivery Location</Label>
                        <Tabs defaultValue="text" onValueChange={setLocationType} className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-slate-100 text-slate-500">
                                <TabsTrigger value="text" className="data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm">Address</TabsTrigger>
                                <TabsTrigger value="map" className="data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm">Map Link</TabsTrigger>
                            </TabsList>
                            <TabsContent value="text" className="mt-2 text-slate-900">
                                <Input
                                    placeholder="Full Address (Block, Street, Area)"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    className="bg-slate-50 border-slate-200 focus:bg-white transition-colors text-slate-900 placeholder:text-slate-400"
                                />
                            </TabsContent>
                            <TabsContent value="map" className="mt-2 text-slate-900">
                                <Input
                                    placeholder="Paste Google Maps Link"
                                    value={mapLink}
                                    onChange={e => setMapLink(e.target.value)}
                                    className="bg-slate-50 border-slate-200 focus:bg-white transition-colors text-slate-900 placeholder:text-slate-400"
                                />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)} className="border-slate-200 text-slate-700 hover:bg-slate-50">Cancel</Button>
                    <Button
                        className="bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20"
                        onClick={handleConfirmOrder}
                        disabled={!name || !contact || (locationType === 'text' && !address) || (locationType === 'map' && !mapLink)}
                    >
                        Confirm Order on WhatsApp
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CheckoutDialog;
