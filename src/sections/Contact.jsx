import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1] 
        }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
        };
        const validationErrors = {};

        if (trimmedData.name.length < 2) validationErrors.name = 'Please enter your name.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedData.email)) validationErrors.email = 'Please enter a valid email address.';
        if (trimmedData.message.length < 10) validationErrors.message = 'Please enter at least 10 characters.';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus('');
            return;
        }

        // Your WhatsApp number (91 is country code)
        const phoneNumber = "918056793899";

        // Construct the message
        const message = `Hello Mohamed Uwais, 

    I'm *${trimmedData.name}*.
*Email:* ${trimmedData.email}

*Message:* 
${trimmedData.message}`;

        // Encode and redirect
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

        // Provide feedback to user
        setStatus(whatsappWindow ? 'success' : 'error');
        if (whatsappWindow) {
            setErrors({});
            setFormData({ name: '', email: '', message: '' });
        }
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-12 sm:py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Fade In */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Get In Touch</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Staggered Fade In Grid */}
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {/* Left Column: Contact Details Fade In */}
                    <motion.div variants={fadeInVariants}>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Let's Talk</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <motion.div variants={fadeInVariants} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Address</h4>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        33A1, Mothai Meera Pillai Street,<br />Melapalayam, Tirunelveli, Tamil Nadu, India
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInVariants} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Email</h4>
                                    <a href="mailto:uwaismohamed208@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        uwaismohamed208@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInVariants} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Phone</h4>
                                    <a href="tel:+918056793899" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        +91 8056793899
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form Fade In */}
                    <motion.div
                        variants={fadeInVariants}
                        className="bg-slate-50 dark:bg-slate-950/60 p-6 sm:p-7 rounded-2xl shadow-lg border border-slate-200/60 dark:border-slate-800/80"
                    >
                        <form onSubmit={handleSubmit} noValidate className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={Boolean(errors.name)}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                                {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={Boolean(errors.email)}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    autoComplete="off"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={Boolean(errors.message)}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none shadow-sm"
                                    placeholder="Your message here..."
                                ></textarea>
                                {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.message}</p>}
                            </div>

                            <p className="text-xs text-slate-500 dark:text-slate-400">This opens WhatsApp with your message ready to send.</p>
                            <button
                                type="submit"
                                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                Open WhatsApp <Send size={18} />
                            </button>

                            {status === 'success' && <p role="status" className="mt-2 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">Opening WhatsApp...</p>}
                            {status === 'error' && <p role="alert" className="mt-2 text-center text-sm font-medium text-red-600 dark:text-red-400">WhatsApp could not be opened. Please use the email or phone links.</p>}
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
