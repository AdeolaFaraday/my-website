import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      } else {
        alert(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/AdeolaFaraday', label: 'GitHub' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/adeola-apanisile-b38230182/', label: 'LinkedIn' },
    { name: 'Twitter', url: 'https://x.com/tech_faraday', label: 'Twitter' },
    { name: 'Email', url: 'mailto:adexconly@gmail.com', label: 'Email' }
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Text & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Let’s build something reliable.
            </h2>
            <p className="text-lg text-slate-500 mb-12 max-w-md leading-relaxed">
              Open to remote frontend / product engineering roles and long-term collaborations.
            </p>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Connect</h3>
              <div className="flex flex-wrap gap-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-indigo-600 font-medium transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-indigo-600 focus:ring-0 transition-colors duration-300 placeholder-slate-300"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-indigo-600 focus:ring-0 transition-colors duration-300 placeholder-slate-300"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-indigo-600 focus:ring-0 transition-colors duration-300 placeholder-slate-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Get in Touch'}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
