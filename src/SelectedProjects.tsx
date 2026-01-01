import { motion } from 'framer-motion';

const SelectedProjects = () => {
    const projects = [
        {
            name: 'OCPUS',
            problem: 'Complex user engagement and monetization for live shopping events.',
            impact: 'Processed $100k+ in 3 months by engineering seamless domestic & international payment flows.',
            link: 'https://play.google.com/store/apps/details?id=net.ocpusapp.android&pcampaignid=web_share'
        },
        {
            name: 'Boltfliz',
            problem: 'Users faced excessive ad redirects and broken links when trying to download content.',
            impact: 'Built a seamless aggregator engine serving users in 20+ countries, removing ad friction.',
            link: 'https://boltfliz.vercel.app/'
        },
        {
            name: 'Veedez',
            problem: 'Disjointed payments and inventory management for SME growth.',
            impact: 'Powering 20k+ merchants with ~4B Naira monthly transaction volume.',
            link: 'https://veedez.com/'
        }
    ];

    return (
        <section className="bg-gray-50 py-24 md:py-32 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Selected Work</h2>
                    <p className="text-slate-500 max-w-2xl text-lg">
                        A few production-grade systems where I solved complex problems and delivered measurable value.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    {project.name}
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Problem</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {project.problem}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Impact</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm font-medium">
                                        {project.impact}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto pt-6 border-t border-gray-50">
                                <a
                                    href={project.link}
                                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                                >
                                    View Project <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectedProjects;
