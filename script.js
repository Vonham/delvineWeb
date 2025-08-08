document.addEventListener('DOMContentLoaded', function() {
    // 부드러운 스크롤 처리
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 스크롤에 따른 활성 메뉴 표시
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.3,
        rootMargin: "-70px 0px 0px 0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 연락처 폼 제출 이벤트 (시뮬레이션)
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // 실제 서버로 전송하는 것을 방지
            alert('문의 내용이 접수되었습니다. (데모)');
            this.reset(); // 폼 필드 초기화
        });
    }
});