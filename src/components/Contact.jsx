import { useState } from 'react';
import { FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { FaNewspaper } from 'react-icons/fa6';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(''), 2000); // Clear status after 2 seconds
    } catch (err) {
      setCopyStatus('Failed to copy');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Card - Contact Info */}
          <div
            className="card border border-primary/20 backdrop-blur-[2px] bg-base-100/5 pt-4
                          hover:shadow-xl hover:border-primary/30 transition-all"
          >
            <div className="card-body flex flex-col items-center justify-center">
              <div className="space-y-6 text-center">
                <div className="flex items-center space-x-3 text-primary/80 hover:text-primary hover:scale-[1.02] transition-all">
                  <IoMail />
                  <button
                    onClick={() => copyToClipboard('achen2304@gmail.com')}
                    className="text-sm"
                  >
                    achen2304@gmail.com
                  </button>
                </div>

                <div className="flex items-center space-x-3 text-primary/80 hover:text-primary hover:scale-[1.02] transition-all">
                  <FaPhoneAlt className="text-primary" />
                  <span className="text-sm">641-808-8022</span>
                </div>

                <div className="flex items-center space-x-3 text-primary/80 hover:text-primary hover:scale-[1.02] transition-all">
                  <FaNewspaper />
                  <a
                    href="/resume/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    Resume
                  </a>
                </div>

                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://github.com/achen2304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-primary/80 hover:text-primary transition-all"
                  >
                    <FaGithub className="h-6 w-6 hover:scale-[1.1] transition-all" />
                  </a>
                  <a
                    href="https://linkedin.com/in/achen2304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-primary/80 hover:text-primary "
                  >
                    <FaLinkedin className="h-6 w-6 hover:scale-[1.1] transition-all" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right Card - Contact Form */}
          <div
            className="card border border-primary/20 backdrop-blur-[2px] bg-base-100/5
                          hover:shadow-xl hover:border-primary/30 transition-all"
          >
            <div className="card-body">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-neutral/5 text-primary"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-neutral/5 text-primary"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full h-32 bg-neutral/5 text-primary"
                  placeholder="Your Message"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="btn btn-outline w-full text-primary hover:bg-primary hover:text-base-100"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div className="text-success text-center py-2">
                    Message sent successfully!
                  </div>
                )}

                {status === 'error' && (
                  <div className="text-error text-center py-2">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
