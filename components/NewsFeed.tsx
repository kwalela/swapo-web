'use client';

import { NEWS_ITEMS } from '@/data/news';
import { Calendar, ArrowRight, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsFeed() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-swapo-red font-bold tracking-widest uppercase text-sm">Media Centre</span>
            <h2 className="text-4xl font-heading font-bold text-swapo-blue mt-2">Latest Updates</h2>
          </div>
          <Link href="/media" className="hidden md:flex items-center gap-2 text-gray-600 hover:text-swapo-red transition">
            View All News <ArrowRight size={18} />
          </Link>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Featured Article (Takes 2 Columns) */}
          {NEWS_ITEMS.filter(item => item.featured).map((item) => (
            <div key={item.id} className="md:col-span-2 group cursor-pointer">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl mb-4">
                <Image 
                  src={item.image!} 
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-swapo-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {item.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <Calendar size={14} />
                {item.date}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-swapo-blue transition mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">{item.excerpt}</p>
            </div>
          ))}

          {/* 2. Side List (Smaller Items) */}
          <div className="flex flex-col gap-6">
            {NEWS_ITEMS.filter(item => !item.featured).map((item) => (
              <div key={item.id} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-swapo-blue/30 transition group cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${
                    item.category === 'Press Release' ? 'bg-gray-200 text-gray-700' : 'bg-green-100 text-green-800'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-swapo-blue transition">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 mb-4">{item.excerpt}</p>
                <div className="flex items-center gap-1 text-swapo-red text-sm font-bold">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile "View All" Button */}
        <div className="mt-8 md:hidden text-center">
          <Link href="/media" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-bold">
            View Archive
          </Link>
        </div>

      </div>
    </section>
  );
}