document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.querySelector('header');
    const nav = document.querySelector('header nav');
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('main section');
    const langButtons = document.querySelectorAll('.lang-btn');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

    // --- Mobile Menu Toggle ---
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            // Optional: Change icon from bars to times (X)
            const icon = mobileMenuToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Language Translation Data ---
    const translations = {
        ko: {
            nav_home: "홈",
            nav_approach: "우리의 접근 방식",
            nav_solutions: "솔루션",
            nav_contact: "문의",
            hero_title: "AI, 인류의 건강한 내일을 설계하다",
            hero_subtitle: "델바인은 <strong>뇌신경재활, 시니어 헬스케어부터 정밀의료, 제약 솔루션까지</strong> 헬스케어 전반의 핵심 과제를 해결하기 위해 AI 전문성을 활용합니다. 우리는 인간의 삶 가장 깊숙한 곳의 문제를 해결하기 위해 가장 섬세한 기술을 연구합니다.",
            hero_cta: "델바인의 솔루션 보기 ↓",
            approach_title: "우리의 접근 방식: 섬세한 기술로 생명력을 깨우다",
            approach_intro: "The philosophy of Delvine is embedded in its name.",
            approach_delicate_title: "Delicate (섬세함)",
            approach_delicate_text: "우리는 AI라는 <strong>섬세하고 정교한 기술</strong>로 질병의 복잡한 원인을 파헤칩니다.",
            approach_vine_title: "Vine (생명력)",
            approach_vine_text: "우리는 포도덩굴처럼 <strong>강인한 생명력</strong>으로 환자가 질병을 이겨내고 건강하게 적응하도록 돕습니다.",
            approach_summary: "이 두 가지 가치의 결합을 통해, 우리는 기술의 한계를 넘어 사람 중심의 가치를 실현하는 새로운 길을 열어갑니다.",
            solutions_title: "기술이 현실이 되는 곳: 델바인의 핵심 솔루션",
            solutions_pillar1_title: "뇌신경재활 - 뇌의 회복 잠재력을 극대화하다",
            solutions_pillar1_item1_title: "PLANTO",
            solutions_pillar1_item1_text: "AI 기반 작업치료 장비로, 게임화된 재활 콘텐츠와 개인 맞춤형 피드백을 통해 뇌졸중 환자의 회복을 돕습니다.",
            solutions_pillar1_item2_title: "NeSAT",
            solutions_pillar1_item2_text: "VR 기반의 시공간인지장애 진단기술로, 편측무시와 같은 증상을 객관적이고 정밀하게 평가하여 진단의 새로운 기준을 제시합니다.",
            solutions_pillar2_title: "시니어 헬스케어 - 선제적 관리로 건강한 노년을 설계하다",
            solutions_pillar2_item1_title: "AI 케어 로봇",
            solutions_pillar2_item1_text: "비접촉 센서와 AI 분석을 통해 어르신의 활력 징후와 뇌졸중 전조증상을 24시간 모니터링합니다. 요양 시설 및 데이케어 센터의 안전과 효율성을 혁신하여, 기술이 따뜻한 돌봄을 완성하는 미래를 그립니다. (중소기업기술혁신개발사업 과제)",
            solutions_pillar3_title: "정밀의료 - 유전체 데이터로 개인 맞춤 암 치료를 열다",
            solutions_pillar3_item1_title: "NGS 데이터 AI 분석",
            solutions_pillar3_item1_text: "서울성모병원과의 공동 연구를 통해 혈액암 및 간암 환자의 NGS 유전체 데이터를 분석하는 독자적인 AI 모델을 개발합니다. 특허와 SCI급 논문으로 입증된 기술력을 바탕으로, 환자 개개인에게 최적화된 치료의 길을 제시합니다.",
            solutions_pillar4_title: "제약 솔루션 - 데이터 자동화로 제약 산업을 가속화하다",
            solutions_pillar4_item1_title: "VeriPharm",
            solutions_pillar4_item1_text: "개발이 완료되어 시장 진출을 준비 중인 AI 기반 자동화 솔루션입니다. 복잡한 처방 실적 문서를 자동으로 인식하고 처리하며, AI 챗봇으로 운영 효율을 극대화하여 제약 산업의 디지털 혁신을 주도합니다.",
            contact_title: "델바인과 함께 건강한 미래를 만들어갈 파트너를 찾습니다.",
            contact_subtitle: "델바인의 기술과 비전에 공감하는 모든 분들과의 협력을 기다립니다. 함께 혁신을 만들어갈 분들의 연락을 환영합니다.",
            contact_address: "서울시 관악구 호암로 22길 26, 5층 (신림벤처타운 2관)",
            contact_cta: "문의하기",
            footer_info: "(주)델바인 | 대표자: 조성민 | 사업자 번호: 787-81-00687",
            footer_copyright: "Copyright © 2023 Delvine Inc. All rights reserved."
        },
        en: {
            nav_home: "Home",
            nav_approach: "Our Approach",
            nav_solutions: "Solutions",
            nav_contact: "Contact",
            hero_title: "AI, Designing a Healthier Tomorrow for Humanity",
            hero_subtitle: "Delvine leverages its expertise in AI to tackle critical challenges across the healthcare spectrum—from <strong>neuro-rehabilitation and senior care to precision medicine and pharmaceutical automation.</strong> We research the most delicate technologies to solve problems in the deepest aspects of human life.",
            hero_cta: "Explore Our Solutions ↓",
            approach_title: "Our Approach: Awakening Vitality with Delicate Technology",
            approach_intro: "The philosophy of Delvine is embedded in its name.",
            approach_delicate_title: "Delicate",
            approach_delicate_text: "We uncover the complex causes of diseases with the <strong>delicate and sophisticated technology</strong> of AI.",
            approach_vine_title: "Vine",
            approach_vine_text: "Like a grapevine, we help patients overcome illness and adapt to a healthy life with <strong>strong vitality</strong>.",
            approach_summary: "Through the combination of these two values, we are forging a new path that transcends the limits of technology to realize human-centered values.",
            solutions_title: "Where Technology Becomes Reality: Delvine's Core Solutions",
            solutions_pillar1_title: "Pillar 1: Neuro-Rehabilitation - Maximizing the Brain's Recovery Potential",
            solutions_pillar1_item1_title: "PLANTO",
            solutions_pillar1_item1_text: "An AI-based occupational therapy device that aids the recovery of stroke patients through gamified rehabilitation content and personalized feedback.",
            solutions_pillar1_item2_title: "NeSAT",
            solutions_pillar1_item2_text: "A VR-based diagnostic technology for spatial-temporal cognitive impairment, setting a new standard for diagnosis by objectively and precisely evaluating symptoms like hemispatial neglect.",
            solutions_pillar2_title: "Pillar 2: Senior Healthcare - Designing a Healthy Old Age with Proactive Management",
            solutions_pillar2_item1_title: "AI Care Robot",
            solutions_pillar2_item1_text: "Monitors seniors' vital signs and early stroke symptoms 24/7 using non-contact sensors and AI analysis. It innovates safety and efficiency in nursing homes and daycare centers, painting a future where technology completes warm care. (A project from the Technology Innovation Development Program for SMEs)",
            solutions_pillar3_title: "Pillar 3: Precision Medicine - Unlocking Personalized Cancer Treatment with Genomic Data",
            solutions_pillar3_item1_title: "NGS Data AI Analysis",
            solutions_pillar3_item1_text: "In collaboration with Seoul St. Mary's Hospital, we are developing a proprietary AI model to analyze NGS genomic data from patients with hematologic and liver cancers. Backed by patents and SCI-level publications, our technology offers a path to optimized treatment for each individual patient.",
            solutions_pillar4_title: "Pillar 4: Pharmaceutical Solutions - Accelerating the Pharmaceutical Industry with Data Automation",
            solutions_pillar4_item1_title: "VeriPharm",
            solutions_pillar4_item1_text: "An AI-based automation solution, development completed and ready for market entry. It automatically recognizes and processes complex prescription performance documents and maximizes operational efficiency with an AI chatbot, leading the digital transformation of the pharmaceutical industry.",
            contact_title: "We are looking for partners to build a healthier future with Delvine.",
            contact_subtitle: "We await collaboration with all who resonate with Delvine's technology and vision. We welcome contact from those who wish to create innovation together.",
            contact_address: "5F, 26, Hoam-ro 22-gil, Gwanak-gu, Seoul, Republic of Korea (Sillim Venture Town 2)",
            contact_cta: "Contact Us",
            footer_info: "(주)델바인 | CEO: Sungmin Cho | Business No: 787-81-00687",
            footer_copyright: "Copyright © 2023 Delvine Inc. All rights reserved."
        }
    };

    // --- Language Control ---
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update active button
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        localStorage.setItem('preferredLang', lang);
    };

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = button.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    // --- Initial Language Detection ---
    const preferredLang = localStorage.getItem('preferredLang');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = preferredLang || (browserLang === 'ko' ? 'ko' : 'en');
    setLanguage(initialLang);


    // --- Header Style Change on Scroll ---
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Active Nav Link on Scroll ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4 // 40% of the section should be visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const navLink = document.querySelector(`header nav a[href="#${entry.target.id}"]`);
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // --- Smooth Scroll for Nav Links ---
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile menu on link click
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // --- Scroll Animations for Sections ---
    const animatedElements = document.querySelectorAll('.animated-section');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15 // Element is considered visible when 15% is in view
    });

    animatedElements.forEach(el => animationObserver.observe(el));

});