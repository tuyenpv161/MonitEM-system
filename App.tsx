import React, { useState } from 'react';
import { IMAGES } from './constants';
import { ProbeSpec, CaseStudy } from './types';

// --- Components ---

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-8 border-l-4 border-tecoOrange pl-4">
    <h2 className="text-2xl md:text-3xl font-bold text-tecoBlue uppercase tracking-wide">
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 mt-1 font-medium">{subtitle}</p>}
  </div>
);

const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <svg className="w-5 h-5 text-tecoOrange mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-700 leading-relaxed">{children}</span>
  </li>
);

const SpecAccordionItem = ({ 
  title, 
  isOpen, 
  onClick, 
  children 
}: { 
  title: string; 
  isOpen: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
    <button 
      className={`w-full flex justify-between items-center p-4 text-left transition-colors ${isOpen ? 'bg-tecoBlue text-white' : 'bg-gray-50 text-gray-800 hover:bg-gray-100'}`}
      onClick={onClick}
    >
      <span className="font-bold text-lg">{title}</span>
      <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isOpen && (
      <div className="p-4 bg-white animate-fade-in">
        {children}
      </div>
    )}
  </div>
);

// --- Data ---

const lowFreqProbes: ProbeSpec[] = [
  { model: "WP50", range: "10 Hz – 3 kHz", type: "Trường E & H" }
];

const highFreqProbes: ProbeSpec[] = [
  { model: "WPF3/6/8", range: "100 kHz – 3, 6, 8 GHz", type: "Trường E" },
  { model: "WPF18", range: "300 kHz – 18 GHz", type: "Trường E" },
  { model: "WPF40", range: "1 MHz – 40 GHz", type: "Trường E" },
  { model: "WPF60", range: "1 MHz – 60 GHz", type: "Trường E" },
];

const mobileProbes: ProbeSpec[] = [
  { model: "GSM, UMTS, LTE", range: "Băng tần di động", type: "Trường E" }
];

const caseStudies: CaseStudy[] = [
  {
    country: "Qatar",
    title: "FIFA World Cup 2022",
    description: "Bộ Đô thị và Môi trường (MME) giám sát an toàn bức xạ liên tục trong suốt giải đấu.",
    image: IMAGES.caseQatar,
    highlights: ["40 trạm MonitEM cố định", "Xe đo cơ động MapEM", "20 thiết bị cầm tay SMP2"]
  },
  {
    country: "Brazil",
    title: "Olympics & World Cup",
    description: "Anatel tăng gấp đôi năng lực đánh giá EMF phục vụ các sự kiện thể thao toàn cầu.",
    image: IMAGES.caseBrazil,
    highlights: ["66 trạm MonitEM + MapEM", "Website công khai dữ liệu", "Giám sát sân vận động"]
  },
  {
    country: "Tunisia",
    title: "Giám sát 5G Quốc gia",
    description: "Cơ quan ANF kiểm soát mức EMF từ các trạm 5G mới và minh bạch thông tin với người dân.",
    image: IMAGES.caseTunisia,
    highlights: ["16 trạm MonitEM", "Website public dữ liệu", "Minh bạch thông tin"]
  },
  {
    country: "Serbia",
    title: "Mạng lưới RATEL",
    description: "Hệ thống cảm biến MonitEM hoạt động liên tục từ năm 2016 trên toàn lãnh thổ.",
    image: IMAGES.caseSerbia,
    highlights: ["30 trạm MonitEM", "Hoạt động bền bỉ >5 năm", "Cảnh báo tự động"]
  }
];

// --- Main Article ---

function App() {
  const [openSpec, setOpenSpec] = useState<string | null>('high');

  const toggleSpec = (id: string) => {
    setOpenSpec(openSpec === id ? null : id);
  };

  return (
    <div className="bg-white text-slate-800 font-sans leading-relaxed selection:bg-tecoOrange selection:text-white">
      
      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        
        {/* Article Header */}
        <header className="mb-16 text-center md:text-left border-b border-gray-200 pb-12">
          <div className="inline-block px-3 py-1 bg-gray-100 text-tecoBlue text-xs font-bold tracking-widest uppercase rounded mb-4">
            Giải pháp công nghệ
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Giải Pháp Giám Sát Liên Tục <span className="text-tecoOrange">Trường Điện Từ (EMF)</span> Trong Khu Vực
          </h1>
          <p className="text-xl md:text-2xl text-tecoBlue font-medium mb-8">
            Hệ thống MonitEM – Hãng WAVECONTROL
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-center bg-blue-50 p-6 rounded-xl border border-blue-100">
            <p className="text-gray-700 italic flex-1">
              "Giải pháp đảm bảo tuân thủ tiêu chuẩn ITU-K.83, vận hành bền bỉ 24/7, mang lại sự an tâm tuyệt đối cho cộng đồng về an toàn bức xạ điện từ."
            </p>
            <div className="h-12 w-[1px] bg-blue-200 hidden md:block"></div>
            <div className="flex items-center gap-2">
               <span className="text-sm font-bold text-gray-500 uppercase">Phân phối bởi</span>
               <span className="text-lg font-bold text-tecoOrange">TECOTEC Group</span>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-16">
          <div className="prose max-w-none text-gray-600">
            <p className="mb-6">
              Sự phát triển bùng nổ của các mạng viễn thông, đặc biệt là 5G, cùng với mạng lưới điện cao thế ngày càng dày đặc đã dấy lên mối quan tâm lớn từ cộng đồng về ảnh hưởng của trường điện từ (EMF). Để giải quyết bài toán này, <strong>WAVECONTROL</strong> – đơn vị tiên phong trong lĩnh vực đo lường an toàn bức xạ (thành lập năm 1997) – đã phát triển hệ thống <strong>MonitEM</strong>.
            </p>
            <p>
              Đây là giải pháp giám sát liên tục, cho phép các cơ quan quản lý và nhà khai thác mạng viễn thông kiểm soát mức độ phơi nhiễm EMF theo thời gian thực, đảm bảo tuân thủ các quy chuẩn quốc tế như ICNIRP, FCC hay Safety Code 6.
            </p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            <img src={IMAGES.hero} alt="MonitEM Device on Pole" className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[400px]" />
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-tecoOrange">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Tại sao chọn MonitEM?</h3>
              <ul className="space-y-3">
                <CheckListItem>Giám sát 24/7/365 không gián đoạn.</CheckListItem>
                <CheckListItem>Đạt chuẩn bảo vệ IP66, chịu được thời tiết khắc nghiệt.</CheckListItem>
                <CheckListItem>Tự chủ năng lượng với tấm pin mặt trời.</CheckListItem>
                <CheckListItem>Dữ liệu minh bạch, dễ dàng truy xuất qua Web.</CheckListItem>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="mb-16">
          <SectionHeader title="Tổng Quan Hệ Thống" subtitle="Cấu trúc vận hành & Nguyên lý hoạt động" />
          
          <div className="mb-8">
            <p className="text-gray-600 mb-6">
              Hệ thống MonitEM được thiết kế để lắp đặt cố định tại các khu vực nhạy cảm (trường học, bệnh viện, khu dân cư) hoặc gần các trạm phát sóng. Hệ thống bao gồm 3 thành phần chính hoạt động đồng bộ:
            </p>
            <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm mb-6">
              <img src={IMAGES.systemArchitecture} alt="Sơ đồ nguyên lý hoạt động MonitEM" className="w-full h-auto" />
              <p className="text-center text-sm text-gray-500 mt-2 italic">Sơ đồ: Từ nguồn phát đến trung tâm giám sát</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-tecoBlue mb-2">01</div>
                <h4 className="font-bold text-gray-800 mb-2">Thu Thập</h4>
                <p className="text-sm text-gray-600">Trạm MonitEM đo cường độ trường điện từ (Probe), lưu trữ dữ liệu và toạ độ GPS.</p>
              </div>
              <div className="p-5 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-tecoOrange mb-2">02</div>
                <h4 className="font-bold text-gray-800 mb-2">Truyền Dẫn</h4>
                <p className="text-sm text-gray-600">Dữ liệu được gửi an toàn qua mạng di động (3G/4G/GPRS) về trung tâm điều khiển định kỳ.</p>
              </div>
              <div className="p-5 bg-gray-100 rounded-lg">
                <div className="text-3xl font-bold text-gray-600 mb-2">03</div>
                <h4 className="font-bold text-gray-800 mb-2">Phân Tích</h4>
                <p className="text-sm text-gray-600">Phần mềm quản lý trung tâm xử lý dữ liệu, hiển thị cảnh báo và xuất bản báo cáo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Software */}
        <section className="mb-16">
          <SectionHeader title="Tính Năng & Phần Mềm" />
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-600 mb-4">
                Điểm mạnh của MonitEM nằm ở sự linh hoạt và khả năng quản lý tập trung. Phần mềm điều khiển cho phép người quản trị thiết lập các ngưỡng báo động, tần suất đo và tự động so sánh với các quy chuẩn quốc tế.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-tecoBlue text-white flex items-center justify-center font-bold mr-4 shrink-0">A</div>
                    <div>
                        <h4 className="font-bold text-gray-800">Tuân thủ ITU-K.83</h4>
                        <p className="text-sm text-gray-600">Đáp ứng tiêu chuẩn vàng cho việc giám sát mức điện từ trường liên tục.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-tecoOrange text-white flex items-center justify-center font-bold mr-4 shrink-0">B</div>
                    <div>
                        <h4 className="font-bold text-gray-800">Cảnh báo thời gian thực</h4>
                        <p className="text-sm text-gray-600">Nhận thông báo tức thì qua Email/SMS khi chỉ số vượt ngưỡng an toàn hoặc pin yếu, lỗi hệ thống.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center font-bold mr-4 shrink-0">C</div>
                    <div>
                        <h4 className="font-bold text-gray-800">Giao tiếp công cộng</h4>
                        <p className="text-sm text-gray-600">Dễ dàng tạo trang Web công khai để người dân có thể xem mức EMF tại khu vực sinh sống, tăng cường sự tin tưởng.</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
               <img src={IMAGES.software} alt="Giao diện phần mềm quản lý" className="rounded-lg shadow-md border border-gray-100" />
               <img src={IMAGES.featuresDiagram} alt="Các tính năng phần cứng" className="rounded-lg shadow-md border border-gray-100" />
            </div>
          </div>
        </section>

        {/* Technical Specs - Accordion Style */}
        <section className="mb-16">
          <SectionHeader title="Thông Số Kỹ Thuật" subtitle="Các loại đầu đo (Probes) tuỳ chọn" />
          
          <div className="bg-white">
            <p className="mb-6 text-gray-600">Hệ thống MonitEM hỗ trợ thay đổi đầu đo linh hoạt tuỳ theo mục đích giám sát: từ tần số thấp (đường dây tải điện) đến tần số cao (viễn thông, radar).</p>
            
            <SpecAccordionItem 
              title="1. Đầu đo Tần số cao (High Frequency)" 
              isOpen={openSpec === 'high'} 
              onClick={() => toggleSpec('high')}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                 <div className="flex-1 w-full">
                    <p className="mb-3 text-sm text-gray-600">Dùng cho giám sát trạm BTS, Radar, Wi-Fi, 5G.</p>
                    <table className="w-full text-left border-collapse text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border border-gray-200">Model</th>
                                <th className="p-2 border border-gray-200">Dải tần số</th>
                            </tr>
                        </thead>
                        <tbody>
                            {highFreqProbes.map((p, i) => (
                                <tr key={i} className="even:bg-gray-50">
                                    <td className="p-2 border border-gray-200 font-medium text-tecoBlue">{p.model}</td>
                                    <td className="p-2 border border-gray-200">{p.range}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                 </div>
                 <img src={IMAGES.probes} alt="High Frequency Probes" className="w-32 object-contain mx-auto md:mx-0" />
              </div>
            </SpecAccordionItem>

            <SpecAccordionItem 
              title="2. Đầu đo Băng tần di động (Mobile Bands)" 
              isOpen={openSpec === 'mobile'} 
              onClick={() => toggleSpec('mobile')}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                 <div className="flex-1 w-full">
                    <p className="mb-3 text-sm text-gray-600">Đầu đo 3-Band và 4-Band chuyên dụng cho các nhà mạng di động.</p>
                    <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700">
                        {mobileProbes.map((p, i) => (
                            <li key={i}><strong>{p.model}:</strong> {p.range} ({p.type})</li>
                        ))}
                        <li>Loại bỏ ảnh hưởng từ các nguồn phát sóng khác ngoài băng tần quan tâm.</li>
                    </ul>
                 </div>
              </div>
            </SpecAccordionItem>

            <SpecAccordionItem 
              title="3. Đầu đo Tần số thấp (Low Frequency)" 
              isOpen={openSpec === 'low'} 
              onClick={() => toggleSpec('low')}
            >
               <div className="flex flex-col md:flex-row gap-6 items-start">
                 <div className="flex-1 w-full">
                    <p className="mb-3 text-sm text-gray-600">Dùng cho giám sát đường dây tải điện cao thế, trạm biến áp.</p>
                    <table className="w-full text-left border-collapse text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border border-gray-200">Model</th>
                                <th className="p-2 border border-gray-200">Dải tần số</th>
                                <th className="p-2 border border-gray-200">Loại trường</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lowFreqProbes.map((p, i) => (
                                <tr key={i}>
                                    <td className="p-2 border border-gray-200 font-medium text-tecoBlue">{p.model}</td>
                                    <td className="p-2 border border-gray-200">{p.range}</td>
                                    <td className="p-2 border border-gray-200">{p.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                 </div>
              </div>
            </SpecAccordionItem>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <SectionHeader title="Dự Án Tiêu Biểu" subtitle="MonitEM trên toàn thế giới" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                    <span className="absolute bottom-0 left-0 bg-tecoBlue text-white text-xs px-3 py-1 font-bold">
                        {study.country}
                    </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                    <h4 className="font-bold text-lg text-gray-800 mb-2">{study.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 flex-1">{study.description}</p>
                    <div className="border-t border-gray-100 pt-3">
                        <p className="text-xs font-bold text-tecoOrange mb-1">Điểm nổi bật:</p>
                        <ul className="text-xs text-gray-500 space-y-1">
                            {study.highlights.map((h, i) => <li key={i}>• {h}</li>)}
                        </ul>
                    </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
            <img src={IMAGES.caseColombia} alt="Colombia Map" className="h-32 w-auto rounded border border-gray-200" />
            <img src={IMAGES.caseTurkey} alt="Turkey Map" className="h-32 w-auto rounded border border-gray-200" />
            <img src={IMAGES.overviewUnit} alt="MonitEM Unit" className="h-32 w-auto rounded border border-gray-200" />
          </div>
        </section>

        {/* Call to Action Box */}
        <div className="bg-gradient-to-r from-tecoBlue to-blue-800 rounded-xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Tư Vấn Giải Pháp Giám Sát EMF</h3>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            TECOTEC Group cung cấp dịch vụ trọn gói từ khảo sát, lắp đặt đến bảo trì hệ thống Wavecontrol MonitEM. Liên hệ ngay để nhận báo giá chi tiết.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="tel:+842437549777" className="px-6 py-3 bg-tecoOrange hover:bg-orange-600 text-white font-bold rounded shadow transition-colors">
                Hotline: +84 24 3754 9777
             </a>
             <a href="mailto:contact@tecotec.com.vn" className="px-6 py-3 bg-white text-tecoBlue hover:bg-gray-100 font-bold rounded shadow transition-colors">
                Gửi Email Yêu Cầu
             </a>
          </div>
          <p className="mt-6 text-xs text-blue-300">
            Địa chỉ: Tầng 2, Toà nhà CT3A, KĐT Mễ Trì Thượng, Nam Từ Liêm, Hà Nội
          </p>
        </div>

      </article>
    </div>
  );
}

export default App;