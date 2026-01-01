import { motion } from 'framer-motion';

const WhatIDo = () => {
    const values = [
        {
            title: "Fintech & SaaS Dashboards",
            description: "Build and maintain complex, data-heavy dashboards that remain performant and intuitive."
        },
        {
            title: "Scalable Frontend Architecture",
            description: "Design clean, modular codebases that scale with the product and team."
        },
        {
            title: "Revenue-Critical Features",
            description: "Ship product interactions that directly improve user clarity, speed, and business revenue."
        }
    ];

    return (
        <section className="bg-white py-24 md:py-32 border-b border-slate-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">What I Do</h2>
                    <p className="text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl leading-tight">
                        I solve complex product problems with clean, production-grade code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-bold text-slate-900 leading-snug">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-lg">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhatIDo;
