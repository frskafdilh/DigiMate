// ==================== DATA KATALOG ====================
const dataSMP = [
    { id: 'mtk-smp', name: 'Matematika', icon: 'fa-calculator', desc: 'Aljabar, Geometri', videos: [{ name: 'Aljabar Dasar Kelas 7', mentor: 'Kak Rina', duration: '45 min', price: 25000 }] },
    { id: 'ipa-smp', name: 'IPA Terpadu', icon: 'fa-flask', desc: 'Fisika, Kimia, Biologi', videos: [{ name: 'Sistem Tata Surya', mentor: 'Kak Andi', duration: '40 min', price: 25000 }] },
    { id: 'ips-smp', name: 'IPS', icon: 'fa-globe-asia', desc: 'Sejarah, Geografi', videos: [{ name: 'Sejarah Indonesia', mentor: 'Kak Sari', duration: '50 min', price: 25000 }] },
    { id: 'inggris-smp', name: 'Bahasa Inggris', icon: 'fa-language', desc: 'Grammar, Speaking', videos: [{ name: 'Tenses Dasar', mentor: 'Mr. John', duration: '55 min', price: 30000 }] }
];

const dataSMA = [
    { id: 'mtk-sma', name: 'Matematika Wajib', icon: 'fa-square-root-alt', desc: 'Kalkulus, Trigonometri', videos: [{ name: 'Limit Fungsi', mentor: 'Kak Dimas (ITB)', duration: '70 min', price: 35000 }] },
    { id: 'fisika-sma', name: 'Fisika', icon: 'fa-atom', desc: 'Mekanika', videos: [{ name: 'Hukum Newton', mentor: 'Kak Rudi (UI)', duration: '65 min', price: 35000 }] },
    { id: 'kimia-sma', name: 'Kimia', icon: 'fa-dna', desc: 'Organik, Anorganik', videos: [{ name: 'Stoikiometri', mentor: 'Kak Lisa', duration: '60 min', price: 35000 }] },
    { id: 'biologi-sma', name: 'Biologi', icon: 'fa-leaf', desc: 'Sel, Genetika', videos: [{ name: 'Sintesis Protein', mentor: 'Kak Maya', duration: '55 min', price: 30000 }] }
];

const dataMahasiswa = {
    'Teknik Informatika': {
        icon: 'fa-laptop-code',
        semesters: {
            1: [{ name: 'Algoritma Pemrograman', videos: [{ name: 'Dasar Algoritma', mentor: 'Kak Fajar (UB)', duration: '90 min', price: 50000 }] }],
            2: [{ name: 'Struktur Data', videos: [{ name: 'Array & Linked List', mentor: 'Kak Fajar (UB)', duration: '100 min', price: 55000 }] }],
            3: [{ name: 'Pemrograman Web', videos: [{ name: 'HTML CSS JavaScript', mentor: 'Kak Dimas', duration: '120 min', price: 60000 }] }]
        }
    },
    'Sistem Informasi': {
        icon: 'fa-database',
        semesters: {
            1: [{ name: 'Pengantar SI', videos: [{ name: 'Konsep Dasar SI', mentor: 'Kak Lisa', duration: '70 min', price: 45000 }] }],
            2: [{ name: 'Basis Data', videos: [{ name: 'ERD & Normalisasi', mentor: 'Kak Andi', duration: '90 min', price: 50000 }] }]
        }
    },
    'Manajemen': {
        icon: 'fa-briefcase',
        semesters: {
            1: [{ name: 'Pengantar Manajemen', videos: [{ name: 'Fungsi POAC', mentor: 'Kak Toni', duration: '75 min', price: 45000 }] }],
            2: [{ name: 'Manajemen Pemasaran', videos: [{ name: 'Marketing Mix 4P', mentor: 'Kak Maya', duration: '80 min', price: 50000 }] }]
        }
    },
    'Akuntansi': {
        icon: 'fa-calculator',
        semesters: {
            1: [{ name: 'Pengantar Akuntansi', videos: [{ name: 'Persamaan Dasar', mentor: 'Kak Budi', duration: '80 min', price: 45000 }] }],
            2: [{ name: 'Akuntansi Keuangan', videos: [{ name: 'Jurnal Umum', mentor: 'Kak Lisa', duration: '90 min', price: 50000 }] }]
        }
    },
    'Hukum': {
        icon: 'fa-balance-scale',
        semesters: {
            1: [{ name: 'Pengantar Ilmu Hukum', videos: [{ name: 'Sumber Hukum', mentor: 'Kak Sari', duration: '70 min', price: 45000 }] }],
            2: [{ name: 'Hukum Perdata', videos: [{ name: 'Hukum Kontrak', mentor: 'Kak Rudi', duration: '85 min', price: 50000 }] }]
        }
    }
};

const mentorPool = [
    { name: 'Kak Fajar (UB)', avatar: '👨‍💻', rating: 4.9, sessions: 127, desc: 'Spesialis Informatika & Coding', baseDuration: 60 },
    { name: 'Kak Rina (UI)', avatar: '👩‍🏫', rating: 4.8, sessions: 98, desc: 'Ahli Matematika & Statistika', baseDuration: 45 },
    { name: 'Kak Dimas (ITB)', avatar: '‍💻', rating: 5.0, sessions: 156, desc: 'Full-stack Developer', baseDuration: 90 },
    { name: 'Kak Lisa (UGM)', avatar: '👩‍💼', rating: 4.7, sessions: 82, desc: 'Akuntansi & Manajemen', baseDuration: 50 },
    { name: 'Mr. John', avatar: '👨‍🎓', rating: 4.9, sessions: 203, desc: 'Native English Speaker', baseDuration: 60 }
];

// ==================== STATE GLOBAL ====================
let currentLevel = null;
let currentJurusan = null;
let currentSemester = null;
let currentVideo = null;
let selectedMentor = null;
let userStartTime = null;
let zoomTimer = null;
let zoomTimeLeft = 0;
let currentRating = 0;

// ==================== KONFIGURASI BISNIS (KOMISI) ====================
const PLATFORM_CONFIG = {
    commissionRate: 0.20,       // 20% Komisi untuk DigiMate (Tim Butuh Uang)
    minWithdraw: 50000,         // Minimal penarikan saldo mentor
    paymentGatewayFee: 0.02     // 2% Biaya admin Payment Gateway (Midtrans/Xendit)
};

let platformBalance = 0;        // Simulasi saldo kas platform
let mentorWallets = {};         // Simulasi saldo dompet masing-masing mentor

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openCommandPalette(); }
        if (e.key === 'Escape') { closeCommandPalette(); closePayment(); }
    });

    const cmdInput = document.getElementById('command-input');
    if (cmdInput) {
        cmdInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length < 1) {
                document.getElementById('command-results').innerHTML = '<p class="empty-state">Mulai ketik untuk mencari...</p>';
                return;
            }
            searchMatkul(query);
        });
    }

    window.onclick = (e) => {
        if (e.target.id === 'paymentModal') closePayment();
        if (e.target.id === 'command-palette') closeCommandPalette();
        if (e.target.id === 'zoomModal') closeZoom();
        if (e.target.id === 'ratingModal') closeRating();
    };

    document.querySelector('.close-modal').addEventListener('click', closePayment);

    document.querySelectorAll('.rating-stars i').forEach(star => {
        star.addEventListener('click', function() {
            currentRating = parseInt(this.dataset.rating);
            updateStars(currentRating);
        });
    });
});

// ==================== IMAGE PREVIEW ====================
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        document.getElementById('file-name').textContent = file.name;
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('image-preview').innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }
}

// ==================== LEVEL & SUBJECT NAVIGATION ====================
function selectLevel(level) {
    currentLevel = level;
    hideAllSections();
    if (level === 'smp') renderSubjects('SMP', dataSMP);
    else if (level === 'sma') renderSubjects('SMA', dataSMA);
    else if (level === 'mahasiswa') renderJurusan();
}

function renderSubjects(levelName, data) {
    document.getElementById('subjects-title').textContent = `Mata Pelajaran ${levelName}`;
    const grid = document.getElementById('subjects-grid');
    grid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'subject-card fade-up visible';
        card.innerHTML = `<i class="fas ${item.icon}"></i><h4>${item.name}</h4><p>${item.desc}</p>`;
        card.onclick = () => showSubjectVideos(item);
        grid.appendChild(card);
    });
    document.getElementById('subjects-section').style.display = 'block';
    document.getElementById('subjects-section').scrollIntoView({ behavior: 'smooth' });
}

function showSubjectVideos(subject) {
    const video = subject.videos[0];
    currentVideo = { ...video, subject: subject.name };
    updateVideoUI(video.name, video.mentor, video.duration, video.price);
    hideAllSections();
    document.getElementById('video-section').style.display = 'block';
    document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' });
}

function renderJurusan() {
    const grid = document.getElementById('jurusan-grid');
    grid.innerHTML = '';
    Object.keys(dataMahasiswa).forEach(jurusan => {
        const data = dataMahasiswa[jurusan];
        const card = document.createElement('div');
        card.className = 'jurusan-card fade-up visible';
        card.innerHTML = `<i class="fas ${data.icon}"></i><h4>${jurusan}</h4><p>${Object.keys(data.semesters).length} Semester</p>`;
        card.onclick = () => selectJurusan(jurusan);
        grid.appendChild(card);
    });
    document.getElementById('jurusan-section').style.display = 'block';
    document.getElementById('jurusan-section').scrollIntoView({ behavior: 'smooth' });
}

function selectJurusan(jurusan) {
    currentJurusan = jurusan;
    const grid = document.getElementById('semester-grid');
    grid.innerHTML = '';
    const semesters = dataMahasiswa[jurusan].semesters;
    document.getElementById('semester-title').textContent = `Semester - ${jurusan}`;
    Object.keys(semesters).forEach(sem => {
        const card = document.createElement('div');
        card.className = 'semester-card fade-up visible';
        card.innerHTML = `<h3>Semester ${sem}</h3><p>${semesters[sem].length} Mata Kuliah</p>`;
        card.onclick = () => selectSemester(parseInt(sem));
        grid.appendChild(card);
    });
    hideAllSections();
    document.getElementById('semester-section').style.display = 'block';
    document.getElementById('semester-section').scrollIntoView({ behavior: 'smooth' });
}

function selectSemester(semester) {
    currentSemester = semester;
    const grid = document.getElementById('matkul-grid');
    grid.innerHTML = '';
    const matkuls = dataMahasiswa[currentJurusan].semesters[semester];
    document.getElementById('matkul-title').textContent = `Mata Kuliah - ${currentJurusan} - Semester ${semester}`;
    matkuls.forEach(matkul => {
        const card = document.createElement('div');
        card.className = 'matkul-card fade-up visible';
        card.innerHTML = `<i class="fas fa-book"></i><h4>${matkul.name}</h4><p>${matkul.videos.length} video</p>`;
        card.onclick = () => showMatkulVideos(matkul);
        grid.appendChild(card);
    });
    hideAllSections();
    document.getElementById('matkul-section').style.display = 'block';
    document.getElementById('matkul-section').scrollIntoView({ behavior: 'smooth' });
}

function showMatkulVideos(matkul) {
    const video = matkul.videos[0];
    currentVideo = { ...video, subject: matkul.name, jurusan: currentJurusan, semester: currentSemester };
    updateVideoUI(video.name, video.mentor, video.duration, video.price);
    hideAllSections();
    document.getElementById('video-section').style.display = 'block';
    document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' });
}

function updateVideoUI(name, mentor, duration, price) {
    document.getElementById('video-name').textContent = name;
    document.getElementById('video-mentor').textContent = mentor;
    document.getElementById('video-duration').textContent = duration;
    document.getElementById('video-price').textContent = `Rp ${price.toLocaleString('id-ID')}`;
    document.getElementById('btn-price').textContent = `Rp ${price.toLocaleString('id-ID')}`;
    document.getElementById('video-title').textContent = name;
}

function closeSubjects() { document.getElementById('subjects-section').style.display = 'none'; document.getElementById('levels').scrollIntoView({ behavior: 'smooth' }); }
function closeVideo() { document.getElementById('video-section').style.display = 'none'; if (currentLevel === 'mahasiswa') document.getElementById('matkul-section').style.display = 'block'; else document.getElementById('subjects-section').style.display = 'block'; }
function closeJurusan() { document.getElementById('jurusan-section').style.display = 'none'; document.getElementById('levels').scrollIntoView({ behavior: 'smooth' }); }
function closeSemester() { document.getElementById('semester-section').style.display = 'none'; document.getElementById('jurusan-section').style.display = 'block'; }
function closeMatkul() { document.getElementById('matkul-section').style.display = 'none'; document.getElementById('semester-section').style.display = 'block'; }
function hideAllSections() { ['subjects-section', 'video-section', 'jurusan-section', 'semester-section', 'matkul-section'].forEach(id => document.getElementById(id).style.display = 'none'); }

// ==================== COMMAND PALETTE ====================
function openCommandPalette() { document.getElementById('command-palette').classList.add('active'); setTimeout(() => document.getElementById('command-input').focus(), 100); }
function closeCommandPalette() { document.getElementById('command-palette').classList.remove('active'); document.getElementById('command-input').value = ''; document.getElementById('command-results').innerHTML = '<p class="empty-state">Mulai ketik untuk mencari...</p>'; }

function searchMatkul(query) {
    const results = [];
    const addResults = (data, level) => data.forEach(s => s.videos.forEach(v => { if (v.name.toLowerCase().includes(query) || s.name.toLowerCase().includes(query)) results.push({ ...v, level, subject: s.name }); }));
    addResults(dataSMP, 'SMP'); addResults(dataSMA, 'SMA');
    Object.keys(dataMahasiswa).forEach(j => Object.keys(dataMahasiswa[j].semesters).forEach(s => dataMahasiswa[j].semesters[s].forEach(m => m.videos.forEach(v => { if (v.name.toLowerCase().includes(query) || m.name.toLowerCase().includes(query) || j.toLowerCase().includes(query)) results.push({ ...v, level: 'Mahasiswa', subject: m.name, jurusan: j, semester: s }); }))));
    
    const container = document.getElementById('command-results');
    if (results.length === 0) { container.innerHTML = '<p class="empty-state">Tidak ada hasil ditemukan</p>'; return; }
    container.innerHTML = results.map(r => `<div class="command-result-item" onclick='selectFromCommand(${JSON.stringify(r)})'><div><h4>${r.name}</h4><p>${r.level} • ${r.subject}${r.jurusan ? ' • '+r.jurusan : ''}</p></div><div class="result-price">Rp ${r.price.toLocaleString('id-ID')}</div></div>`).join('');
}

function selectFromCommand(video) {
    currentVideo = video;
    closeCommandPalette();
    updateVideoUI(video.name, video.mentor, video.duration, video.price);
    hideAllSections();
    document.getElementById('video-section').style.display = 'block';
    document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' });
}

// ==================== REQUEST PR & BIDDING ====================
function submitPR(e) {
    e.preventDefault();
    const level = document.getElementById('pr-level').value;
    const subject = document.getElementById('pr-subject').value;
    const budget = parseInt(document.getElementById('pr-budget').value);
    userStartTime = document.getElementById('pr-start-time').value;
    
    if (!userStartTime) { alert('Silakan tentukan waktu mulai sesi terlebih dahulu!'); return; }

    alert(`📢 Notifikasi terkirim ke ${mentorPool.length} mentor ahli ${subject}!\n\nMentor sedang menentukan durasi & harga...`);

    const shuffled = [...mentorPool].sort(() => 0.5 - Math.random());
    const bids = shuffled.slice(0, 3).map(m => {
        const estimatedDuration = Math.floor(m.baseDuration * (0.8 + Math.random() * 0.4));
        const calculatedPrice = estimatedDuration * 800;
        const finalPrice = Math.min(calculatedPrice, budget);
        return { ...m, duration: estimatedDuration, price: finalPrice };
    });

    const container = document.getElementById('mentor-bids');
    container.innerHTML = bids.map((m, i) => `
        <div class="mentor-bid">
            <div class="mentor-avatar">${m.avatar}</div>
            <div class="mentor-details">
                <h4>${m.name}</h4>
                <p>${m.desc}</p>
                <div class="mentor-meta">⭐ ${m.rating} (${m.sessions} sesi)</div>
            </div>
            <div class="mentor-price">
                <span class="duration-badge">⏱️ ${m.duration} Menit</span>
                <span class="price">Rp ${m.price.toLocaleString('id-ID')}</span>
                <button class="btn-select-mentor" onclick="selectMentor(${i}, '${m.name}', ${m.price}, ${m.duration})">Pilih Mentor</button>
            </div>
        </div>
    `).join('');

    document.getElementById('pr-step-1').style.display = 'none';
    document.getElementById('pr-step-2').style.display = 'block';
}

function selectMentor(index, name, price, duration) {
    selectedMentor = { name, price, duration };
    const dateObj = new Date(userStartTime);
    const formattedTime = dateObj.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    document.getElementById('confirm-start-time').textContent = formattedTime;

    document.getElementById('selected-mentor-info').innerHTML = `
        <div class="mentor-bid" style="margin-bottom: 20px; background: var(--white);">
            <div class="mentor-avatar">👨‍</div>
            <div class="mentor-details">
                <h4>${name}</h4>
                <p>Mentor terpilih. Durasi sesi: <strong>${duration} menit</strong></p>
            </div>
            <div class="mentor-price"><span class="price">Rp ${price.toLocaleString('id-ID')}</span></div>
        </div>
    `;
    document.getElementById('summary-price').textContent = `Rp ${price.toLocaleString('id-ID')}`;
    document.getElementById('summary-total').textContent = `Rp ${price.toLocaleString('id-ID')}`;

    document.getElementById('pr-step-2').style.display = 'none';
    document.getElementById('pr-step-3').style.display = 'block';
}

function resetPR() {
    document.getElementById('pr-form').reset();
    document.getElementById('file-name').textContent = 'Klik untuk upload foto soal';
    document.getElementById('image-preview').innerHTML = '';
    document.getElementById('pr-step-2').style.display = 'none';
    document.getElementById('pr-step-3').style.display = 'none';
    document.getElementById('pr-step-1').style.display = 'block';
    selectedMentor = null;
    userStartTime = null;
}

// ==================== PAYMENT & ZOOM (DENGAN LOGIKA KOMISI) ====================
function openPayment(type) {
    let itemName, price;
    if (type === 'video' && currentVideo) { itemName = currentVideo.name; price = currentVideo.price; }
    else if (type === 'pr' && selectedMentor) { itemName = `Sesi Zoom (${selectedMentor.duration} min) dengan ${selectedMentor.name}`; price = selectedMentor.price; }
    
    document.getElementById('modal-item-name').textContent = itemName;
    document.getElementById('modal-price').textContent = `Rp ${price.toLocaleString('id-ID')}`;
    document.getElementById('paymentModal').classList.add('active');
}

function closePayment() { document.getElementById('paymentModal').classList.remove('active'); }

function confirmPayment() {
    closePayment();
    
    if (selectedMentor) {
        const totalPaid = selectedMentor.price;
        
        // 1. Hitung Pembagian Uang
        const platformCut = Math.floor(totalPaid * PLATFORM_CONFIG.commissionRate);
        const gatewayFee = Math.floor(totalPaid * PLATFORM_CONFIG.paymentGatewayFee);
        const mentorEarn = totalPaid - platformCut - gatewayFee;
        
        // 2. Simulasi Transaksi Berhasil (Bisa dilihat di Console Browser / Tekan F12)
        console.log(`💰 TRANSAKSI BERHASIL`);
        console.log(`Total User Bayar: Rp ${totalPaid.toLocaleString('id-ID')}`);
        console.log(`Biaya Gateway (2%): Rp ${gatewayFee.toLocaleString('id-ID')}`);
        console.log(`Komisi DigiMate (20%): Rp ${platformCut.toLocaleString('id-ID')} -> Masuk Kas Tim`);
        console.log(`Mentor Menerima: Rp ${mentorEarn.toLocaleString('id-ID')} -> Masuk Saldo Mentor`);
        
        // 3. Update Saldo Virtual (Simulasi Database)
        platformBalance += platformCut;
        
        if (!mentorWallets[selectedMentor.name]) {
            mentorWallets[selectedMentor.name] = 0;
        }
        mentorWallets[selectedMentor.name] += mentorEarn;
        
        // 4. Notifikasi ke User
        alert(`✅ Pembayaran Berhasil!\n\nSesi Zoom akan dimulai.\nTerima kasih telah mendukung DigiMate!`);
        
        // 5. Mulai Sesi Zoom
        startZoomSession();
        
    } else {
        // Untuk pembelian video template
        const price = currentVideo ? currentVideo.price : 0;
        const platformCut = Math.floor(price * PLATFORM_CONFIG.commissionRate);
        platformBalance += platformCut;
        alert('Pembayaran berhasil! Video/Template siap diunduh.');
    }
}

function startZoomSession() {
    document.getElementById('zoom-mentor-name').textContent = selectedMentor.name;
    document.getElementById('zoomModal').classList.add('active');
    zoomTimeLeft = selectedMentor.duration * 60;
    updateTimerDisplay();
    document.getElementById('timer-status').textContent = `Sesi berlangsung (${selectedMentor.duration} menit)...`;
    document.getElementById('timer-status').style.color = 'var(--white)';

    zoomTimer = setInterval(() => {
        zoomTimeLeft--;
        updateTimerDisplay();
        if (zoomTimeLeft <= 0) {
            clearInterval(zoomTimer);
            document.getElementById('timer-status').textContent = '⚠️ WAKTU MENTOR HABIS! Kamu TIDAK perlu membayar.';
            document.getElementById('timer-status').style.color = '#FFB5C5';
            selectedMentor.price = 0;
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(zoomTimeLeft / 60);
    const seconds = zoomTimeLeft % 60;
    document.getElementById('zoom-timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function endZoom() {
    clearInterval(zoomTimer);
    document.getElementById('zoomModal').classList.remove('active');
    if (selectedMentor.price === 0) {
        alert('Sesi berakhir. Mentor kehabisan waktu, kamu TIDAK perlu membayar. Terima kasih!');
    } else {
        alert('Sesi Zoom berakhir. Silakan beri rating untuk kinerja mentor.');
        openRating();
    }
    resetPR();
}

function closeZoom() { clearInterval(zoomTimer); document.getElementById('zoomModal').classList.remove('active'); }

// ==================== RATING SYSTEM ====================
function openRating() {
    document.getElementById('rating-mentor-name').textContent = selectedMentor.name;
    document.getElementById('ratingModal').classList.add('active');
    currentRating = 0;
    updateStars(0);
}
function closeRating() { document.getElementById('ratingModal').classList.remove('active'); document.getElementById('rating-comment').value = ''; }
function updateStars(rating) {
    document.querySelectorAll('.rating-stars i').forEach((star, index) => {
        if (index < rating) { star.classList.remove('far'); star.classList.add('fas'); }
        else { star.classList.remove('fas'); star.classList.add('far'); }
    });
}
function submitRating() {
    if (currentRating === 0) { alert('Silakan pilih rating terlebih dahulu!'); return; }
    const comment = document.getElementById('rating-comment').value;
    alert(`Terima kasih! Kamu memberikan ${currentRating}⭐ untuk ${selectedMentor.name}.\nKomentar: ${comment || '(tidak ada)'}`);
    closeRating();
    resetPR();
}

// ==================== FITUR DEMO: CEK SALDO MENTOR ====================
// Cara pakai: Buka Console Browser (F12), ketik: checkMentorEarnings('Kak Fajar (UB)')
function checkMentorEarnings(mentorName) {
    const balance = mentorWallets[mentorName] || 0;
    const canWithdraw = balance >= PLATFORM_CONFIG.minWithdraw;
    
    return {
        name: mentorName,
        balance: balance,
        canWithdraw: canWithdraw,
        message: canWithdraw 
            ? `✅ Saldo Rp ${balance.toLocaleString('id-ID')} siap dicairkan ke rekening!` 
            : `⏳ Saldo Rp ${balance.toLocaleString('id-ID')}. Butuh Rp ${(PLATFORM_CONFIG.minWithdraw - balance).toLocaleString('id-ID')} lagi untuk bisa cair.`
    };
}
