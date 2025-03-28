"use client";

import { motion } from "framer-motion";
import { Download, FileText, Brain, ArrowRight, Lock, Maximize2 } from "lucide-react";

export default function ResultsPage() {
    // const [activeTab, setActiveTab] = useState<'notes' | 'mcq'>('notes');
    // const [isPreviewOpen, setIsPreviewOpen] = useState(true);


    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen p-4 sm:p-8"
        >
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                        Your Study Materials
                    </h1>
                    <p className="text-gray-400">AI-generated notes and study materials are ready!</p>
                </motion.div>

                {/* Main Content */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Panel - Document Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="md:col-span-2 bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-white">Document Preview</h2>
                            <div className="flex gap-2">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 cursor-pointer to-emerald-500 text-white font-medium flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative px-4 py-2 rounded-lg bg-gray-800 text-gray-300 font-medium flex items-center gap-2 cursor-not-allowed opacity-70"
                                >
                                    <Brain className="w-4 h-4" />
                                    Generate MCQs
                                    <span className="absolute -top-2 -right-2 bg-cyan-500 text-xs px-2 py-1 rounded-full text-white">Soon!</span>
                                </motion.button>
                            </div>
                        </div>

                        {/* Document Preview Area */}
                        <div className="aspect-[16/9] rounded-lg border border-gray-800 bg-gray-900/50 p-4 overflow-hidden relative">
                            <div className="h-full overflow-y-auto space-y-4 text-gray-400">
                                {/* Preview content here */}
                                <h3 className="text-lg font-medium text-white">Lecture Summary</h3>
                                <p className="leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <h4 className="text-md font-medium text-white mt-4">Key Points</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Important concept one</li>
                                    <li>Critical theory explanation</li>
                                    <li>Main topic summary</li>
                                </ul>
                            </div>
                            <button
                                className="absolute bottom-4 right-4 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                            // onClick={() => setIsPreviewOpen(true)}
                            >
                                <Maximize2 className="w-4 h-4 text-gray-400" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Panel - Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {/* Notes Section */}
                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="w-6 h-6 text-cyan-400" />
                                <h3 className="text-lg font-medium text-white">Smart Notes</h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">
                                Comprehensive notes generated from your video lecture, including key points and summaries.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-400 mb-4">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                                    Key concepts highlighted
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                                    Important definitions
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                                    Chapter summaries
                                </li>
                            </ul>
                        </div>

                        {/* MCQ Section (Coming Soon) */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Brain className="w-6 h-6 text-emerald-400" />
                                <h3 className="text-lg font-medium text-white">Practice MCQs</h3>
                            </div>

                            {/* Coming Soon Overlay */}
                            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center">
                                <div className="text-center">
                                    <Lock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                                    <p className="text-cyan-400 font-medium">Coming Soon!</p>
                                    <p className="text-sm text-gray-400 mt-1">
                                        AI-generated practice questions
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm mb-4">
                                Test your understanding with automatically generated multiple-choice questions.
                            </p>
                            <motion.button
                                disabled
                                className="w-full py-2 px-4 rounded-lg bg-gray-800 text-gray-500 font-medium cursor-not-allowed"
                            >
                                Generate MCQs
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-cyan-400">5</div>
                                <div className="text-sm text-gray-400">Pages Generated</div>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-emerald-400">98%</div>
                                <div className="text-sm text-gray-400">Accuracy</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.main>
    );
}
