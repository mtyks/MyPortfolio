// ==========================================
// 1. ฐานข้อมูล Portfolio (เพิ่มข้อมูลใหม่ที่นี่)
// ==========================================

const portfolioData = {
    projects: [
        {
            title: "UiPath Expense Claim Automation",
            description: "พัฒนาระบบบอทด้วย UiPath เพื่อดึงและจัดการข้อมูลคิวเบิกจ่าย ช่วยลดเวลาการทำงานแบบแมนนวล",
            category: "RPA",
            tags: ["UiPath", "RPA"],
            links: [
                { text: "ดูสไลด์นำเสนอ (Canva)", url: "https://canva.link/c7kromlz3x2i4yr" }
            ]
        },
        {
            title: "Website Income and Expenses",
            description: "เว็บไซต์สำหรับบันทึกรายรับและรายจ่าย",
            category: "Web Dev",
            tags: ["Website", "Github", "Django", "Python"],
            links: [
                { text: "ดูโค้ด (GitHub)", url: "https://github.com/mtyks/expense_tracker_system" },
                { text: "ดูสไลด์นำเสนอ (Canva)", url: "https://canva.link/8h7q8ddk240ilib" }
            ]
        },
        {
            title: "Application Idea 'MindMate'",
            description: "ผู้ช่วยดูแลสุขภาพจิตส่วนตัว ผ่านระบบ AI ที่สามารถพูดคุย วิเคราะห์อารมณ์ และติดตามสภาวะจิตใจ",
            category: "Design",
            tags: ["Idea"],
            links: [
                { text: "ดูสไลด์นำเสนอ (Canva)", url: "https://canva.link/ydrvzl57983i4wu" }
            ]
        },
        {
            title: "Application Design HR Management",
            description: "HR + Pro แพลตฟอร์มบริหารทรัพยากรบุคคล ออกแบบเพื่อช่วยองค์กรจัดการข้อมูลพนักงานครบวงจร",
            category: "Design",
            tags: ["Application Design", "Idea"],
            links: [
                { text: "ดูสไลด์นำเสนอ (Canva)", url: "https://canva.link/8sdp1fiw43zjz84" }
            ]
        },
        {
            title: "Basic Shopping Web Design",
            description: "ผลงานการออกแบบเว็บไซต์เบื้องต้นครั้งแรก",
            category: "Web Dev",
            tags: ["Website Design", "Github"],
            links: [
                { text: "ดูโค้ด (GitHub)", url: "https://github.com/mtyks/SE-IT-67.github.io" },
                { text: "Live Preview", url: "https://mtyks.github.io/SE-IT-67.github.io/" }
            ]
        },
        {
            title: "N8n Price Tracker",
            description: "ระบบติดตามราคาสินค้าโดยใช้ N8n ขับเคลื่อนด้วย low code และ AI ผลงานนำเสนอใน ICT Showcase 2026",
            category: "RPA",
            tags: ["N8n", "RPA"],
            links: [
                { text: "ดูสไลด์นำเสนอ (Canva)", url: "https://www.canva.com/design/DAHHr-MxcCk/dbEuUq6k0VG4SIlnGrgj2A/view?utm_content=DAHHr-MxcCk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=haa0ec461f0#1" }
            ]
        },
        {
            title: "Eduvault",
            description: "ระบบจัดการคลังสือการสอนแบบแบ่งสิทธิ์ผู้ใช้งานบนโครงสร้างพื้นฐาน AWS Cloud",
            category: "Web Dev",
            tags: ["AWS Cloud", "Web Development"],
            links: [
                { text: "ดูโค้ด (GitHub)", url: "https://github.com/mtyks/eduvault" },
                { text: "ดูสไลด์นำเสนอ (PDF)", url: "https://drive.google.com/file/d/1PrmhhufUb-vUiBp2Ei0RWJrvUsIJ92yW/view?usp=sharing" }
            ]
        },
        {
            title: "Online Shopping Cartopia",
            description: "ผลงานออกแบบ Application Design และ Web Design พร้อม Datatable โครงสร้าง Database",
            category: "Design",
            tags: ["Database", "Application Design", "Website Design", "Figma"],
            links: [
                { text: "Figma Design", url: "https://www.figma.com/community/file/1647167177708174953" },
                { text: "ดูสไลด์นำเสนอ (Canva)", url: "https://canva.link/118egfaulb4vnvp" }
            ]
        },
        {
            title: "UnrealEngine5 Game เพื่อการศึกษา",
            description: "ผลงานการสร้างเกมด้วย UnrealEngine5 'Adventure Of Cyber Law' มีหน้าที่ทำเกมทั้งหมดและช่วยทำรายงาน",
            category: "Game Dev",
            tags: ["Game Developer", "Game Design"],
            links: [
                { text: "Video การเล่นเบื้องต้น(YoutubeVideo)", url: "https://youtu.be/UNnH0qN9faU" },
                { text: "รูปเล่มโปรเจค (PDF)", url: "https://drive.google.com/file/d/1fHLZgZ0RwEFD_0GYNh74iHv4W7-bFW9G/view?usp=sharing" },
                { text: "โหลดตัวเกม(GoogleDrive)", url: "https://drive.google.com/file/d/1OLbSkvIKaEP3bBGzOVon5L79eDEhu9C8/view?usp=sharing" }
            ]
        },
        {
            title: "Basic GameTopup เพื่อการศึกษา",
            description: "ทดลองการสร้างเว็บเติมเงินเกมออนไลน์",
            category: "Design",
            tags: ["Idea", "Frontend Design", "Website Design", "Github", "Website", "JavaScript"],
            links: [
                { text: "ดูโค้ด (GitHub)", url: "https://github.com/mtyks/Basic-GameTopUpSite" },
                { text: "Live Preview", url: "https://mtyks.github.io/Basic-GameTopUpSite/" }
            ]
        }
    ],

    gallery: [
        "https://i.postimg.cc/j22WNNq3/ICTSHOWCASE.jpg",
        "https://i.postimg.cc/nrQTVKwf/335067454-1291737228223046-3729677608234859084-n.jpg",
        "https://i.postimg.cc/ZnyjYPsG/544285022-798370572763527-4943756627601116597-n.jpg",
        "https://i.postimg.cc/cC8T175N/550669811-829017776306323-8040900838514430197-n.jpg",
        "https://i.postimg.cc/QMmW5BW5/306981030-3206946926237069-8646506871467884473-n.jpg",
        "https://i.postimg.cc/K8rfYDxJ/305678790-789535172197601-7972176615370702035-n.jpg",
        "https://i.postimg.cc/7LHVJJZ9/306354238-418936606889995-7779008337064943528-n.jpg",
        "https://i.postimg.cc/HWNYBjVj/infomoblie.jpg",
        "https://i.postimg.cc/440fBnm9/infomoblie-blue.jpg"
    ],

    certificates: [
        { title: "EF SET Certificate (C1 Advanced)", desc: "คะแนน 66/100 ระดับความเชี่ยวชาญการใช้ภาษาอังกฤษระดับสูง", url: "https://drive.google.com/file/d/1LgHcpEMFe3qPulITWc43EiG5lapvVjys/view?usp=sharing" },
        { title: "DGA TDGA การออกแบบ UX/UI", desc: "ผ่านการอบรมบทเรียนการออกแบบ UX/UI 2 Hours", url: "https://drive.google.com/file/d/1USaZ-iFU6b_o2GEeUPPk0EKqPHjk7Sdy/view?usp=sharing" },
        { title: "กรมพัฒนาฝีมือแรงงาน Basic Cybersecurity ", desc: "ผ่านการอบรมด้าน Cybersecurity 1.3 Hours", url: "https://drive.google.com/file/d/1YFN4ezD86wMWte5dbkEgwsrDAi5Bqmbh/view?usp=drive_link" },
        { title: "Huawei Cloud Basics: Development and Basic Concepts", desc: "ผ่านการอบรม CRA Training Program", url: "https://drive.google.com/file/d/14vNSq8Q0EasI3qqseUqx2q7fJdXprE9k/view?usp=drive_link" },
        { title: "Huawei Development and Basic Concepts of Cloud Computing", desc: "ได้ผ่านการอบรม Development and Basic Concepts of Cloud Computing", url: "https://drive.google.com/file/d/1HdurNTBmxv4fGnkbzCsK4eJQcmbDH4vC/view?usp=sharing" },
        { title: "RTC Certificate of Academic Excellence", desc: "Cumulative GPA: 3.98 (2nd Year Diploma)", url: "https://drive.google.com/file/d/19LVnU9ktWez_nlorbOz_RwnzadBwardI/view?usp=drive_link" },
        { title: "RTC Certificate of Academic Highest GPA", desc: "Cumulative GPA: 3.97 (2nd Year Diploma)", url: "https://drive.google.com/file/d/1Khj0lo-QCzR08iuL_Aw59u7umMEYhYbu/view?usp=sharing" },
        { title: "Thaimooc Digital Media Creation", desc: "ผ่านหลักสูตรเทคโนโลยีการสร้างสรรค์สื่อดิจิทัล 10 Hours", url: "https://drive.google.com/file/d/1l8D7U6ftWfezvPAWkCGgAKpAKk3jxaVb/view?usp=sharing" },
        { title: "Thaimooc Using Technology to Enchance Learning", desc: "ผ่านหลักสูตรการใช้เทคโนโลยีเพื่อเสริมสร้างการเรียนรู้ 15 Hours", url: "https://drive.google.com/file/d/1noRusuiFunIEyPCK16KpeygL3NAwEX2I/view?usp=sharing" },
        { title: "Thaimooc Digital Literacy and Cybersecurity", desc: "ผ่านหลักสูตรความเข้าใจ การใช้เทคโนโลยีดิจิทัล และความมั่นคงปลอดภัยทางไซเบอร์ 4 Hours", url: "https://drive.google.com/file/d/1llRRqjDBEjANGa4p3oEjm1PLRvvTU2Iw/view?usp=sharing" },
        { title: "Thaimooc Internet Communication Technology", desc: "ผ่านหลักสูตรทักษะคอมพิวเตอร์และเทคโนโลยีการสารสนเทศและการสื่อสาร 45 Hours", url: "https://drive.google.com/file/d/1CohsEAPNNgzN6VVrCKEaNP_z1DwDEghw/view?usp=sharing" },
        { title: "Thaimooc Instructional Graphic Design", desc: "ผ่านการออกแบบกราฟิกเพื่อการเรียนการสอน 15 Hours", url: "https://drive.google.com/file/d/1nAB3kGEC9pJVdJP7zZ5AFByUp2xjEi7G/view?usp=sharing" }
        // Add ใบเซอร์เพิ่ม
    ]
};

// ==========================================
// 2. ฟังก์ชันการแสดงผลเนื้อหา (Render)
// ==========================================

function renderProjects(filterCategory = "All") {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; 

    const filteredProjects = filterCategory === "All" 
        ? portfolioData.projects 
        : portfolioData.projects.filter(p => p.category === filterCategory);

    filteredProjects.forEach(proj => {
        const tagsHTML = proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const linksHTML = proj.links.map(link => `<a href="${link.url}" target="_blank" class="btn-outline">${link.text}</a>`).join('');

        container.innerHTML += `
            <div class="card">
                <div class="card-content">
                    <h3>${proj.title}</h3>
                    <p>${proj.description}</p>
                    <div class="tags-container">${tagsHTML}</div>
                    <div class="card-actions">${linksHTML}</div>
                </div>
            </div>
        `;
    });
}

function renderGallery() {
    const container = document.getElementById('gallery-container');
    portfolioData.gallery.forEach(imgUrl => {
        container.innerHTML += `
            <div class="gallery-item" onclick="openLightbox('${imgUrl}')">
                <img src="${imgUrl}" alt="Activity" class="gallery-img" loading="lazy">
            </div>
        `;
    });
}

function renderCertificates() {
    const container = document.getElementById('certificates-container');
    portfolioData.certificates.forEach(cert => {
        container.innerHTML += `
            <div class="card">
                <div class="card-content">
                    <h3>${cert.title}</h3>
                    <p>${cert.description || cert.desc}</p>
                    <div class="card-actions">
                        <a href="${cert.url}" target="_blank" class="btn-outline">ดูไฟล์ PDF (เต็มจอ)</a>
                    </div>
                </div>
            </div>
        `;
    });
}

// สร้างปุ่ม Filter อัตโนมัติจากหมวดหมู่ที่มี
function setupFilters() {
    const filterContainer = document.getElementById('filter-container');
    const categories = ["All", ...new Set(portfolioData.projects.map(p => p.category))];
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${cat === 'All' ? 'active' : ''}`;
        btn.innerText = cat;
        btn.onclick = (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProjects(cat);
        };
        filterContainer.appendChild(btn);
    });
}

// ==========================================
// 3. ฟีเจอร์เสริม (Dark Mode, Lightbox, Scroll)
// ==========================================

// Dark Mode
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

function openLightbox(src) {
    lightbox.style.display = "block";
    lightboxImg.src = src;
}

closeBtn.onclick = () => lightbox.style.display = "none";
window.onclick = (e) => { if (e.target === lightbox) lightbox.style.display = "none"; }

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");
window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};
backToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// ==========================================
// 4. สั่งให้ทำงานเมื่อโหลดหน้าเว็บเสร็จ
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
    renderProjects();
    renderGallery();
    renderCertificates();
});
