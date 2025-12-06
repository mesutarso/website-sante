'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'motion/react';

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const delayRef = useRef<NodeJS.Timeout | null>(null);

    // Cleanup timeouts on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (delayRef.current) {
                clearTimeout(delayRef.current);
            }
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Clear any existing timeouts
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (delayRef.current) {
            clearTimeout(delayRef.current);
        }

        try {
            // Simulation d'envoi
            await new Promise(resolve => {
                delayRef.current = setTimeout(() => {
                    resolve(undefined);
                    delayRef.current = null;
                }, 1000);
            });
            
            setShowThankYou(true);
            setFormData({ name: '', email: '', message: '' });

            // Fermer le message après 5 secondes
            timeoutRef.current = setTimeout(() => {
                setShowThankYou(false);
                timeoutRef.current = null;
            }, 5000);
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Nom"
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Adresse e-mail"
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Message"
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200 min-h-[150px] resize-none"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <Button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md transition-colors duration-200 flex items-center justify-center"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Envoi en cours...
                            </span>
                        ) : (
                            'Envoyer'
                        )}
                    </Button>
                </motion.div>
            </form>

            <AnimatePresence>
                {showThankYou && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md"
                    >
                        <p className="text-green-600 text-center font-medium flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Merci de nous avoir contacté ! Nous vous répondrons dans les plus brefs délais.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
