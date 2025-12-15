// Data for Members and Content
const members = [
    {

        id: 'rm',
        name: 'RM',
        realName: 'Kim Nam-joon (김남준)',
        dob: 'September 12, 1994',
        role: 'Leader, Main Rapper',
        height: '181 cm',
        zodiac: 'Virgo',
        color: 'A9A9A9',
        image: 'assets/rm.jpg',
        bio: 'RM is the leader and main rapper of BTS. Known for his intellectualism and wordplay, he has released massive solo projects like "Indigo" and "Mono". He loves art, nature, and reading.',
        soloSongs: [
            { title: 'Wild Flower', album: 'Indigo', videoId: 'lDbMEP5I4rU' }, // Official Audio
            { title: 'Persona', album: 'Map of the Soul', videoId: 'M9Uy0opVFJE' },
            { title: 'Moonchild', album: 'Mono', videoId: 'G9Hq-873b_0' } // Lyrical/fan upload
        ],
        fanfics: [
            { title: 'Library Love', type: 'text', content: 'It was a quiet afternoon in the library. Namjoon sat across from you, reading a philosophy book...' },
            { title: 'Bicycle Dates', type: 'text', content: 'The wind rushed past as you followed Namjoon down the Han River path...' }
        ]
    },
    {
        id: 'jin',
        name: 'Jin',
        realName: 'Kim Seok-jin (김석진)',
        dob: 'December 4, 1992',
        role: 'Sub Vocalist, Visual',
        height: '179 cm',
        zodiac: 'Sagittarius',
        color: 'FFC0CB',
        image: 'assets/jin.jpg',
        bio: 'Jin is the oldest member (Mathyung) of BTS. Self-proclaimed "World Wide Handsome", he is known for his silver voice and incredible visuals. He recently released "The Astronaut".',
        soloSongs: [
            { title: 'The Astronaut', album: 'The Astronaut', videoId: 'G8dlBO03Kbw' }, // Live/Naval
            { title: 'Epiphany', album: 'LY: Answer', videoId: 'fIkZOLsnoqY' },
            { title: 'Awake', album: 'Wings', videoId: 'UE7-8aaYaE0' }
        ],
        fanfics: [
            { title: 'Chef Jin cooking for you', type: 'video', videoId: 'G8dlBO03Kbw' }, // Placeholder video
            { title: 'Worldwide Handsome Vlogs', type: 'text', content: 'Jin held the camera, "Annyeonghaseyo! Today we are eating lobster!"...' }
        ]
    },
    {
        id: 'suga',
        name: 'SUGA',
        realName: 'Min Yoon-gi (민윤기)',
        dob: 'March 9, 1993',
        role: 'Lead Rapper',
        height: '174 cm',
        zodiac: 'Pisces',
        color: '000000',
        image: 'assets/suga.jpg',
        bio: 'SUGA, also known as Agust D, is a rapper, songwriter, and record producer. Detailed and introspective, his solo work "D-DAY" explores trauma and healing. He loves tangerines and cats.',
        soloSongs: [
            { title: 'Haegeum', album: 'D-DAY', videoId: 'P4e_r1gC5k4' }, // Audio
            { title: 'Daechwita', album: 'D-2', videoId: 'qGjAWJ2zWWI' },
            { title: 'Seesaw', album: 'LY: Answer', videoId: '1y4u8c3e8aQ' }
        ],
        fanfics: [
            { title: 'Producer Yoongi in the studio', type: 'text', content: 'The studio was dim. Yoongi adjusted his headphones. "Listen to this beat," he murmured...' }
        ]
    },
    {
        id: 'jhope',
        name: 'J-Hope',
        realName: 'Jung Ho-seok (정호석)',
        dob: 'February 18, 1994',
        role: 'Main Dancer, Sub Rapper',
        height: '177 cm',
        zodiac: 'Aquarius',
        color: 'FF0000',
        image: 'assets/hope.jpg',
        bio: 'J-Hope is the sunshine of the group and an incredible dancer. His energy matches his stage name. His album "Jack In The Box" showed a grungier, artistic side.',
        soloSongs: [
            { title: 'Arson', album: 'Jack In The Box', videoId: 'S_V4QO7t5Cw' }, // Audio
            { title: 'More', album: 'Jack In The Box', videoId: 'pKdBFeewZYE' },
            { title: 'Daydream', album: 'Hope World', videoId: 'OK3GJ0WIhp0' }
        ],
        fanfics: [
            { title: 'Dance practice with Hobi', type: 'video', videoId: 'S_V4QO7t5Cw' } // Placeholder
        ]
    },
    {
        id: 'jimin',
        name: 'Jimin',
        realName: 'Park Ji-min (박지민)',
        dob: 'October 13, 1995',
        role: 'Main Dancer, Lead Vocalist',
        height: '174 cm',
        zodiac: 'Libra',
        color: 'FFD700',
        image: 'assets/jimin.jpg',
        bio: 'Jimin is known for his sweet falsetto and contemporary dance skills. He is the "Mochi" of the group but transforms into a captivating performer on stage. Recently released "FACE".',
        soloSongs: [
            { title: 'Like Crazy', album: 'FACE', videoId: '0Wwni_gSiy0' }, // Audio
            { title: 'Set Me Free Pt.2', album: 'FACE', videoId: 'UaywgAqc1JY' },
            { title: 'Filter', album: 'MOTS: 7', videoId: 'dZOJU2505cw' }
        ],
        fanfics: [
            { title: 'Late night talks with Jimin', type: 'text', content: 'The stars were bright. Jimin smiled at you, "The moon is beautiful tonight, isn\'t it?"...' }
        ]
    },
    {
        id: 'v',
        name: 'V',
        realName: 'Kim Tae-hyung (김태형)',
        dob: 'December 30, 1995',
        role: 'Sub Vocalist, Visual',
        height: '179 cm',
        zodiac: 'Capricorn',
        color: '008000',
        image: 'assets/v.jpg',
        bio: 'V acts as a vocalist with a deep, soulful voice. He loves jazz and vintage aesthetics. His album "Layover" perfectly captures his slow, R&B vibe.',
        soloSongs: [
            { title: 'Slow Dancing', album: 'Layover', videoId: 'h3M5k5Jb0QI' }, // Audio
            { title: 'Love Me Again', album: 'Layover', videoId: '6WgTZ8H7O74' },
            { title: 'Singularity', album: 'LY: Tear', videoId: 'p8npdgzI2B0' }
        ],
        fanfics: [
            { title: 'Winter Bear cuddles', type: 'video', videoId: 'h3M5k5Jb0QI' } // Placeholder
        ]
    },
    {
        id: 'jk',
        name: 'Jungkook',
        realName: 'Jeon Jung-kook (전정국)',
        dob: 'September 1, 1997',
        role: 'Main Vocalist, Lead Dancer, Center',
        height: '178 cm',
        zodiac: 'Virgo',
        color: '0000FF',
        image: 'assets/jk.jpg',
        bio: 'Jungkook, the "Golden Maknae", excels at everything he does. From pop anthems like "Seven" to ballads, his voice is stable and emotional.',
        soloSongs: [
            { title: 'Standing Next to You', album: 'Golden', videoId: 'B20CAwUffy4' }, // Audio/Lyric
            { title: 'Seven', album: 'Golden', videoId: 'QU9c0053UAU' },
            { title: '3D', album: 'Golden', videoId: 'mHN15XU7h7E' }
        ],
        fanfics: [
            { title: 'Gaming stream with JK', type: 'video', videoId: 'B20CAwUffy4' }, // Placeholder
            { title: 'Gym Date', type: 'text', content: '"Come on, one more rep!" Jungkook encouraged you as you lifted the weights...' }
        ]
    }
];

// Combine all songs for global search
const allSongs = members.reduce((acc, member) => {
    const taggedSongs = member.soloSongs.map(s => ({ ...s, artist: member.name }));
    return [...acc, ...taggedSongs];
}, []);

// DOM Elements
const membersGrid = document.getElementById('membersGrid');
const contentDisplay = document.getElementById('content-display');
const contentBody = document.getElementById('contentBody');
const closeContentBtn = document.getElementById('closeContentArr');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const videoOverlay = document.getElementById('videoOverlay');
const mainPlayer = document.getElementById('mainPlayer');
const closePlayer = document.getElementById('closePlayer');
const playingTitle = document.getElementById('playingTitle');
const playingDesc = document.getElementById('playingDesc');


// Initialize Member Grid
function initMembers() {
    membersGrid.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        card.onclick = () => showMemberDetails(member);

        card.innerHTML = `
            <div class="member-img-container">
                <img src="${member.image}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/150/D8BFD8/FFFFFF?text=BTS'">
            </div>
            <div class="member-name">${member.name}</div>
        `;
        membersGrid.appendChild(card);
    });
}

// Show Member Details (Wiki Style)
function showMemberDetails(member) {
    contentDisplay.classList.remove('hidden');
    // Scroll to content
    contentDisplay.scrollIntoView({ behavior: 'smooth' });

    contentBody.innerHTML = `
        <div class="detail-header">
            <img src="${member.image}" alt="${member.name}" class="detail-pfp" onerror="this.src='https://via.placeholder.com/150'">
            <div class="detail-info">
                <h3>${member.name}</h3>
                <p style="font-size: 0.9rem; color: #5D4037; margin-bottom: 0.5rem;">${member.realName}</p>
                <div class="wiki-stats">
                    <span class="badge"><i class="fas fa-birthday-cake"></i> ${member.dob}</span>
                    <span class="badge"><i class="fas fa-star"></i> ${member.zodiac}</span>
                    <span class="badge"><i class="fas fa-ruler-vertical"></i> ${member.height}</span>
                    <span class="badge"><i class="fas fa-id-card"></i> ${member.role}</span>
                </div>
                <p class="bio-text">${member.bio}</p>
            </div>
        </div>
        
        <div class="detail-sections">
            <div class="section-block">
                <h4><i class="fas fa-music"></i> Discography</h4>
                <ul class="song-list">
                    ${member.soloSongs.map((song, index) => `
                        <li class="song-item" onclick="playVideo('${song.videoId}', '${song.title}', '${song.album}')">
                            <span class="song-title-text">${song.title}</span>
                            <small>${song.album}</small>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="section-block">
                <h4><i class="fas fa-heart"></i> Fan Favorites</h4>
                <ul class="fic-list">
                    ${member.fanfics.map((fic, index) => `
                        <li class="fic-item" onclick="openFanfic('${member.id}', ${index})">
                            <span><i class="fas ${fic.type === 'video' ? 'fa-play' : 'fa-book-open'}"></i> ${fic.title}</span>
                            <i class="fas fa-external-link-alt" style="font-size: 0.8rem; color: #8D6E63;"></i>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Open Fanfic (Video in Mini Player, Text in New Page)
window.openFanfic = function (memberId, ficIndex) {
    const member = members.find(m => m.id === memberId);
    if (!member) return;
    const fic = member.fanfics[ficIndex];

    // Check type
    if (fic.type === 'text') {
        // Save data for the reader page
        const ficData = {
            memberImg: member.image,
            memberName: member.name,
            title: fic.title,
            content: fic.content
        };
        localStorage.setItem('currentFanfic', JSON.stringify(ficData));
        // Navigate to dedicated reader page
        window.location.href = 'fanfic.html';
    } else {
        // Video Mode - Use standard Mini Player
        // This keeps it clean with no extra popups
        playVideo(fic.videoId, fic.title, 'Fanfiction Video');
    }
};

// Play Video (Mini Player Mode)
window.playVideo = function (videoId, title, desc) {
    // Add origin to prevent playback issues on localhost
    // Use youtube-nocookie to attempt to bypass restrictions
    mainPlayer.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&enablejsapi=1`;

    playingTitle.innerText = title;

    // Add a fallback link in the description area
    playingDesc.innerHTML = `
        ${desc || 'BTS Solo'} <br>
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" style="color: #9370DB; font-size: 0.8rem; text-decoration: none;">
            <i class="fas fa-external-link-alt"></i> Watch on YouTube if blocked
        </a>
    `;

    videoOverlay.classList.remove('hidden');
};

// Close Player
closePlayer.addEventListener('click', () => {
    videoOverlay.classList.add('hidden');
    mainPlayer.src = ''; // Stop video
});

// Close Content
closeContentBtn.addEventListener('click', () => {
    contentDisplay.classList.add('hidden');
});

// Search Functionality
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;

    // Filter songs by title or album
    const results = allSongs.filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.album.toLowerCase().includes(query)
    );

    contentDisplay.classList.remove('hidden');
    contentDisplay.scrollIntoView({ behavior: 'smooth' });

    if (results.length === 0) {
        contentBody.innerHTML = `<p style="text-align:center; font-size:1.2rem;">No songs found for "<b>${query}</b>". Maybe search for an album like "Golden" or "FACE"?</p>`;
        return;
    }

    contentBody.innerHTML = `
        <h3>Search Results for "${query}"</h3>
        <ul class="song-list" style="margin-top:1rem;">
            ${results.map(song => `
                 <li class="song-item" onclick="playVideo('${song.videoId}', '${song.title}', '${song.artist} - ${song.album}')">
                    <span><i class="fas fa-play-circle"></i> ${song.title}</span>
                    <small>${song.artist} • ${song.album}</small>
                </li>
            `).join('')}
        </ul>
    `;
}

// Search Listeners
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

// Init
initMembers();
