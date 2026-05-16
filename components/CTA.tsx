'use client';

import { useState, useCallback } from 'react';
import { m } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/variants';

const topics = [
  'General inquiry',
  'Partnership',
  'Enterprise',
  'Bug report',
  'Other',
];

export default function CTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const validateEmail = useCallback((value: string) => {
    if (!value) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
    return '';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Name is required');
      return;
    }
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }
    if (!topic) {
      setError('Please select a topic');
      return;
    }
    if (!message.trim()) {
      setError('Please enter a message');
      return;
    }

    setError('');
    setSubmitting(true);

    try {
      const formData = new URLSearchParams();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('topic', topic);
      formData.append('message', message);

      const params = new URLSearchParams(window.location.search);
      const utmSource = params.get('utm_source') || '';
      const utmMedium = params.get('utm_medium') || '';
      const utmCampaign = params.get('utm_campaign') || '';
      if (utmSource) formData.append('utm_source', utmSource);
      if (utmMedium) formData.append('utm_medium', utmMedium);
      if (utmCampaign) formData.append('utm_campaign', utmCampaign);

      await fetch(
        'https://script.google.com/macros/s/AKfycbzMaDvwD49OMW-eAYL1JNvHqYuo4683Cr-K_Jodubxug69Eqk-vZcoWDbTockqAbUEH/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          currency: 'USD',
          value: 1,
        });
        window.gtag('event', 'contact_form_submitted', {
          topic: topic,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
        });
      }

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
        id="contact"
        className="relative z-10 py-section px-6 min-h-[60vh] flex items-center justify-center"
        aria-label="Contact us"
      >
        <div className="max-w-lg mx-auto text-center w-full">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-heading-section heading-section text-text-primary mb-4">
              Get in touch
            </h2>
            <p className="font-body text-subheading text-text-muted backdrop-blur-sm bg-cream-base/50 rounded-full px-6 py-2 inline-block mb-10">
              Questions, partnerships, or just want to say hi?
            </p>
          </m.div>

          {submitted ? (
            <m.div
              className="liquid-glass"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="lg__effect"
                style={{ filter: 'url(#lg-distortion)' }}
                aria-hidden="true"
              />
              <div className="lg__tint" aria-hidden="true" />
              <div className="lg__shine" aria-hidden="true" />
              <div className="lg__content p-8">
                <p className="font-heading text-heading-card text-text-primary mb-2">
                  Message sent!
                </p>
                <p className="font-body text-body-small text-text-secondary">
                  We'll get back to you soon.
                </p>
              </div>
            </m.div>
          ) : (
            <m.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              noValidate
            >
              <m.div variants={staggerItem}>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError('');
                  }}
                  className="input-glass"
                  required
                />
              </m.div>

              <m.div variants={staggerItem}>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  onBlur={() => {
                    if (email) {
                      const err = validateEmail(email);
                      if (err) setError(err);
                    }
                  }}
                  className="input-glass"
                  required
                  aria-describedby={error ? 'form-error' : undefined}
                />
              </m.div>

              <m.div variants={staggerItem}>
                <label htmlFor="topic" className="sr-only">
                  Topic
                </label>
                <select
                  id="topic"
                  value={topic}
                  onChange={(e) => {
                    setTopic(e.target.value);
                    if (error) setError('');
                  }}
                  className="input-glass appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>
                    What's this about?
                  </option>
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </m.div>

              <m.div variants={staggerItem}>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (error) setError('');
                  }}
                  className="input-glass resize-none min-h-[120px]"
                  required
                  rows={4}
                />
              </m.div>

              {error && (
                <p id="form-error" className="text-sm text-accent font-body" role="alert">
                  {error}
                </p>
              )}

              <m.button
                type="submit"
                className="btn-primary inline-flex w-full justify-center"
                disabled={submitting}
                variants={staggerItem}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </m.button>
            </m.form>
          )}
        </div>
    </section>
  );
}
