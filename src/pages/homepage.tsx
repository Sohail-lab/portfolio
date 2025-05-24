import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import {
    Github,
    Linkedin,
    Mail,
    Download,
    Code,
    Palette,
    Smartphone,
    Globe,
    Database,
    Cpu,
    ArrowUpRight,
    FileCode,
    Server,
    GitBranch,
    Terminal,
    Layers,
    Smartphone as MobileIcon,
    Globe as WebIcon,
    Database as DbIcon,
    Code as JsIcon,
    FileCode as TsIcon,
    Smartphone as AndroidIcon,
    Globe as GoogleIcon,
    Menu,
    X
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from '@/context/ThemeContext'
import { TypingEffect } from "@/components/ui/typing-effect"
import { ThemeTransition } from "@/components/ui/theme-transition"

import restateImg from "@/assets/images/restate.webp";
import chirpImg from "@/assets/images/chirp.webp";
import erpImg from "@/assets/images/erp.webp";
import verdantImg from "@/assets/images/verdant.webp";
import portfolioImg from "@/assets/images/portfolio.webp";
import tictacImg from "@/assets/images/tictac.webp";
import weatherImg from "@/assets/images/weather.webp";
import chessImg from "@/assets/images/chess.webp";
import lmsImg from "@/assets/images/lms.webp";


const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const portfolioData = {
    personal: {
        name: "Md Sohail",
        title: "React Native Developer",
        tagline: "Crafting digital experiences that inspire and engage",
        bio: "I'm a passionate developer with love for creating beautiful, functional web applications. I love turning complex problems into simple, elegant solutions.",
        location: "Noida, UP, India",
        email: "reshmant90@gmail.com",
        phone: "+91 9955579725",
        social: {
            github: "https://github.com/Sohail-lab",
            linkedin: "https://www.linkedin.com/in/md-sohail-6ab5aa157",
            portfolio: "http://localhost:5173/",
        },
    },
    skills: {
        frontend: ["React.js", "Reace Native", "TypeScript", "Tailwind CSS", "Flutter", "JavaScript", "HTML", "CSS"],
        backend: ["Node.js", "MongoDB"],
        tools: ["Git", "Figma", "Vercel"],
        design: ["UI/UX Design", "Responsive Design"],
    },
    experience: [
        {
            company: "Digivity.in",
            position: "React Native Developer",
            duration: "2025-Present",
            description:
                "Developed an android app of Learnocept educational platform.",
            technologies: ["React Native", "JavaScript", "TypeScript"],
        },
    ],
    projects: [
        {
            title: "ReState - Real State App",
            description:
                "Build a demo real state buying and selling app.",
            image: restateImg,
            technologies: ["React Native", "Appwrite", "TypeScript"],
            github: "",
            live: "",
            featured: true,
        },
        {
            title: "Chirp - Messaging App",
            description:
                "Build a real-time end-to-end messaging app for personal communication.",
            image: chirpImg,
            technologies: ["Flutter", "Firebase", "Dart"],
            github: "",
            live: "",
            featured: true,
        },
        {
            title: "College ERP Website",
            description: "Responsive ERP demo website (Still have some features left to implement).",
            image: erpImg,
            technologies: ["Next.js", "Tailwind CSS"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Verdant Day Planner App",
            description: "Responsive day planner app with AI to prioritize your tasks.",
            image: verdantImg,
            technologies: ["React.js", "Tailwind CSS", "GenKit"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Portfolio Website",
            description: "Responsive portfolio website with smooth animations, dark mode, and optimized performance.",
            image: portfolioImg,
            technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Tic Tac Toe",
            description: "Responsive Tic Tac Toe game with smooth animations for both web and mobile.",
            image: tictacImg,
            technologies: ["Flutter", "Dart"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Weather App",
            description: "Beautiful weather dashboard with location-based forecasts.",
            image: weatherImg,
            technologies: ["Flutter", "Weather API", "Dart"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Chess Game",
            description: "Chess game with smooth animations for mobile.",
            image: chessImg,
            technologies: ["Flutter", "Dart"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Project LMS Website",
            description: "Responsive LMS website for projects (UNDER WORK!!).",
            image: lmsImg,
            technologies: ["React.js", "Tailwind CSS"],
            github: "",
            live: "",
            featured: false,
        },
    ],
}

const FloatingTechIcons = () => {
    const icons = [
        { Icon: FileCode, color: "text-blue-400", delay: 0, size: "w-12 h-12" },
        { Icon: JsIcon, color: "text-yellow-400", delay: 0.2, size: "w-14 h-14" },
        { Icon: TsIcon, color: "text-blue-500", delay: 0.4, size: "w-12 h-12" },
        { Icon: MobileIcon, color: "text-green-400", delay: 0.6, size: "w-14 h-14" },
        { Icon: WebIcon, color: "text-purple-400", delay: 0.8, size: "w-12 h-12" },
        { Icon: DbIcon, color: "text-pink-400", delay: 1, size: "w-14 h-14" },
        { Icon: GoogleIcon, color: "text-red-400", delay: 1.2, size: "w-12 h-12" },
        { Icon: AndroidIcon, color: "text-green-500", delay: 1.4, size: "w-14 h-14" },
        { Icon: Server, color: "text-cyan-400", delay: 1.6, size: "w-12 h-12" },
        { Icon: GitBranch, color: "text-orange-400", delay: 1.8, size: "w-14 h-14" },
        { Icon: Terminal, color: "text-indigo-400", delay: 2, size: "w-12 h-12" },
        { Icon: Layers, color: "text-violet-400", delay: 2.2, size: "w-14 h-14" },
    ]

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {icons.map(({ Icon, color, delay, size }, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${color}`}
                    initial={{ 
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: 0,
                        rotate: 0
                    }}
                    animate={{
                        x: [
                            Math.random() * window.innerWidth,
                            Math.random() * window.innerWidth,
                            Math.random() * window.innerWidth
                        ],
                        y: [
                            Math.random() * window.innerHeight,
                            Math.random() * window.innerHeight,
                            Math.random() * window.innerHeight
                        ],
                        scale: [0, 1, 0],
                        rotate: [0, 360, 720]
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Infinity,
                        delay: delay,
                        ease: "linear"
                    }}
                >
                    <Icon className={`${size} opacity-20`} />
                </motion.div>
            ))}
        </div>
    )
}

const FloatingParticles = () => {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
        }))
        setParticles(newParticles)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    initial={{ x: particle.x, y: particle.y, scale: 0 }}
                    animate={{
                        x: particle.x + Math.random() * 200 - 100,
                        y: particle.y + Math.random() * 200 - 100,
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    )
}

const MagneticButton = ({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const ref = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const button = ref.current
        if (!button) return

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
        }

        const handleMouseLeave = () => {
            button.style.transform = "translate(0px, 0px)"
        }

        button.addEventListener("mousemove", handleMouseMove)
        button.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            button.removeEventListener("mousemove", handleMouseMove)
            button.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return (
        <button ref={ref} className={`transition-transform duration-300 ${className}`} {...props}>
            {children}
        </button>
    )
}

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 z-50 origin-left"
            style={{ scaleX: scrollYProgress }}
        />
    )
}

const useSmoothScroll = () => {
    useEffect(() => {
    
        document.documentElement.style.scrollBehavior = "smooth"

        return () => {
            document.documentElement.style.scrollBehavior = "auto"
        }
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offsetTop = element.offsetTop - 80
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            })
        }
    }

    return { scrollToSection }
}


const AnimatedMenuButton = ({ isOpen, onClick, theme }: { isOpen: boolean; onClick: () => void; theme: 'light' | 'dark' }) => {
    return (
        <motion.button
            onClick={onClick}
            className={`p-2 rounded-lg ${
                theme === 'dark' 
                    ? 'text-gray-300 hover:bg-slate-800' 
                    : 'text-slate-700 hover:bg-slate-100'
            }`}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Menu className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.button>
    );
};


const ContactForm = ({ theme }: { theme: 'light' | 'dark' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {[
                { label: "Name", name: "name", type: "text", placeholder: "Your Name" },
                { label: "Email", name: "email", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
                <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <label className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
                    }`}>
                        {field.label}
                    </label>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            required
                            className={`w-full p-3 rounded-lg ${
                                theme === 'dark'
                                    ? 'bg-slate-800/50 border-slate-700 focus:border-indigo-500 text-white'
                                    : 'bg-white/50 border-slate-200 focus:border-indigo-500 text-slate-900'
                            } border focus:outline-none transition-colors duration-300`}
                            placeholder={field.placeholder}
                        />
                    </motion.div>
                </motion.div>
            ))}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
                }`}>
                    Message
                </label>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className={`w-full p-3 rounded-lg ${
                            theme === 'dark'
                                ? 'bg-slate-800/50 border-slate-700 focus:border-indigo-500'
                                : 'bg-white/50 border-slate-200 focus:border-indigo-500'
                        } border focus:outline-none transition-colors duration-300`}
                        placeholder="Your Message"
                    />
                </motion.div>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
                        theme === 'dark'
                            ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                            : 'bg-indigo-500 hover:bg-indigo-600 text-white'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </motion.div>
            {submitStatus === 'success' && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-sm"
                >
                    Message sent successfully!
                </motion.p>
            )}
            {submitStatus === 'error' && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm"
                >
                    Failed to send message. Please try again.
                </motion.p>
            )}
        </form>
    );
};

export default function Portfolio() {
    const { theme, toggleTheme } = useTheme()
    const [isLoaded, setIsLoaded] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [targetTheme, setTargetTheme] = useState<'light' | 'dark'>(theme)
    const heroRef = useRef<HTMLElement>(null)
    const { scrollToSection } = useSmoothScroll()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const handleThemeToggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTargetTheme(newTheme)
        setIsTransitioning(true)
        setTimeout(() => {
            toggleTheme()
            setTimeout(() => {
                setIsTransitioning(false)
            }, 800)
        }, 800)
    }

    const MobileMenuItem = ({ item, onClick, theme }: { item: string; onClick: () => void; theme: 'light' | 'dark' }) => {
        return (
            <motion.button
                onClick={onClick}
                className={`w-full text-left px-4 py-3 rounded-lg ${
                    theme === 'dark'
                        ? 'text-gray-300 hover:bg-slate-800 active:bg-slate-700'
                        : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
                } transition-colors duration-200`}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                {item}
            </motion.button>
        );
    };

    return (
        <>
            <ScrollProgress />
            <FloatingParticles />
            <FloatingTechIcons />
            <ThemeTransition isTransitioning={isTransitioning} theme={targetTheme} />

            <div className={`min-h-screen transition-colors duration-300 ${
                theme === 'dark' 
                    ? 'bg-gradient-to-br from-slate-900 via-indigo-900/50 to-slate-900 text-white' 
                    : 'bg-gradient-to-br from-slate-50 via-indigo-200/60 to-slate-50 text-slate-900'
            } overflow-x-hidden`}>

                {/* Navigation */}
                <motion.nav
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className={`fixed top-0 left-0 right-0 z-40 ${
                        theme === 'dark' 
                            ? 'bg-slate-900/80 border-slate-800' 
                            : 'bg-white/80 border-slate-200'
                    } backdrop-blur-lg border-b`}
                >
                    <div className="container mx-auto px-4 sm:px-6 py-4">
                        <div className="flex justify-between items-center max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className={`text-lg sm:text-xl font-bold ${
                                    theme === 'dark'
                                        ? 'text-indigo-400'
                                        : 'text-indigo-600'
                                } cursor-pointer hover:opacity-80 transition-opacity`}
                                onClick={() => window.location.reload()}
                            >
                                {portfolioData.personal.name}
                            </motion.div>
                            <div className="flex items-center gap-4 md:gap-8 ml-auto">
                                <div className="hidden md:flex items-center gap-6">
                                    {["About", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
                                        <motion.button
                                            key={item}
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                            onClick={() => scrollToSection(item.toLowerCase())}
                                            className={`hover:text-indigo-600 transition-colors duration-300 relative group ${
                                                theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
                                            }`}
                                        >
                                            {item}
                                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                                                theme === 'dark'
                                                    ? 'bg-indigo-400'
                                                    : 'bg-indigo-600'
                                            } group-hover:w-full transition-all duration-300`} />
                                        </motion.button>
                                    ))}
                                </div>
                                <motion.button
                                    onClick={handleThemeToggle}
                                    className={`px-4 py-2 rounded-lg ${
                                        theme === 'dark' 
                                            ? 'bg-slate-800 text-white hover:bg-slate-700' 
                                            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                                    } transition-colors duration-300 font-medium`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
                                </motion.button>
                                {/* Mobile menu button */}
                                <div className="md:hidden">
                                    <AnimatedMenuButton
                                        isOpen={isMenuOpen}
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        theme={theme}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Mobile navigation menu */}
                        <AnimatePresence mode="wait">
                            {isMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 30,
                                        height: { 
                                            duration: isMenuOpen ? 0.5 : 1.0,
                                            ease: "easeInOut"
                                        },
                                        opacity: { 
                                            duration: isMenuOpen ? 0.4 : 0.9,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    className="md:hidden mt-4 overflow-hidden"
                                >
                                    <motion.div 
                                        className="flex flex-col space-y-2 p-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ 
                                            duration: isMenuOpen ? 0.3 : 0.8,
                                            delay: 0.1,
                                            staggerChildren: 0.05
                                        }}
                                    >
                                        {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                                            <MobileMenuItem
                                                key={item}
                                                item={item}
                                                onClick={() => scrollToSection(item.toLowerCase())}
                                                theme={theme}
                                            />
                                        ))}
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.nav>

                {/* Hero Section */}
                <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center relative z-10">
                    <div className="container mx-auto px-6 text-center">
                        <AnimatePresence>
                            {isLoaded && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <div className="overflow-hidden mb-6">
                                        <motion.h1
                                            className={`text-4xl sm:text-6xl md:text-8xl font-bold ${
                                                theme === 'dark'
                                                    ? 'text-indigo-400'
                                                    : 'text-indigo-800'
                                            }`}
                                            initial={{ y: "100%" }}
                                            animate={{ y: "0%" }}
                                            transition={{ delay: 0.2, duration: 1, ease: [0.33, 1, 0.68, 1] }}
                                        >
                                            {portfolioData.personal.name}
                                        </motion.h1>
                                    </div>

                                    <div className="overflow-hidden mb-8">
                                        <TypingEffect
                                            text={portfolioData.personal.title}
                                            className={`text-xl sm:text-2xl md:text-4xl ${
                                                theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
                                            }`}
                                            speed={100}
                                            delay={0.4}
                                        />
                                    </div>

                                    <div className="overflow-hidden mb-12">
                                        <motion.p
                                            className={`text-lg sm:text-xl max-w-2xl mx-auto px-4 ${
                                                theme === 'dark' ? 'text-gray-400' : 'text-slate-700'
                                            }`}
                                            initial={{ y: "100%" }}
                                            animate={{ y: "0%" }}
                                            transition={{ delay: 0.6, duration: 1, ease: [0.33, 1, 0.68, 1] }}
                                        >
                                            {portfolioData.personal.tagline}
                                        </motion.p>
                                    </div>

                                    <motion.div
                                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.8, duration: 0.8 }}
                                    >
                                        <MagneticButton
                                            className={`${
                                                theme === 'dark'
                                                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700'
                                                    : 'bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600'
                                            } text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105`}
                                            onClick={() => scrollToSection("projects")}
                                        >
                                            <span className="flex items-center gap-2">
                                                View My Work
                                                <ArrowUpRight className="w-4 h-4" />
                                            </span>
                                        </MagneticButton>
                                        <MagneticButton
                                            className={`${
                                                theme === 'dark'
                                                    ? 'border border-white/30 text-white hover:bg-white/10'
                                                    : 'border border-slate-300 text-slate-700 hover:bg-slate-100'
                                            } px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105`}
                                            onClick={() => {
                                                const link = document.createElement('a');
                                                link.href = `${import.meta.env.BASE_URL}MD_SOHAIL_CV.pdf`;
                                                link.download = 'MD_SOHAIL_CV.pdf';
                                                document.body.appendChild(link);
                                                link.click();
                                                document.body.removeChild(link);
                                              }}
                                        >
                                            <span className="flex items-center gap-2">
                                                <Download className="w-4 h-4" />
                                                Download CV
                                            </span>
                                        </MagneticButton>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Animated scroll indicator */}
                    <motion.div
                        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer ${
                            theme === 'dark' ? 'text-white' : 'text-slate-700'
                        }`}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                        onClick={() => scrollToSection("about")}
                    >
                        <div className={`w-6 h-10 border-2 ${
                            theme === 'dark' ? 'border-white/30' : 'border-slate-300'
                        } rounded-full flex justify-center`}>
                            <motion.div
                                className={`w-1 h-3 ${
                                    theme === 'dark' ? 'bg-white/60' : 'bg-slate-600'
                                } rounded-full mt-2`}
                                animate={{ y: [0, 12, 0] }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                            />
                        </div>
                    </motion.div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${
                                theme === 'dark'
                                    ? 'text-indigo-400'
                                    : 'text-indigo-800'
                            }`}>
                                About Me
                            </h2>
                            <motion.div
                                className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            />
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <motion.div
                                    className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1"
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center relative overflow-hidden">
                                        <motion.div
                                            className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                        >
                                            👨‍💻
                                        </motion.div>
                                        {/* Floating elements around avatar */}
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-3 h-3 bg-blue-400/50 rounded-full"
                                                animate={{
                                                    x: [0, Math.cos((i * 60 * Math.PI) / 180) * 100],
                                                    y: [0, Math.sin((i * 60 * Math.PI) / 180) * 100],
                                                    rotate: 360,
                                                }}
                                                transition={{
                                                    duration: 8,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    delay: i * 0.5,
                                                    ease: "linear",
                                                }}
                                                style={{
                                                    left: "50%",
                                                    top: "50%",
                                                }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6"
                            >
                                <motion.p
                                    className={`text-lg text-gray-300 leading-relaxed ${
                                        theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    {portfolioData.personal.bio}
                                </motion.p>
                                <motion.p
                                    className={`text-lg leading-relaxed ${
                                        theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                                    or sharing my knowledge through blog posts and mentoring.
                                </motion.p>
                                <motion.div
                                    className="flex flex-wrap gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <Mail className="w-5 h-5" />
                                        <span>{portfolioData.personal.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-purple-400">
                                        <Globe className="w-5 h-5" />
                                        <span>{portfolioData.personal.location}</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-20 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
                                theme === 'dark'
                                    ? 'from-indigo-400 to-violet-400'
                                    : 'from-indigo-600 to-violet-600'
                            } bg-clip-text text-transparent leading-tight py-2`}>
                                Experience
                            </h2>
                            <motion.div
                                className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            />
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            {portfolioData.experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="relative mb-12 last:mb-0"
                                >
                                    <div className="flex items-start gap-6">
                                        <motion.div
                                            className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 relative"
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.div
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                        </motion.div>
                                        <motion.div className="flex-1" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                                            <Card className={`${
                                                theme === 'dark' 
                                                    ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10' 
                                                    : 'bg-slate-50/80 backdrop-blur-sm border-slate-200/50 hover:bg-slate-100/80'
                                            } transition-all duration-300`}>
                                                <CardContent className="p-6">
                                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                                        <div>
                                                            <h3 className={`text-xl font-bold mb-1 ${
                                                                theme === 'dark' ? 'text-white' : 'text-slate-900'
                                                            }`}>
                                                                {exp.position}
                                                            </h3>
                                                            <p className={`${
                                                                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                                            } font-semibold`}>
                                                                {exp.company}
                                                            </p>
                                                        </div>
                                                        <Badge
                                                            variant="secondary"
                                                            className={`${
                                                                theme === 'dark'
                                                                    ? 'bg-purple-500/20 text-purple-300'
                                                                    : 'bg-purple-500/20 text-purple-700'
                                                            } border-purple-500/30 w-fit`}
                                                        >
                                                            {exp.duration}
                                                        </Badge>
                                                    </div>
                                                    <p className={`mb-4 ${
                                                        theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
                                                    }`}>
                                                        {exp.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.technologies.map((tech, techIndex) => (
                                                            <motion.div
                                                                key={techIndex}
                                                                initial={{ opacity: 0, scale: 0 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                                                            >
                                                                <Badge
                                                                    variant="outline"
                                                                    className={`${
                                                                        theme === 'dark'
                                                                            ? 'border-blue-400/30 text-blue-300'
                                                                            : 'border-blue-600/30 text-blue-700'
                                                                    }`}
                                                                >
                                                                    {tech}
                                                                </Badge>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </div>
                                    {index < portfolioData.experience.length - 1 && (
                                        <motion.div
                                            className="absolute left-2 top-8 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-purple-400 opacity-30"
                                            initial={{ scaleY: 0 }}
                                            whileInView={{ scaleY: 1 }}
                                            transition={{ duration: 0.8, delay: 0.5 }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
                                theme === 'dark'
                                    ? 'from-indigo-400 to-violet-400'
                                    : 'from-indigo-600 to-violet-600'
                            } bg-clip-text text-transparent leading-tight py-2`}>
                                Featured Projects
                            </h2>
                            <motion.div
                                className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            />
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {portfolioData.projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="group"
                                >
                                    <Card className={`${
                                        theme === 'dark'
                                            ? 'bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden hover:bg-white/10'
                                            : 'bg-slate-50/80 backdrop-blur-sm border-slate-200/50 overflow-hidden hover:bg-slate-100/80'
                                    } transition-all duration-500 transform hover:scale-105`}>
                                        <div className="relative overflow-hidden">
                                            <motion.div
                                                className="relative overflow-hidden"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-48 object-cover"
                                                />
                                            </motion.div>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <motion.div
                                                className="absolute top-6 right-4"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <MagneticButton 
                                                    className={`${
                                                        theme === 'dark'
                                                            ? 'bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30'
                                                            : 'bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-slate-900/80'
                                                    } transition-colors`}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(project.github, "_blank");
                                                    }}
                                                >
                                                    <span className="text-sm font-medium text-white">GitHub</span>
                                                </MagneticButton>
                                            </motion.div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className={`text-xl font-bold mb-2 ${
                                                theme === 'dark' ? 'text-white' : 'text-slate-900'
                                            }`}>
                                                {project.title}
                                            </h3>
                                            <p className={`mb-4 ${
                                                theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
                                            }`}>
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <motion.div
                                                        key={techIndex}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                                                    >
                                                        <Badge
                                                            variant="outline"
                                                            className={`${
                                                                theme === 'dark'
                                                                    ? 'border-blue-400/30 text-blue-300'
                                                                    : 'border-blue-600/30 text-blue-700'
                                                            }`}
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-20 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
                                theme === 'dark'
                                    ? 'from-indigo-400 to-violet-400'
                                    : 'from-indigo-600 to-violet-600'
                            } bg-clip-text text-transparent leading-tight py-2`}>
                                Skills & Technologies
                            </h2>
                            <motion.div
                                className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            />
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Frontend",
                                    skills: portfolioData.skills.frontend,
                                    icon: Code,
                                    color: "from-blue-400 to-cyan-400",
                                },
                                {
                                    title: "Backend",
                                    skills: portfolioData.skills.backend,
                                    icon: Database,
                                    color: "from-purple-400 to-pink-400",
                                },
                                { title: "Tools", skills: portfolioData.skills.tools, icon: Cpu, color: "from-green-400 to-blue-400" },
                                {
                                    title: "Design",
                                    skills: portfolioData.skills.design,
                                    icon: Palette,
                                    color: "from-orange-400 to-red-400",
                                },
                            ].map((category, index) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                >
                                    <Card className={`${
                                        theme === 'dark'
                                            ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10'
                                            : 'bg-slate-50/80 backdrop-blur-sm border-slate-200/50 hover:bg-slate-100/80'
                                    } transition-all duration-300 h-full`}>
                                        <CardContent className="p-6">
                                            <motion.div
                                                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {React.createElement(category.icon, { className: "w-6 h-6 text-white" })}
                                            </motion.div>
                                            <h3 className={`text-xl font-bold mb-4 ${
                                                theme === 'dark' ? 'text-white' : 'text-slate-900'
                                            }`}>
                                                {category.title}
                                            </h3>
                                            <div className="space-y-2">
                                                {category.skills.map((skill, skillIndex) => (
                                                    <motion.div
                                                        key={skill}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                                                        className={`${
                                                            theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
                                                        } hover:text-white transition-colors duration-200`}
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        {skill}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 relative z-10">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
                                theme === 'dark'
                                    ? 'from-indigo-400 to-violet-400'
                                    : 'from-indigo-600 to-violet-600'
                            } bg-clip-text text-transparent leading-tight py-2`}>
                                Let's Work Together
                            </h2>
                            <motion.div
                                className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            />
                            <motion.p
                                className={`text-xl max-w-2xl mx-auto ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                I'm always interested in new opportunities and exciting projects. Let's create something amazing
                                together!
                            </motion.p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                {[
                                    {
                                        icon: Mail,
                                        title: "Email",
                                        value: portfolioData.personal.email,
                                        color: "from-blue-400 to-purple-400",
                                    },
                                    {
                                        icon: Smartphone,
                                        title: "Phone",
                                        value: portfolioData.personal.phone,
                                        color: "from-purple-400 to-pink-400",
                                    },
                                ].map((contact, index) => (
                                    <motion.div
                                        key={contact.title}
                                        className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10"
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        style={{ transitionDelay: `${index * 0.1}s` }}
                                    >
                                        <motion.div
                                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {React.createElement(contact.icon, { className: "w-6 h-6 text-white" })}
                                        </motion.div>
                                        <div>
                                            <h3 className={`text-lg font-semibold ${
                                                theme === 'dark' ? 'text-white' : 'text-slate-900'
                                            }`}>
                                                {contact.title}
                                            </h3>
                                            <p className={`${
                                                theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
                                            }`}>
                                                {contact.value}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}

                                <motion.div
                                    className="flex gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <MagneticButton
                                        className={`${
                                            theme === 'dark'
                                                ? 'bg-white hover:bg-gray-100 text-[#24292e]'
                                                : 'bg-[#24292e] hover:bg-[#1b1f23] text-white'
                                        } flex-1 py-3 px-6 rounded-lg transition-all duration-300`}
                                        onClick={() => window.open(portfolioData.personal.social.github, "_blank")}
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            <Github className="w-5 h-5" />
                                            GitHub
                                        </span>
                                    </MagneticButton>
                                    <MagneticButton
                                        className="bg-[#0A66C2] hover:bg-[#004182] text-white flex-1 py-3 px-6 rounded-lg transition-all duration-300"
                                        onClick={() => window.open(portfolioData.personal.social.linkedin, "_blank")}
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            <Linkedin className="w-5 h-5" />
                                            LinkedIn
                                        </span>
                                    </MagneticButton>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Card className={`${
                                    theme === 'dark' 
                                        ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800/70' 
                                        : 'bg-white/50 border-slate-200 hover:bg-white/70'
                                } backdrop-blur-lg transition-colors duration-300`}>
                                    <CardContent className="p-6">
                                        <ContactForm theme={theme} />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 border-t border-white/10 relative z-10">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className={`${
                                theme === 'dark' ? 'text-gray-400' : 'text-slate-700'
                            } mb-4`}>
                                PORTFOLIO_WEBSITE • MD SOHAIL
                            </p>
                            <p className={`text-sm ${
                                theme === 'dark' ? 'text-gray-500' : 'text-slate-600'
                            }`}>
                                Built with React.js, Tailwind CSS, and Framer Motion
                            </p>
                        </motion.div>
                    </div>
                </footer>
            </div>
        </>
    )
}