import { motion } from 'framer-motion';

const CredibilityStrip = () => {
    const items = [
        "Fintech & SaaS products",
        "Production-grade systems",
        "Payments & admin dashboards",
        "Used by real users at scale"
    ];

    return (
        <section className="w-full bg-slate-950 border-t border-slate-900/50 py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex items-center justify-center md:justify-start ${index !== items.length - 1 ? 'md:border-r md:border-slate-800' : ''
                                } ${index !== 0 ? 'md:pl-8' : ''}`}
                        >
                            <span className="text-slate-400 font-medium text-sm md:text-base tracking-wide uppercase md:normal-case md:tracking-normal text-center md:text-left">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CredibilityStrip;
