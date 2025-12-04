'use client';

import { useState } from 'react';
import { REGIONAL_DATA } from '@/data/regions';
import { MapPin, Phone, Mail, User, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConstituencyFinder() {
  const [selectedRegionName, setSelectedRegionName] = useState('');
  const [selectedConstituency, setSelectedConstituency] = useState('');

  // Find the full data object for the selected region
  const activeRegion = REGIONAL_DATA.find(r => r.name === selectedRegionName);

  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-swapo-blue mb-4">
            Governance Starts at Home
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your local party structures, regional coordinators, and constituency offices. 
            Connect with the leaders in your community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: THE FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-swapo-green">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="text-swapo-red" />
              Locate Your Branch
            </h3>

            {/* Region Select */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Select Region</label>
              <select 
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swapo-blue outline-none transition"
                onChange={(e) => {
                  setSelectedRegionName(e.target.value);
                  setSelectedConstituency(''); // Reset constituency when region changes
                }}
                value={selectedRegionName}
              >
                <option value="">-- Choose a Region --</option>
                {REGIONAL_DATA.map((r) => (
                  <option key={r.name} value={r.name}>{r.name} Region</option>
                ))}
              </select>
            </div>

            {/* Constituency Select (Disabled until region picked) */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Select Constituency</label>
              <select 
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swapo-blue outline-none transition disabled:opacity-50"
                disabled={!selectedRegionName}
                onChange={(e) => setSelectedConstituency(e.target.value)}
                value={selectedConstituency}
              >
                <option value="">
                  {selectedRegionName ? '-- Choose Constituency --' : '-- Select Region First --'}
                </option>
                {activeRegion?.constituencies.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {!selectedConstituency && (
              <div className="p-4 bg-blue-50 text-blue-800 rounded-lg text-sm">
                ℹ️ Select your location to see contact details.
              </div>
            )}
          </div>

          {/* RIGHT: THE RESULTS CARD */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode='wait'>
              {selectedRegionName ? (
                <motion.div 
                  key={selectedRegionName}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-swapo-blue text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-swapo-red rounded-full opacity-20 blur-3xl" />

                  <h3 className="text-2xl font-heading font-bold mb-1">{selectedRegionName} Region</h3>
                  <p className="text-swapo-green font-bold mb-6 tracking-wide">REGIONAL HEADQUARTERS</p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-lg">
                        <MapPin className="text-swapo-yellow" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Physical Address</p>
                        <p className="font-medium text-lg">{activeRegion?.office.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-lg">
                        <Phone className="text-swapo-yellow" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Phone Contact</p>
                        <p className="font-medium text-lg">{activeRegion?.office.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-lg">
                        <Mail className="text-swapo-yellow" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Email Address</p>
                        <p className="font-medium text-lg">{activeRegion?.office.email}</p>
                      </div>
                    </div>
                  </div>

                  {selectedConstituency && (
                    <div className="mt-8 pt-6 border-t border-white/20 animate-fade-in">
                       <p className="text-sm text-gray-300 mb-2">Your Constituency</p>
                       <div className="flex justify-between items-center bg-white/10 p-4 rounded-lg">
                          <span className="font-bold text-xl">{selectedConstituency}</span>
                          <ChevronRight />
                       </div>
                    </div>
                  )}

                </motion.div>
              ) : (
                // Empty State Placeholder
                <div className="h-full flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 rounded-2xl p-8">
                  <User size={64} className="mb-4 text-gray-300" />
                  <p>Regional details will appear here...</p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}