// src/components/ui/NewsletterSignup.tsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await emailjs.send(
        'service_idheosg',
        'template_9jrnlge',
        { email: email },
        'SlrMQzyVcuYaqCBBV'
      );
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setStatus('error');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h3 className="font-bold text-xl mb-3">Stay Updated</h3>
      <p className="mb-4">Get notified when I publish new projects or articles</p>
      
      {status === 'success' && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200 rounded-md">
          Thanks for subscribing! You will receive updates soon.
        </div>
      )}
      
      {status === 'error' && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200 rounded-md">
          Something went wrong. Please try again.
        </div>
      )}
      
      <div className="flex">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-2 rounded-l-md" 
          placeholder="Your email address"
          required
          disabled={status === 'loading' || status === 'success'}
        />
        <button 
          type="submit"
          className={`px-4 py-2 rounded-r-md text-white ${
            status === 'loading' 
              ? 'bg-blue-400' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
    </form>
  );
}