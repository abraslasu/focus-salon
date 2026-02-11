
import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'loading'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section id="join-form" className="py-16 md:py-24 bg-[#F5F3F1] scroll-mt-20">
      <div className="mx-fluid">
        <div className="max-w-2xl">
          <h3 className="fluid-h3 mb-4 md:mb-6">Alătură-te conversației.</h3>
          <p className="text-gray-600 fluid-body mb-6 md:mb-8 leading-relaxed">
            Lasă-ne adresa ta de email pentru a primi invitație la urmatorul salon.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 sm:items-stretch">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresa ta de email"
              className="flex-grow fluid-body px-4 md:px-6 py-3 md:py-4 bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors h-[50px] md:h-[60px]"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 md:px-10 py-3 md:py-4 bg-black text-white hover:bg-gray-800 transition-colors uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold disabled:bg-gray-400 h-[50px] md:h-[60px]"
            >
              {status === 'loading' ? 'SE TRIMITE...' : 'TRIMITE'}
            </button>
          </form>
          
          {status === 'success' && (
            <p className="mt-4 fluid-body text-green-600 font-medium italic animate-in slide-in-from-top-2 duration-300">
              Mulțumim! Te vom contacta în curând.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailForm;
