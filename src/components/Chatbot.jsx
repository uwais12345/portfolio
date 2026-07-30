import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! I'm Uwais's virtual assistant. You can ask me about his skills, projects, experience, or how to contact him!", isBot: true }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const getBotResponse = (text) => {
        const lowerText = text.toLowerCase();
        
        if (lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey")) {
            return "Hello! How can I help you learn more about Uwais today?";
        }
        if (lowerText.includes("skill") || lowerText.includes("tech") || lowerText.includes("stack")) {
            return "Uwais is skilled in Full-Stack Development (React.js, Node.js, Express, Java, Spring Boot), AI/ML (Python, BERT, Gemini API), and databases (MySQL, MongoDB).";
        }
        if (lowerText.includes("project") || lowerText.includes("portfolio") || lowerText.includes("work")) {
            return "Some of his notable projects include 'TenderGuard' (AI Fraud Detection using React & FastAPI) and 'AI Code Reviewer' (MERN stack with Llama 3.3). Check out the Projects section!";
        }
        if (lowerText.includes("experience") || lowerText.includes("intern") || lowerText.includes("work")) {
            return "Uwais interned as a Software Engineer at Asta Systech, working on MERN stack & Java. He also completed an AI/ML In-Plant training at Codebind Technologies.";
        }
        if (lowerText.includes("contact") || lowerText.includes("hire") || lowerText.includes("email") || lowerText.includes("phone")) {
            return "You can reach Uwais at uwaismohamed208@gmail.com, call him at +91 8056793899, or use the Contact form at the bottom of the page to message him directly on WhatsApp!";
        }
        if (lowerText.includes("education") || lowerText.includes("college") || lowerText.includes("study")) {
            return "He is pursuing a B.Tech in Computer Science & Business Systems at Francis Xavier Engineering College (2023-2027) with a CGPA of 8.04.";
        }
        
        return "I'm a simple bot! 🤖 Try asking about Uwais's 'skills', 'projects', 'experience', or 'contact' info.";
    };

    const handleSend = (e, customText) => {
        if (e) e.preventDefault();
        const textToSend = customText || input;
        if (!textToSend.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { text: textToSend.trim(), isBot: false }]);
        if (!customText) setInput("");

        // Simulate typing delay
        setTimeout(() => {
            const botResponse = getBotResponse(textToSend);
            setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
        }, 600);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 w-[calc(100vw-3rem)] sm:w-96 mb-4 overflow-hidden flex flex-col h-[28rem]"
                    >
                        {/* Header */}
                        <div className="bg-orange-600 p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                                    <img src={profileImg} alt="Uwais" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Uwais's Assistant</h3>
                                    <p className="text-xs text-orange-200">Online</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                    <div 
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                                            msg.isBot 
                                                ? 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700' 
                                                : 'bg-orange-600 text-white rounded-tr-none'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Recruiter Quick Suggestion Chips */}
                        <div className="px-3 py-2 bg-slate-100/50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-700 flex gap-1.5 overflow-x-auto text-nowrap scrollbar-none">
                            {["Skills", "Projects", "Experience", "Contact"].map((chip) => (
                                <button
                                    key={chip}
                                    type="button"
                                    onClick={() => handleSend(null, chip)}
                                    className="px-2.5 py-1 text-xs rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 border border-slate-200 dark:border-slate-700 shadow-xs transition-colors"
                                >
                                    {chip}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex gap-2 items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                autoComplete="off"
                                placeholder="Ask about skills, projects..."
                                className="flex-1 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white text-sm rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-600/50 transition-shadow"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="p-2 rounded-full bg-orange-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-700 transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-1 py-1 rounded-full shadow-2xl transition-colors duration-300 ${
                    isOpen ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-orange-600 text-white hover:bg-orange-700'
                }`}
            >
                {!isOpen && (
                    <span className="pl-4 font-medium text-sm hidden sm:block">Hey there! ...</span>
                )}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-white">
                    {isOpen ? (
                        <div className="w-full h-full flex items-center justify-center text-white">
                            <X size={24} />
                        </div>
                    ) : (
                        <img src={profileImg} alt="Avatar" className="w-full h-full object-cover" />
                    )}
                </div>
            </motion.button>
        </div>
    );
};

export default Chatbot;
