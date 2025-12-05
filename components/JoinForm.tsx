'use client';

import { useState } from 'react';
import { REGIONAL_DATA } from '@/data/regions';
import { CheckCircle, Loader2, User, MapPin, Phone, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export default function JoinForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    phone: '',
    email: '',
    region: '',
    constituency: '',
    membershipType: 'new' // 'new' or 'renew'
  });

  // Get constituencies based on selected region
  const activeRegion = REGIONAL_DATA.find(r => r.name === formData.region);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call (Wait 2 seconds)
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Here is where you would send data to your database later
      console.log("Form Submitted:", formData);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center border-t-4 border-swapo-green max-w-2xl mx-auto">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="text-swapo-green w-10 h-10" />
        </motion.div>
        <h3 className="text-3xl font-heading font-bold text-swapo-blue mb-4">Welcome, Comrade!</h3>
        <p className="text-gray-600 mb-8 text-lg">
          Your application has been received successfully. Your digital membership card is being processed and will be sent to <strong>{formData.phone}</strong>.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="text-swapo-red font-bold hover:underline"
        >
          Register another member
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl max-w-3xl mx-auto border-t-4 border-swapo-red">
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <User className="text-swapo-red" />
          Personal Details
        </h3>
        <p className="text-gray-500 text-sm">Please enter your details exactly as they appear on your ID.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="col-span-2">
          <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
          <input 
            required
            type="text" 
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swapo-blue outline-none"
            placeholder="e.g. Toivo Ya Toivo"
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Namibian ID Number</label>
          <input 
            required
            type="text" 
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swapo-blue outline-none"
            placeholder="ID Number"
            onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Membership Type</label>
          <select 
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swapo-blue outline-none"
            onChange={(e) => setFormData({...formData, membershipType: e.target.value})}
          >
            <option value="new">New Membership</option>
            <option value="renew">Renewal</option>
          </select>
        </div>
      </div>

      <div className="mb-8 border-t border-gray-100 pt-8">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
          <MapPin className="text-swapo-red" />
          Location
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Region</label>
            <select 
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swapo-blue outline-none"
              onChange={(e) => setFormData({...formData, region: e.target.value, constituency: ''})}
              value={formData.region}
            >
              <option value="">Select Region</option>
              {REGIONAL_DATA.map((r) => (
                <option key={r.name} value={r.name}>{r.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Constituency</label>
            <select 
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swapo-blue outline-none disabled:opacity-50"
              disabled={!formData.region}
              onChange={(e) => setFormData({...formData, constituency: e.target.value})}
              value={formData.constituency}
            >
              <option value="">
                {formData.region ? 'Select Constituency' : 'Select Region First'}
              </option>
              {activeRegion?.constituencies.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-8 border-t border-gray-100 pt-8">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
          <Phone className="text-swapo-red" />
          Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
            <input 
              required
              type="tel" 
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swapo-blue outline-none"
              placeholder="+264 81 ..."
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email (Optional)</label>
            <input 
              type="email" 
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swapo-blue outline-none"
              placeholder="comrade@example.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>
      </div>

      <button 
        disabled={isLoading}
        className="w-full py-4 bg-swapo-blue text-white font-bold rounded-xl shadow-lg hover:bg-blue-900 transition flex items-center justify-center gap-3 disabled:opacity-70"
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" /> Processing...
          </>
        ) : (
          <>
            SUBMIT APPLICATION <CreditCard size={20} />
          </>
        )}
      </button>
      
      <p className="text-center text-xs text-gray-400 mt-4">
        By submitting, you agree to the SWAPO Party Constitution and Code of Conduct.
      </p>

    </form>
  );
}