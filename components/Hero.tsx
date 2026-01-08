import React from 'react';
import { IMAGES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="MonitEM System" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white max-w-6xl">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded bg-tecoOrange text-white text-sm font-bold tracking-wider mb-4">
            GIẢI PHÁP TECOTEC
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Giải Pháp Giám Sát Liên Tục <br/>
            <span className="text-tecoOrange">Trường Điện Từ (EMF)</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            MonitEM – Hãng WAVECONTROL
          </p>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl border-l-4 border-tecoBlue pl-4">
            Hệ thống giám sát 24/7 bảo vệ cộng đồng, tuân thủ tiêu chuẩn ITU-K.83, vận hành bền bỉ trong mọi điều kiện thời tiết.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#solution" 
              className="px-8 py-3 bg-tecoBlue hover:bg-blue-700 text-white font-semibold rounded shadow-lg transition-transform transform hover:-translate-y-1 text-center"
            >
              Khám Phá Giải Pháp
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-tecoBlue text-white font-semibold rounded transition-colors text-center"
            >
              Liên Hệ Tư Vấn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};