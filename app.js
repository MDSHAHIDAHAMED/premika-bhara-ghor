/**
 * প্রেমিক ভাড়া ঘর (Boyfriend for Rent)
 * Parody / Satirical Single-Page Web Application
 * Dynamic Data & Interactivity Module
 */

// Dataset Definitions
const APP_DATA = {
  profiles: [
    {
      id: 'raju',
      initial: 'রা',
      name: 'রাজু',
      category: 'নিরব-লাজুক টাইপ',
      categoryKey: 'shy',
      avatarColor: '#9E3B2B',
      rating: 5,
      description: 'চোখে চোখ রেখে কথা বলার অনুশীলন করছে। দীর্ঘ নীরবতায় দক্ষ, প্রয়োজনে মনোরম।',
      demand: 82,
      punctuality: 96,
      status: 'আজ ফ্রি আছে',
      specialty: 'অযথা তর্ক করে না, বাধ্যগত শ্রোতা'
    },
    {
      id: 'shuvo',
      initial: 'শু',
      name: 'শুভ',
      category: 'দুষ্টু-মিষ্টি টাইপ',
      categoryKey: 'playful',
      avatarColor: '#2D5A43',
      rating: 5,
      description: 'ফাজলামিতে ওস্তাদ, ছবি তোলায় পটু। সেলফি অ্যাঙ্গেল খুঁজে বের করতে জানে।',
      demand: 95,
      punctuality: 88,
      status: 'আজ ফ্রি আছে',
      isFeatured: true,
      specialty: 'ডিএসএলআর কোয়ালিটি ছবি ও ক্যাপশন জেনারেটর'
    },
    {
      id: 'kamal',
      initial: 'কা',
      name: 'কামাল মামা',
      category: 'পারিবারিক ফাংশন স্পেশালিস্ট',
      categoryKey: 'family',
      avatarColor: '#243C66',
      rating: 5,
      description: 'মুরুব্বিদের মন জয়ে সিদ্ধহস্ত। বিয়ের কথাবার্তায় দর কষাকষিতেও এগিয়ে।',
      demand: 91,
      punctuality: 94,
      status: 'বিয়েবাড়ি স্পেশাল',
      specialty: 'চা-নাস্তা পরিবেশন ও খালাদের সাথে মিষ্টি আলাপ'
    },
    {
      id: 'tanvir',
      initial: 'তা',
      name: 'তানভীর',
      category: 'কবি ও আবৃত্তিকার',
      categoryKey: 'poet',
      avatarColor: '#C4881C',
      rating: 5,
      description: 'প্রতিটি মুহূর্তের জন্য প্রস্তুত একটি কবিতা। লোডশেডিংয়েও থামে না।',
      demand: 87,
      punctuality: 85,
      status: 'বৃষ্টির দিনে ব্যস্ত',
      specialty: 'হুমায়ূন আহমেদ ও জীবনানন্দ দাশের কোটেশন স্পেশালিস্ট'
    },
    {
      id: 'sakib',
      initial: 'সা',
      name: 'সাকিব',
      category: 'টেক সাপোর্ট বয়ফ্রেন্ড',
      categoryKey: 'playful',
      avatarColor: '#45382E',
      rating: 5,
      description: 'ল্যাপটপে উইন্ডোজ ইনস্টল, রাউটার রিস্টার্ট এবং ইনস্টাগ্রাম রিলসে মসৃণ স্লো-মো এডিটর।',
      demand: 89,
      punctuality: 92,
      status: 'অনলাইনে সক্রিয়',
      specialty: 'ওয়াইফাই পাসওয়ার্ড উদ্ধার ও ফোন চার্জার বহন'
    },
    {
      id: 'abir',
      initial: 'আ',
      name: 'আবীর',
      category: 'এক্স-কে জেলাস বানানোর ওস্তাদ',
      categoryKey: 'family',
      avatarColor: '#8C3852',
      rating: 5,
      description: 'রেস্তোরাঁয় চেয়ার টেনে দেয়া, চশমা ঠিক করে ডিপ আই-কন্টাক্ট রাখা এবং হাসিমুখে ফটো পোজ।',
      demand: 98,
      punctuality: 90,
      status: 'টপ ট্রেন্ডিং',
      specialty: 'জনসমক্ষে অযাচিত কেয়ার প্রদর্শন'
    }
  ],

  packages: [
    {
      id: 'hourly',
      name: 'ঘণ্টা প্যাকেজ',
      duration: '১ ঘণ্টা',
      price: '৳৫০০',
      perks: 'শুধু আড্ডা ও এক কাপ চা',
      badge: null
    },
    {
      id: 'half-day',
      name: 'হাফ-ডে প্যাকেজ',
      duration: '৪ ঘণ্টা',
      price: '৳১৫০০',
      perks: 'শপিং মলে সঙ্গ, ব্যাগ বহন ফ্রি',
      badge: 'জনপ্রিয়'
    },
    {
      id: 'full-day',
      name: 'ফুল-ডে প্যাকেজ',
      duration: '৮ ঘণ্টা',
      price: '৳৩০০০',
      perks: 'পারিবারিক প্রশ্নোত্তর অন্তর্ভুক্ত',
      badge: 'সেরা মান'
    },
    {
      id: 'eid-special',
      name: 'ঈদ স্পেশাল',
      duration: '৩ দিন',
      price: '৳৫০০০',
      perks: 'কোরবানির হাট দরদামসহ',
      badge: null
    },
    {
      id: 'wedding-special',
      name: 'বিয়েবাড়ি স্পেশাল',
      duration: '২ দিন',
      price: '৳৮০০০',
      perks: 'গায়ে হলুদের নাচেও অংশগ্রহণ (অনুরোধক্রমে)',
      badge: 'হট চয়েস'
    },
    {
      id: 'exam-special',
      name: 'পরীক্ষার সিজন স্পেশাল',
      duration: '৭ দিন',
      price: '৳৪০০০',
      perks: 'মন ভালো রাখা ও নোট ফটোকপি সার্ভিসসহ',
      badge: null
    }
  ],

  testimonials: [
    {
      id: 1,
      quote: '“শাশুড়ির সব প্রশ্নের জবাব দিয়েছে, বিরিয়ানির প্রশংসাও করেছে। ৫-এ ৫!”',
      author: 'রুমা',
      city: 'ঢাকা',
      tag: 'সন্তুষ্ট গ্রাহক'
    },
    {
      id: 2,
      quote: '“রিকশা ভাড়া নিজেই দিল, আমি নিজেই অবাক হয়ে গেলাম!”',
      author: 'নাদিয়া',
      city: 'চট্টগ্রাম',
      tag: 'সন্তুষ্ট গ্রাহক'
    },
    {
      id: 3,
      quote: '“গায়ে হলুদে এমন নাচল যে চাচারাও ভিডিও করে ফেলল।”',
      author: 'সাবরিনা',
      city: 'সিলেট',
      tag: 'সন্তুষ্ট গ্রাহক'
    }
  ],

  features: [
    {
      icon: 'clock',
      title: 'সময়ানুবর্তী',
      description: 'রিকশার জ্যাম বা লঞ্চ মিস — কোনো অজুহাত চলবে না। ঠিক সময়ে, ঠিক জায়গায় হাজির।'
    },
    {
      icon: 'coffee',
      title: 'পারিবারিক দক্ষতা',
      description: 'খালা-ফুফুদের প্রশ্নবাণ সামলাতে প্রশিক্ষণপ্রাপ্ত। চা খাওয়ার সময় হাসিমুখ বাধ্যতামূলক।'
    },
    {
      icon: 'book',
      title: 'রোমান্টিক ডায়লগ প্যাকেজ',
      description: 'রবীন্দ্রনাথ থেকে হুমায়ূন আহমেদ পর্যন্ত, চাহিদা অনুযায়ী উদ্ধৃতি সরবরাহ করা হয়।'
    }
  ],

  faqs: [
    {
      q: 'সত্যি সত্যি কি বয়ফ্রেন্ড পাওয়া যাবে?',
      a: 'না ভাই ও বোনেরা! এটি একটি ১০০% কাল্পনিক ও ব্যঙ্গাত্মক (Parody) ওয়েবসাইট। একঘেয়ে দৈনন্দিন জীবনে নিছক একটু হাস্যরস ও হাসির খোরাক দিতেই এটি তৈরি করা হয়েছে। হাসুন, মজা নিন এবং বন্ধুদের সাথে শেয়ার করে তাদের চমকে দিন!'
    },
    {
      q: 'যদি প্রেমিক কোনো রোমান্টিক ডায়লগ ভুলে যায়?',
      a: 'আমাদের ব্যাকআপ টেলিপ্রম্পটার নেই, তবে আমাদের প্রতিনিধিরা চট করে কাঁচুমাচু মুখে চায়ের দোকানে নিয়ে গিয়ে কিংবা "তুমি আজ অনেক মিষ্টি লাগছ" বলে পরিস্থিতি সামলাতে দক্ষ।'
    },
    {
      q: 'বিয়েবাড়িতে খাওয়া-দাওয়া ও গিফটের খরচ কার?',
      a: 'অবশ্যই গ্রাহকের বা কনে/বর পক্ষের! আমাদের প্রেরিত প্রেমিক শুধু বোরহানি, রোস্ট আর বিরিয়ানিতে কাজু-কিশমিশের ভূয়সী প্রশংসা করা পর্যন্ত দায়বদ্ধ।'
    },
    {
      q: 'রিকশার ভাড়া কি প্রেমিক দেবে নাকি আমি?',
      a: 'প্যাকেজের নিয়ম অনুযায়ী প্রেমিক মানিব্যাগে হাত ঢুকিয়ে "আরে আমি দিচ্ছি তো!" বলে নাটুকে ভাব ফুটিয়ে তুলবে। তবে বুদ্ধিমান গ্রাহক হিসেবে বাকিটা আপনাকে বুঝে নিতে হবে।'
    },
    {
      q: 'পেমেন্ট মেথড কী? বিকাশ নাকি নগদ?',
      a: 'যেহেতু সেবাটি কাল্পনিক, কোনো আসল টাকা নেওয়া হয় না। আপনার একটি প্রাণখোলা হাসি আর সামাজিক যোগাযোগমাধ্যমে এই সাইট শেয়ার করাই আমাদের অমূল্য পারিশ্রমিক!'
    }
  ]
};

// Application State
let currentSpotlightIndex = 1; // Default to 'Shuvo'
let activeProfileFilter = 'all';

// Render Feature Cards
function renderFeatures() {
  const container = document.getElementById('features-container');
  if (!container) return;

  const icons = {
    clock: `<svg class="w-7 h-7 text-[#9E3B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`,
    coffee: `<svg class="w-7 h-7 text-[#2D5A43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
            </svg>`,
    book: `<svg class="w-7 h-7 text-[#C4881C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>`
  };

  container.innerHTML = APP_DATA.features.map(f => `
    <div class="retro-card p-6 flex flex-col justify-between bg-white border border-[#E5DFD3] rounded-2xl hover:border-[#D3C9B8]">
      <div>
        <div class="w-12 h-12 rounded-xl bg-[#FAF6EE] flex items-center justify-center mb-4 border border-[#EFE8DA]">
          ${icons[f.icon] || ''}
        </div>
        <h3 class="text-xl font-bold text-[#2B2118] mb-2">${f.title}</h3>
        <p class="text-[#5F5245] text-sm leading-relaxed">${f.description}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-[#F2ECE0] flex items-center justify-between text-xs text-[#2D5A43] font-semibold">
        <span>১০০% প্রমাণিত পারফরম্যান্স</span>
        <span>✓ সার্টিফাইড</span>
      </div>
    </div>
  `).join('');
}

// Render Spotlight Hero Card
function renderSpotlightCard() {
  const container = document.getElementById('spotlight-card-container');
  if (!container) return;

  const boy = APP_DATA.profiles[currentSpotlightIndex] || APP_DATA.profiles[1];

  // Convert number to Bengali digits
  const toBengali = num => num.toString().replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);

  container.innerHTML = `
    <div class="retro-card p-6 md:p-7 bg-[#FFFFFF] border-2 border-[#E5DFD3] rounded-3xl shadow-xl relative overflow-hidden transition-all duration-300">
      <!-- Background subtle accent -->
      <div class="absolute -top-10 -right-10 w-28 h-28 bg-[#2D5A43]/5 rounded-full pointer-events-none"></div>

      <!-- Top Row: Avatar & Info -->
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-md"
             style="background-color: ${boy.avatarColor};">
          ${boy.initial}
        </div>
        <div class="flex-grow">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-2xl font-bold text-[#2B2118]">${boy.name}</h3>
            <span class="text-xs bg-[#EBF4EE] text-[#2D5A43] font-semibold px-2.5 py-0.5 rounded-full border border-[#D5E7DB] flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-[#2D5A43] pulse-dot"></span>
              ${boy.status}
            </span>
          </div>
          <p class="text-sm text-[#5F5245] mt-0.5">${boy.category}</p>
        </div>
      </div>

      <!-- Progress Bars -->
      <div class="space-y-4 mb-6">
        <div>
          <div class="flex justify-between text-xs font-semibold text-[#5F5245] mb-1.5">
            <span>চাহিদা</span>
            <span class="font-bold text-[#2D5A43]">${toBengali(boy.demand)}%</span>
          </div>
          <div class="w-full h-2.5 bg-[#EAE4D7] rounded-full overflow-hidden p-0.5">
            <div class="h-full rounded-full bg-[#2D5A43] progress-bar-fill" style="width: ${boy.demand}%;"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs font-semibold text-[#5F5245] mb-1.5">
            <span>পাংচুয়ালিটি</span>
            <span class="font-bold text-[#D35400]">${toBengali(boy.punctuality)}%</span>
          </div>
          <div class="w-full h-2.5 bg-[#EAE4D7] rounded-full overflow-hidden p-0.5">
            <div class="h-full rounded-full bg-[#D35400] progress-bar-fill" style="width: ${boy.punctuality}%;"></div>
          </div>
        </div>
      </div>

      <!-- Footer Action -->
      <div class="pt-4 border-t border-[#F2ECE0] flex items-center justify-between gap-3">
        <button onclick="cycleSpotlightBoy()" class="text-xs text-[#5F5245] hover:text-[#2B2118] flex items-center gap-1 font-medium underline underline-offset-2 transition-colors">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          অন্য মডেল দেখুন
        </button>
        <button onclick="openBookingModal('${boy.id}', '')" class="text-xs bg-[#2D5A43] hover:bg-[#1E3F2F] text-white px-4 py-2 rounded-full font-semibold transition-all shadow-sm">
          ইনিই চাই — বুক করুন
        </button>
      </div>
    </div>
  `;
}

function cycleSpotlightBoy() {
  currentSpotlightIndex = (currentSpotlightIndex + 1) % APP_DATA.profiles.length;
  renderSpotlightCard();
}

// Render Pricing / Receipt Table
function renderPricingTable() {
  const container = document.getElementById('pricing-rows-container');
  if (!container) return;

  container.innerHTML = APP_DATA.packages.map(pkg => `
    <tr class="receipt-row cursor-pointer group" onclick="openBookingModal('', '${pkg.id}')">
      <td class="py-4 px-4 sm:px-6 font-semibold text-[#2B2118]">
        <div class="flex items-center gap-2">
          <span>${pkg.name}</span>
          ${pkg.badge ? `<span class="text-[11px] bg-[#FAF2EB] text-[#9E3B2B] px-2 py-0.5 rounded-full border border-[#ECCDBE] font-medium">${pkg.badge}</span>` : ''}
        </div>
      </td>
      <td class="py-4 px-4 sm:px-6 text-[#5F5245] text-sm whitespace-nowrap">${pkg.duration}</td>
      <td class="py-4 px-4 sm:px-6 font-bold text-[#9E3B2B] text-base whitespace-nowrap">${pkg.price}</td>
      <td class="py-4 px-4 sm:px-6 text-[#5F5245] text-sm hidden md:table-cell">${pkg.perks}</td>
      <td class="py-4 px-4 sm:px-6 text-right">
        <button class="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#FAF7EE] group-hover:bg-[#9E3B2B] text-[#9E3B2B] group-hover:text-white border border-[#9E3B2B] transition-all">
          বুক করুন
        </button>
      </td>
    </tr>
  `).join('');
}

// Render Profile Cards
function renderProfiles(filteredCategory = 'all') {
  const container = document.getElementById('profiles-container');
  if (!container) return;

  const filtered = filteredCategory === 'all' 
    ? APP_DATA.profiles 
    : APP_DATA.profiles.filter(p => p.categoryKey === filteredCategory);

  container.innerHTML = filtered.map(p => `
    <div class="retro-card p-6 bg-[#FFFFFF] border border-[#E5DFD3] rounded-2xl flex flex-col justify-between hover:border-[#2B2118]/40 transition-all duration-300">
      <div>
        <!-- Profile Header -->
        <div class="flex items-center gap-3.5 mb-3">
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0 shadow-sm"
               style="background-color: ${p.avatarColor};">
            ${p.initial}
          </div>
          <div>
            <h4 class="text-lg font-bold text-[#2B2118] leading-tight">${p.name}</h4>
            <p class="text-xs text-[#7E7063] mt-0.5">${p.category}</p>
          </div>
        </div>

        <!-- 5 Gold Stars -->
        <div class="flex items-center gap-1 text-[#E5A93C] text-sm mb-3">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          <span class="text-xs text-[#7E7063] ml-1 font-semibold">৫.০</span>
        </div>

        <!-- Description -->
        <p class="text-[#4A3B32] text-sm leading-relaxed mb-4">
          ${p.description}
        </p>
      </div>

      <!-- Action Button -->
      <div class="pt-3 border-t border-[#F4EFE2] flex items-center justify-between">
        <span class="text-xs text-[#2D5A43] font-medium bg-[#F0F6F2] px-2 py-0.5 rounded">
          ${p.status}
        </span>
        <button onclick="openBookingModal('${p.id}', '')" 
                class="text-xs bg-[#FAF7EE] hover:bg-[#9E3B2B] text-[#9E3B2B] hover:text-white font-semibold px-3 py-1.5 rounded-full border border-[#9E3B2B] transition-all">
          বুক করুন
        </button>
      </div>
    </div>
  `).join('');
}

// Filter profiles tab
function setProfileFilter(category) {
  activeProfileFilter = category;
  
  // Update UI active buttons
  document.querySelectorAll('.filter-pill-btn').forEach(btn => {
    if (btn.getAttribute('data-filter') === category) {
      btn.classList.add('bg-[#2B2118]', 'text-white');
      btn.classList.remove('bg-white', 'text-[#5F5245]');
    } else {
      btn.classList.remove('bg-[#2B2118]', 'text-white');
      btn.classList.add('bg-white', 'text-[#5F5245]');
    }
  });

  renderProfiles(category);
}

// Render Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  container.innerHTML = APP_DATA.testimonials.map(t => `
    <div class="testimonial-card flex flex-col justify-between">
      <p class="text-[#2B2118] font-medium text-base mb-6 leading-relaxed italic">
        ${t.quote}
      </p>
      <div>
        <div class="text-sm font-bold text-[#5F5245] mb-2">— ${t.author}, ${t.city}</div>
        <span class="verified-tag">${t.tag}</span>
      </div>
    </div>
  `).join('');
}

// Render FAQs
function renderFAQs() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = APP_DATA.faqs.map((faq, idx) => `
    <div class="border border-[#E5DFD3] rounded-xl overflow-hidden bg-white">
      <button class="w-full text-left py-4 px-5 flex items-center justify-between font-bold text-[#2B2118] hover:bg-[#FAF7EE] transition-colors"
              onclick="toggleFAQ(${idx})">
        <span class="text-base">${faq.q}</span>
        <svg id="faq-icon-${idx}" class="w-5 h-5 text-[#7E7063] transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div id="faq-answer-${idx}" class="hidden px-5 pb-4 pt-1 text-sm text-[#5F5245] leading-relaxed border-t border-[#F2ECE0] bg-[#FCFAF4]">
        ${faq.a}
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!answer || !icon) return;

  const isHidden = answer.classList.contains('hidden');
  
  // Close all other FAQs
  APP_DATA.faqs.forEach((_, i) => {
    const a = document.getElementById(`faq-answer-${i}`);
    const ic = document.getElementById(`faq-icon-${i}`);
    if (a && ic) {
      a.classList.add('hidden');
      ic.classList.remove('rotate-180');
    }
  });

  if (isHidden) {
    answer.classList.remove('hidden');
    icon.classList.add('rotate-180');
  }
}

// Populate Modal Select Dropdowns
function populateModalDropdowns() {
  const profileSelect = document.getElementById('modal-profile-select');
  const packageSelect = document.getElementById('modal-package-select');

  if (profileSelect) {
    profileSelect.innerHTML = '<option value="">যেকোনো উপলব্ধ প্রেমিক (র‍্যান্ডম বরাদ্দ)</option>' + 
      APP_DATA.profiles.map(p => `
        <option value="${p.id}">${p.name} (${p.category})</option>
      `).join('');
  }

  if (packageSelect) {
    packageSelect.innerHTML = '<option value="">প্যাকেজ নির্বাচন করুন...</option>' + 
      APP_DATA.packages.map(pkg => `
        <option value="${pkg.id}">${pkg.name} — ${pkg.price} (${pkg.duration})</option>
      `).join('');
  }
}

// Modal Controls
function openBookingModal(profileId = '', packageId = '') {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  // Reset & prepare form
  populateModalDropdowns();
  
  if (profileId) {
    const pSelect = document.getElementById('modal-profile-select');
    if (pSelect) pSelect.value = profileId;
  }
  
  if (packageId) {
    const pkgSelect = document.getElementById('modal-package-select');
    if (pkgSelect) pkgSelect.value = packageId;
  }

  // Set default date to today/tomorrow
  const dateInput = document.getElementById('modal-date-input');
  if (dateInput && !dateInput.value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  // Hide success card if visible, show form
  document.getElementById('booking-form-view').classList.remove('hidden');
  document.getElementById('booking-voucher-view').classList.add('hidden');

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Optional Supabase Configuration
// If you want to connect Supabase Cloud PostgreSQL, paste your credentials here or leave empty for built-in /api/bookings
const SUPABASE_CONFIG = {
  url: '', // e.g. 'https://your-project.supabase.co'
  key: ''  // e.g. 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};

// Global cache of loaded bookings
let cachedBookings = [];

// Booking Form Submission & Database Storage
async function handleBookingSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('modal-name-input');
  const phoneInput = document.getElementById('modal-phone-input');
  const profileSelect = document.getElementById('modal-profile-select');
  const packageSelect = document.getElementById('modal-package-select');
  const dateInput = document.getElementById('modal-date-input');
  const noteInput = document.getElementById('modal-note-input');
  const submitBtn = e.target.querySelector('button[type="submit"]');

  const customerName = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const selectedProfileId = profileSelect.value;
  const selectedPackageId = packageSelect.value;
  const bookingDate = dateInput.value;
  const customerNote = noteInput ? noteInput.value.trim() : '';

  if (!customerName) {
    showToast('দয়া করে আপনার নাম লিখুন!');
    nameInput.focus();
    return;
  }

  if (!phone || phone.length < 6) {
    showToast('একটি বৈধ মোবাইল নম্বর দিন!');
    phoneInput.focus();
    return;
  }

  // Retrieve details
  const profile = APP_DATA.profiles.find(p => p.id === selectedProfileId) || {
    name: 'ম্যানেজমেন্ট চয়েস (সারপ্রাইজ বয়ফ্রেন্ড)',
    category: 'অল-রাউন্ডার',
    avatarColor: '#2D5A43'
  };

  const pkg = APP_DATA.packages.find(p => p.id === selectedPackageId) || {
    name: 'স্ট্যান্ডার্ড কাপল প্যাকেজ',
    price: '৳১০০০',
    duration: '২ ঘণ্টা',
    perks: 'হালকা আড্ডা ও ছবি তোলা'
  };

  // Generate unique token number
  const tokenNumber = 'GF-LOL-' + Math.floor(1000 + Math.random() * 9000);

  const bookingPayload = {
    token: tokenNumber,
    name: customerName,
    phone: phone,
    profileId: selectedProfileId || 'random',
    profileName: `${profile.name} (${profile.category})`,
    packageId: selectedPackageId || 'standard',
    packageName: `${pkg.name} (${pkg.duration})`,
    price: pkg.price,
    date: bookingDate || new Date().toISOString().split('T')[0],
    note: customerNote
  };

  // Disable button and show loading state
  const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      <span>ডেটাবেজে সেভ হচ্ছে...</span>
    `;
  }

  try {
    // 1. If Supabase credentials are provided, write directly to Supabase
    if (SUPABASE_CONFIG.url && SUPABASE_CONFIG.key) {
      await saveToSupabase(bookingPayload);
    } else {
      // 2. Otherwise write to local/Vercel serverless /api/bookings endpoint
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingPayload)
      });
    }
    showToast('বুকিং সফলভাবে ডেটাবেজে সংরক্ষিত হয়েছে!');
    updateNavBookingsCount();
  } catch (err) {
    console.warn('Backend save notice (falling back locally):', err.message);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
    }
  }

  // Render Satirical Ticket Voucher
  const voucherView = document.getElementById('booking-voucher-view');
  voucherView.innerHTML = `
    <div class="voucher-ticket p-6 sm:p-7 text-center">
      <div class="w-12 h-12 rounded-full bg-[#FAF0ED] text-[#9E3B2B] flex items-center justify-center mx-auto mb-3 border border-[#E9C3BC]">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <span class="text-xs bg-[#2D5A43] text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
        কাল্পনিক বুকিং সফল! (ডেটাবেজে সংরক্ষিত)
      </span>

      <h3 class="text-2xl font-extrabold text-[#2B2118] mt-3">অভিনন্দন, ${customerName}!</h3>
      <p class="text-xs text-[#7E7063] mt-1">টোকেন নং: <span class="font-mono font-bold text-[#9E3B2B]">${tokenNumber}</span></p>

      <div class="dashed-cut-line my-4">
        <span>✂️ ভাউচার বিবরণী</span>
      </div>

      <div class="bg-[#FAF7EE] rounded-xl p-4 text-left space-y-2 text-sm border border-[#E5DFD3]">
        <div class="flex justify-between">
          <span class="text-[#7E7063]">বরাদ্দকৃত প্রেমিক:</span>
          <span class="font-bold text-[#2B2118]">${profile.name} (${profile.category})</span>
        </div>
        <div class="flex justify-between">
          <span class="text-[#7E7063]">নির্বাচিত প্যাকেজ:</span>
          <span class="font-bold text-[#2B2118]">${pkg.name} (${pkg.duration})</span>
        </div>
        <div class="flex justify-between">
          <span class="text-[#7E7063]">আনুমানিক বিল:</span>
          <span class="font-bold text-[#9E3B2B]">${pkg.price} (১০০% কাল্পনিক)</span>
        </div>
        <div class="flex justify-between">
          <span class="text-[#7E7063]">বুকিং তারিখ:</span>
          <span class="font-bold text-[#2B2118]">${bookingDate || 'অনুরোধ সাপেক্ষে'}</span>
        </div>
        ${customerNote ? `
          <div class="pt-2 border-t border-[#EFE9DC] text-xs text-[#5F5245]">
            <span class="font-bold text-[#2B2118]">বিশেষ আবদার:</span> "${customerNote}"
          </div>
        ` : ''}
      </div>

      <div class="mt-4 p-3 bg-[#FFF3CD] border border-[#FFEEBA] rounded-lg text-xs text-[#856404] leading-relaxed">
        <strong>হাসিমুখে দ্রষ্টব্য:</strong> এটি সম্পূর্ণ প্যারোডি ওয়েবসাইট। সত্যি সত্যি কোনো প্রেমিক আপনার ঠিকানায় পৌঁছাবে না! স্ক্রিনশট নিয়ে বন্ধুদের ইনবক্সে পাঠিয়ে দিন আর আনন্দ উপভোগ করুন।
      </div>

      <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <button onclick="shareOrCopyTicket('${customerName}', '${profile.name}', '${tokenNumber}')" class="btn-terracotta px-6 py-2.5 text-sm font-bold flex items-center justify-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          ভাউচার কপি / বন্ধুদের পাঠান
        </button>
        <button onclick="closeBookingModal()" class="btn-outline-dark px-5 py-2.5 text-sm font-bold">
          বন্ধ করুন
        </button>
      </div>
    </div>
  `;

  // Toggle views
  document.getElementById('booking-form-view').classList.add('hidden');
  voucherView.classList.remove('hidden');

  // Trigger celebration confetti
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Optional Supabase Direct Writer
async function saveToSupabase(payload) {
  const endpoint = `${SUPABASE_CONFIG.url}/rest/v1/bookings`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_CONFIG.key,
      'Authorization': `Bearer ${SUPABASE_CONFIG.key}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify({
      token: payload.token,
      name: payload.name,
      phone: payload.phone,
      profile_id: payload.profileId,
      profile_name: payload.profileName,
      package_id: payload.packageId,
      package_name: payload.packageName,
      price: payload.price,
      booking_date: payload.date,
      note: payload.note
    })
  });
  return res.json();
}

// Bookings Viewer Modal Logic
async function openBookingsViewerModal() {
  const modal = document.getElementById('bookings-viewer-modal');
  if (!modal) return;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  await fetchAndRenderBookingsTable();
}

function closeBookingsViewerModal() {
  const modal = document.getElementById('bookings-viewer-modal');
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

async function fetchAndRenderBookingsTable() {
  const tbody = document.getElementById('bookings-table-body');
  const totalBadge = document.getElementById('booking-total-badge');
  if (!tbody) return;

  tbody.innerHTML = `
    <tr>
      <td colspan="7" class="py-8 text-center text-[#7E7063]">
        <svg class="animate-spin h-5 w-5 text-[#2D5A43] inline mb-2" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <p>ডেটাবেজ থেকে তথ্য লোড হচ্ছে...</p>
      </td>
    </tr>
  `;

  try {
    const res = await fetch('/api/bookings');
    const result = await res.json();
    cachedBookings = result.data || [];
    renderBookingsList(cachedBookings);
    if (totalBadge) totalBadge.textContent = `মোট বুকিং: ${toBengaliNumber(cachedBookings.length)}টি`;
  } catch (err) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-6 text-center text-[#9E3B2B]">
          ডেটা লোড করতে সমস্যা হয়েছে: ${err.message}
        </td>
      </tr>
    `;
  }
}

function renderBookingsList(list) {
  const tbody = document.getElementById('bookings-table-body');
  if (!tbody) return;

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-8 text-center text-[#7E7063]">
          কোনো বুকিং রেকর্ড পাওয়া যায়নি। এখনই প্রথম বুকিংটি করুন!
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map(b => `
    <tr class="hover:bg-[#FAF6EE] transition-colors">
      <td class="py-3 px-3 font-mono font-bold text-[#9E3B2B] whitespace-nowrap">${b.token || b.id}</td>
      <td class="py-3 px-3 font-bold text-[#2B2118]">${b.name}</td>
      <td class="py-3 px-3 font-mono text-[#5F5245]">${b.phone}</td>
      <td class="py-3 px-3 text-[#2D5A43] font-medium">${b.profileName || b.profileId}</td>
      <td class="py-3 px-3">
        <span class="font-medium">${b.packageName || b.packageId}</span>
        <span class="text-[11px] text-[#9E3B2B] block font-bold">${b.price || ''}</span>
      </td>
      <td class="py-3 px-3 whitespace-nowrap text-[#5F5245]">${b.date || ''}</td>
      <td class="py-3 px-3 text-[#7E7063] max-w-xs truncate" title="${b.note || 'নেই'}">${b.note || '—'}</td>
    </tr>
  `).join('');
}

function filterBookingsTable() {
  const input = document.getElementById('booking-search-input');
  const term = (input ? input.value : '').toLowerCase().trim();
  if (!term) {
    renderBookingsList(cachedBookings);
    return;
  }
  const filtered = cachedBookings.filter(b => 
    (b.name && b.name.toLowerCase().includes(term)) ||
    (b.phone && b.phone.includes(term)) ||
    (b.token && b.token.toLowerCase().includes(term)) ||
    (b.profileName && b.profileName.toLowerCase().includes(term))
  );
  renderBookingsList(filtered);
}

// Convert numbers to Bengali
function toBengaliNumber(num) {
  return (num || 0).toString().replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
}

// Update nav badge count
async function updateNavBookingsCount() {
  try {
    const res = await fetch('/api/bookings');
    const result = await res.json();
    const count = result.count || (result.data ? result.data.length : 0);
    const badge = document.getElementById('nav-bookings-count');
    if (badge) {
      badge.textContent = toBengaliNumber(count);
    }
  } catch (e) {
    // Silent fallback
  }
}

// Copy Voucher text for sharing
function shareOrCopyTicket(name, boyName, token) {
  const shareText = `🎉 আমি 'প্রেমিক ভাড়া ঘর' থেকে আমার জন্য ${boyName}-কে বুক করেছি! 
টোকেন নং: ${token}
(সম্পূর্ণ কাল্পনিক ও মজার জন্য 😜)`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText).then(() => {
      showToast('ভাউচার টেক্সট কপি হয়েছে! বন্ধুদের ইনবক্সে পেস্ট করুন!');
    }).catch(() => {
      showToast('কপি করা যায়নি, স্ক্রিনশট নিন!');
    });
  } else {
    showToast('স্ক্রিনশট নিয়ে বন্ধুদের সাথে শেয়ার করুন!');
  }
}

// Toast notification helper
function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3200);
}

// Mobile navigation drawer toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu-drawer');
  if (!menu) return;
  menu.classList.toggle('hidden');
}

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderFeatures();
  renderSpotlightCard();
  renderPricingTable();
  renderProfiles('all');
  renderTestimonials();
  renderFAQs();
  updateNavBookingsCount();

  // Close modal on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeBookingsViewerModal();
    }
  });

  // Smooth scroll links handling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile drawer if open
        const mobileMenu = document.getElementById('mobile-menu-drawer');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
});

