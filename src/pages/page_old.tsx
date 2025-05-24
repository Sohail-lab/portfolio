import React from "react"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
    ChevronDown,
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Download,
    Code,
    Palette,
    Smartphone,
    Globe,
    Database,
    Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
            image: "/src/assets/images/restate.png",
            technologies: ["React Native", "Appwrite", "TypeScript"],
            github: "",
            live: "",
            featured: true,
        },
        {
            title: "Chirp - Messaging App",
            description:
                "Build a real-time end-to-end messaging app for personal communication.",
            image: "/src/assets/images/chirp_1.jpg",
            technologies: ["Flutter", "Firebase", "Dart"],
            github: "",
            live: "",
            featured: true,
        },
        {
            title: "College ERP Website",
            description: "Responsive ERP demo website (Still have some features left to implement).",
            image: "/src/assets/images/erp.png",
            technologies: ["Next.js", "Tailwind CSS"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Verdant Day Planner App",
            description: "Responsive day planner app with AI to prioritize your tasks.",
            image: "/src/assets/images/verdant.png",
            technologies: ["React.js", "Tailwind CSS", "GenKit"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Portfolio Website",
            description: "Responsive portfolio website with smooth animations, dark mode, and optimized performance.",
            image: "/src/assets/images/portfolio.png",
            technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Tic Tac Toe",
            description: "Responsive Tic Tac Toe game with smooth animations for both web and mobile.",
            image: "/src/assets/images/tictac_2.jpg",
            technologies: ["Flutter", "Dart"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Weather App",
            description: "Beautiful weather dashboard with location-based forecasts.",
            image: "/src/assets/images/weather.jpg",
            technologies: ["Flutter", "Weather API", "Dart"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Chess Game",
            description: "Chess game with smooth animations for mobile.",
            image: "/src/assets/images/chess.jpg",
            technologies: ["Flutter", "Dart"],
            github: "",
            live: "",
            featured: false,
        },
        {
            title: "Project LMS Website",
            description: "Responsive LMS website for projects (UNDER WORK!!).",
            image: "/src/assets/images/lms.png",
            technologies: ["React.js", "Tailwind CSS"],
            github: "",
            live: "",
            featured: false,
        },
    ],
}

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState("hero")
    const [isLoaded, setIsLoaded] = useState(false)
    const { scrollYProgress } = useScroll()
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
            {/* Animated Background */}
            <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
            </motion.div>

            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        >
                            {portfolioData.personal.name}
                        </motion.div>
                        <div className="hidden md:flex space-x-8">
                            {["About", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
                                <motion.button
                                    key={item}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="hover:text-blue-400 transition-colors duration-300 relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center justify-center relative z-10">
                <div className="container mx-auto px-6 text-center">
                    <AnimatePresence>
                        {isLoaded && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.h1
                                    className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                >
                                    {portfolioData.personal.name}
                                </motion.h1>
                                <motion.h2
                                    className="text-2xl md:text-4xl mb-8 text-gray-300"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    {portfolioData.personal.title}
                                </motion.h2>
                                <motion.p
                                    className="text-xl mb-12 max-w-2xl mx-auto text-gray-400"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                >
                                    {portfolioData.personal.tagline}
                                </motion.p>
                                <motion.div
                                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                >
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                                        onClick={() => scrollToSection("projects")}
                                    >
                                        View My Work
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                                        onClick={() => scrollToSection("contact")}
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Download CV
                                    </Button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                >
                    <ChevronDown className="w-8 h-8 text-white/60" />
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 relative z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                        <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                                            👨‍💻
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <p className="text-lg text-gray-300 leading-relaxed">{portfolioData.personal.bio}</p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies, gathering new experiences,
                                and enhancing my knowledge.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-blue-400">
                                    <Mail className="w-5 h-5" />
                                    <span>{portfolioData.personal.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-purple-400">
                                    <Globe className="w-5 h-5" />
                                    <span>{portfolioData.personal.location}</span>
                                </div>
                            </div>
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
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Experience
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {portfolioData.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative mb-12 last:mb-0"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 relative">
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
                                    </div>
                                    <Card className="flex-1 bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                                                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                                                </div>
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-purple-500/20 text-purple-300 border-purple-500/30 w-fit"
                                                >
                                                    {exp.duration}
                                                </Badge>
                                            </div>
                                            <p className="text-gray-300 mb-4">{exp.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="outline" className="border-blue-400/30 text-blue-300">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                {index < portfolioData.experience.length - 1 && (
                                    <div className="absolute left-2 top-8 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-purple-400 opacity-30" />
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
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {portfolioData.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <Card className="bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                                                <Github className="w-4 h-4" />
                                            </Button>
                                            <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                                                <ExternalLink className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-300 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <Badge key={techIndex} variant="outline" className="border-blue-400/30 text-blue-300">
                                                    {tech}
                                                </Badge>
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
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Skills & Technologies
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
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
                                viewport={{ once: true }}
                            >
                                <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                                    <CardContent className="p-6">
                                        <div
                                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}
                                        >
                                            {React.createElement(category.icon, { className: "w-6 h-6 text-white" })}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                                        <div className="space-y-2">
                                            {category.skills.map((skill, skillIndex) => (
                                                <motion.div
                                                    key={skill}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="text-gray-300 hover:text-white transition-colors duration-200"
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
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Let's Work Together
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            I'm always interested in new opportunities and exciting projects. Let's create something amazing together!
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Email</h3>
                                    <p className="text-gray-300">{portfolioData.personal.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                                    <Smartphone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                                    <p className="text-gray-300">{portfolioData.personal.phone}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex-1"
                                    onClick={() => window.open(portfolioData.personal.social.github, "_blank")}
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    GitHub
                                </Button>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white flex-1"
                                    onClick={() => window.open(portfolioData.personal.social.linkedin, "_blank")}
                                >
                                    <Linkedin className="w-5 h-5 mr-2" />
                                    LinkedIn
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                                <CardContent className="p-6">
                                    <form className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                            <textarea
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
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
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-400 mb-4">© 2024 {portfolioData.personal.name}. All rights reserved.</p>
                        <p className="text-sm text-gray-500">Built with Next.js, Tailwind CSS, and Framer Motion</p>
                    </motion.div>
                </div>
            </footer>
        </div>
    )
}
