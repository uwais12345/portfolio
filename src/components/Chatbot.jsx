import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPromptVisible, setIsPromptVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [greetingDots, setGreetingDots] = useState(1);
    const messagesEndRef = useRef(null);
    const typingTimeoutRef = useRef(null);
    const typingIntervalRef = useRef(null);
    const messageIdRef = useRef(0);

    const welcomeMessage = "Hi there! 👋 Welcome to Mohamed Uwais's portfolio. I'm his virtual assistant. Feel free to ask about his skills, projects, experience, or contact details!";

    const typeBotMessage = (text) => {
        const messageId = messageIdRef.current++;
        setIsTyping(true);
        setMessages(prev => [...prev, { id: messageId, text: "", isBot: true, isStreaming: true }]);

        let characterIndex = 0;
        typingTimeoutRef.current = setTimeout(() => {
            typingIntervalRef.current = setInterval(() => {
                characterIndex += 1;
                setMessages(prev => prev.map(message => (
                    message.id === messageId
                        ? { ...message, text: text.slice(0, characterIndex) }
                        : message
                )));

                if (characterIndex >= text.length) {
                    clearInterval(typingIntervalRef.current);
                    typingIntervalRef.current = null;
                    setMessages(prev => prev.map(message => (
                        message.id === messageId
                            ? { ...message, isStreaming: false }
                            : message
                    )));
                    setIsTyping(false);
                }
            }, 24);
        }, 450);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPromptVisible(true);
        }, 5000);
        return () => {
            clearTimeout(timer);
            clearTimeout(typingTimeoutRef.current);
            clearInterval(typingIntervalRef.current);
        };
    }, []);

    useEffect(() => {
        const greetingTimer = setInterval(() => {
            setGreetingDots(currentDots => currentDots === 3 ? 1 : currentDots + 1);
        }, 500);

        return () => clearInterval(greetingTimer);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    useEffect(() => {
        return () => {
            clearTimeout(typingTimeoutRef.current);
            clearInterval(typingIntervalRef.current);
        };
    }, []);

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
        if (isTyping) return;
        const textToSend = customText || input;
        if (!textToSend.trim()) return;

        setMessages(prev => [...prev, { id: messageIdRef.current++, text: textToSend.trim(), isBot: false }]);
        if (!customText) setInput("");

        typeBotMessage(getBotResponse(textToSend));
    };

    const startChat = () => {
        setIsPromptVisible(false);
        setIsOpen(true);
        if (messages.length === 0) typeBotMessage(welcomeMessage);
    };

    const handleToggle = () => {
        if (isPromptVisible) {
            startChat();
            return;
        }
        setIsOpen(currentIsOpen => !currentIsOpen);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end sm:bottom-6 sm:right-6">
            <AnimatePresence>
                {isPromptVisible && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.94 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 w-[calc(100vw-2rem)] rounded-2xl border border-blue-500/30 bg-slate-950/95 p-4 text-white shadow-2xl shadow-blue-950/40 backdrop-blur sm:w-[312px]"
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                                <MessageCircle size={13} />
                                Ask Uwais
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsPromptVisible(false)}
                                className="rounded-full p-1 text-slate-500 transition-colors hover:bg-white/10 hover:text-white"
                                aria-label="Dismiss recruiter chat prompt"
                            >
                                <X size={16} />
                            </button>
                        </div>
                        <p className="mb-4 text-sm leading-6 text-slate-300">
                            Hi! 👋 Ask me anything about Uwais&apos;s projects, experience, or skills.
                        </p>
                        <button
                            type="button"
                            onClick={startChat}
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-cyan-400/20"
                        >
                            <MessageCircle size={17} />
                            Start a chat
                        </button>
                    </motion.div>
                )}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 flex h-[min(28rem,calc(100vh-7rem))] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:w-96"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                                    <img src={profileImg} alt="Uwais" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Uwais's Assistant</h3>
                                    <p className="text-xs text-blue-200">Online</p>
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
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50">
                            {messages.map((msg) => (
                                msg.isStreaming && !msg.text ? null :
                                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                    <div 
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                                            msg.isBot 
                                                ? 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-800' 
                                                : 'bg-blue-600 text-white rounded-tr-none'
                                        }`}
                                    >
                                        {msg.text}
                                        {msg.isStreaming && <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-blue-600 align-middle" aria-hidden="true" />}
                                    </div>
                                </div>
                            ))}
                            {isTyping && messages[messages.length - 1]?.text === "" && (
                                <div className="flex justify-start">
                                    <div className="flex items-center gap-1 rounded-2xl rounded-tl-none border border-slate-100 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-800" aria-label="Assistant is typing">
                                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]" />
                                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.15s]" />
                                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Recruiter Quick Suggestion Chips */}
                        <div className="px-3 py-2 bg-slate-100/50 dark:bg-slate-950/30 border-t border-slate-100 dark:border-slate-800 flex gap-1.5 overflow-x-auto text-nowrap scrollbar-none">
                            {["Skills", "Projects", "Experience", "Contact"].map((chip) => (
                                <button
                                    key={chip}
                                    type="button"
                                    onClick={() => handleSend(null, chip)}
                                    disabled={isTyping}
                                    className="px-2.5 py-1 text-xs rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 shadow-xs transition-colors"
                                >
                                    {chip}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-2 items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                autoComplete="off"
                                placeholder="Ask about skills, projects..."
                                className="flex-1 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white text-sm rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600/50 transition-shadow"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                className="p-2 rounded-full bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
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
                animate={!isOpen ? { boxShadow: ['0 8px 24px rgba(37, 99, 235, 0.28)', '0 8px 34px rgba(37, 99, 235, 0.58)', '0 8px 24px rgba(37, 99, 235, 0.28)'] } : undefined}
                transition={{ duration: 2.2, repeat: !isOpen ? Infinity : 0, ease: 'easeInOut' }}
                onClick={handleToggle}
                className={`flex items-center gap-2 p-1 rounded-full shadow-2xl transition-colors duration-300 ${
                    isOpen ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                aria-label={isOpen ? "Close Assistant" : "Open Assistant"}
            >
                {!isOpen && (
                    <motion.span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-full border-2 border-blue-400/70"
                        animate={{ scale: [1, 1.16, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                    />
                )}
                {!isOpen && (
                    <span className="pl-3 text-sm font-medium hidden sm:block" aria-label="Hey there">
                        Hey there<span className="inline-block w-[1.5em] text-left" aria-hidden="true">{'.'.repeat(greetingDots)}</span>
                    </span>
                )}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 bg-slate-900 flex items-center justify-center">
                    {isOpen ? (
                        <X size={24} className="text-white" />
                    ) : (
                        <img src={profileImg} alt="Avatar" className="w-full h-full object-cover" />
                    )}
                </div>
            </motion.button>
        </div>
    );
};

export default Chatbot;
