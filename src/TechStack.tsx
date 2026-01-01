import { motion } from 'framer-motion';

const TechStack = () => {
    const stack = [
        { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
        { category: 'Backend', items: ['Node.js', 'GraphQL', 'PostgreSQL'] },
        { category: 'Infra', items: ['AWS', 'Firebase', 'Docker'] },
        { category: 'Testing', items: ['Jest', 'Cypress'] }
    ];

    return (
        <section className="bg-gray-50/50 border-t border-gray-100 py-16">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-left flex flex-col md:flex-row items-start gap-8 md:gap-16"
                >
                    <div className="min-w-[120px]">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tech Stack</h3>
                    </div>

                    <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap justify-start gap-8 md:gap-x-12 md:gap-y-8">
                        {stack.map((group, index) => (
                            <div key={index} className="space-y-2">
                                <h4 className="text-sm font-semibold text-slate-900 border-b border-gray-200 inline-block pb-1 mb-1">
                                    {group.category}
                                </h4>
                                <ul className="space-y-1">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="text-slate-500 text-sm">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
