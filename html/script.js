const memberNames = [
  { name: 'Андрей', colors: ['#050505', '#3d3d3d', '#f2f2f2'] },
  { name: 'Митя', colors: ['#111111', '#4d4d4d', '#efefef'] },
  { name: 'Ваня груша', colors: ['#080808', '#3a3a3a', '#f0f0f0'] },
  { name: 'Ваня Петрович', colors: ['#1a1a1a', '#666666', '#f3f3f3'] },
  { name: 'Симха', colors: ['#0b0b0b', '#555555', '#f4f4f4'] },
  { name: 'Денчик 1', colors: ['#101010', '#5c5c5c', '#f5f5f5'] },
  { name: 'Денчик 2', colors: ['#171717', '#5a5a5a', '#ffffff'] },
  { name: 'Гриша', colors: ['#0d0d0d', '#4c4c4c', '#f1f1f1'] },
  { name: 'Платон', colors: ['#111111', '#585858', '#f0f0f0'] },
  { name: 'Саня', colors: ['#090909', '#4a4a4a', '#ffffff'] },
  { name: 'Данек', colors: ['#0a0a0a', '#4c4c4c', '#f2f2f2'] },
  { name: 'Ахтямов', colors: ['#111111', '#5a5a5a', '#f0f0f0'] },
  { name: 'Узбек', colors: ['#050505', '#484848', '#f5f5f5'] },
  { name: 'Леша', colors: ['#111111', '#5d5d5d', '#ffffff'] },
  { name: 'Игорь', colors: ['#0c0c0c', '#505050', '#f2f2f2'] },
  { name: 'Киррил', colors: ['#121212', '#5b5b5b', '#ededed'] },
  { name: 'Макан', colors: ['#0a0a0a', '#555555', '#f4f4f4'] }
];

const photoFiles = [
  'photo_1_2026-09-18_21-12-13.jpg',
  'photo_2_2026-09-18_21-12-13.jpg',
  'photo_3_2026-09-18_21-12-13.jpg',
  'photo_4_2026-09-18_21-12-13.jpg',
  'photo_5_2026-09-18_21-12-13.jpg',
  'photo_6_2026-09-18_21-12-13.jpg',
  'photo_7_2026-09-18_21-12-13.jpg',
  'photo_8_2026-09-18_21-14-00.jpg',
  'photo_9_2026-09-18_21-14-00.jpg',
  'photo_10_2026-09-18_21-14-00.jpg',
  'photo_11_2026-09-18_21-14-00.jpg',
  'photo_12_2026-09-18_21-12-13.jpg',
  'photo_13_2026-09-18_21-12-13.jpg',
  'photo_14_2026-09-18_21-12-13.jpg',
  'photo_15_2026-09-18_21-12-13.jpg',
  'photo_17_2026-09-18_21-14-00.jpg',
  'photo_18_2026-09-18_21-14-00.jpg',
  'photo_19_2026-09-18_21-14-00.jpg',
  'photo_20_2026-09-18_21-14-00.jpg',
  'photo_21_2026-09-18_21-14-00.jpg',
  'photo_22_2026-09-18_21-12-13.jpg',
  'photo_23_2026-09-18_21-14-00.jpg',
  'photo_24_2026-09-18_21-14-00.jpg',
  'photo_25_2026-09-18_21-14-00.jpg',
  'photo_26_2026-09-18_21-14-00.jpg',
  'photo_27_2026-09-18_21-14-00.jpg',
  'photo_28_2026-09-18_21-14-00.jpg',
  'photo_29_2026-09-18_21-14-00.jpg',
  'photo_30_2026-09-18_21-14-00.jpg',
  'photo_31_2026-09-18_21-14-00.jpg',
  'photo_32_2026-09-18_21-14-00.jpg',
  'photo_33_2026-09-18_21-12-13.jpg',
  'photo_34_2026-09-18_21-14-00.jpg',
  'photo_36_2026-09-18_21-14-00.jpg',
  'photo_37_2026-09-18_21-14-00.jpg',
  'photo_38_2026-09-18_21-14-00.jpg',
  'photo_39_2026-09-18_21-14-00.jpg',
  'photo_40_2026-09-18_21-14-00.jpg',
  'photo_41_2026-09-18_21-14-00.jpg',
  'photo_42_2026-09-18_21-14-00.jpg',
  'photo_43_2026-09-18_21-12-13.jpg',
  'photo_44_2026-09-18_21-12-13.jpg',
  'photo_45_2026-09-18_21-12-13.jpg',
  'photo_46_2026-09-18_21-12-13.jpg',
  'photo_47_2026-09-18_21-12-13.jpg',
  'photo_48_2026-09-18_21-12-13.jpg',
  'photo_49_2026-09-18_21-12-13.jpg',
  'photo_2026-09-18_21-16-11.jpg',
  'photo_2026-09-18_21-16-14.jpg',
  'photo_1_2026-09-18_23-35-20.jpg',
  'photo_2_2026-09-18_23-35-20.jpg',
  'photo_3_2026-09-18_23-35-20.jpg',
  'photo_4_2026-09-18_23-35-20.jpg',
  'photo_5_2026-09-18_23-35-20.jpg',
  'photo_6_2026-09-18_23-35-20.jpg',
  'photo_7_2026-09-18_23-35-20.jpg',
  'photo_8_2026-09-18_23-35-20.jpg'
];

const videoFiles = [
  'video_2026-09-18_21-12-13.mp4',
  'video_2026-09-18_21-12-13 (2).mp4',
  'video_2026-09-18_21-12-13 (3).mp4',
  'video_2026-09-18_21-12-13 (4).mp4',
  'video_2026-09-18_21-12-13 (5).mp4',
  'IMG_0021.MP4',
  'IMG_0387.MOV',
  'IMG_1614.MOV',
  'IMG_1631.MOV',
  'IMG_1862.MOV',
  'IMG_9387.MOV',
  'video_2026-09-18_23-35-20.mp4',
  'video_2026-09-18_23-35-20 (2).mp4',
  'video_2026-09-18_23-35-20 (3).mp4'
];

function renderMembers() {
  const container = document.getElementById('members-list');
  if (!container) return;

  memberNames.forEach(({ name, colors }) => {
    const text = document.createElement('span');
    text.className = 'member-tag';
    text.textContent = name;
    text.style.backgroundImage = `linear-gradient(90deg, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[0]})`;
    text.style.backgroundSize = '220% 100%';
    text.style.backgroundPosition = '0% 50%';
    text.style.animationDelay = `${Math.random() * 1.5}s`;
    container.appendChild(text);
  });
}

function enableTitleHover() {
  const title = document.querySelector('.hero-title');
  if (!title) return;

  title.addEventListener('mousemove', (event) => {
    const bounds = title.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    title.style.setProperty('--pointer-x', `${x}%`);
    title.style.setProperty('--pointer-y', `${y}%`);
  });

  title.addEventListener('mouseleave', () => {
    title.style.removeProperty('--pointer-x');
    title.style.removeProperty('--pointer-y');
  });
}

function makeScroller(containerId) {
  const wrapper = document.getElementById(containerId)?.parentElement;
  if (!wrapper) return;

  const left = wrapper.querySelector('.scroll-arrow.left');
  const right = wrapper.querySelector('.scroll-arrow.right');
  const track = wrapper.querySelector('.media-strip, .video-strip');

  if (!left || !right || !track) return;

  const scrollAmount = () => Math.max(track.firstElementChild?.getBoundingClientRect().width || 260, 260);

  left.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });

  right.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
}

function renderGallery() {
  const container = document.getElementById('gallery-list');
  if (!container) return;

  photoFiles.forEach((fileName, index) => {
    const card = document.createElement('article');
    card.className = 'photo-card';

    const image = document.createElement('img');
    image.src = fileName;
    image.alt = `Фото ${index + 1}`;
    image.loading = 'lazy';

    card.appendChild(image);
    container.appendChild(card);
  });

  makeScroller('gallery-list');
}

function renderVideos() {
  const container = document.getElementById('video-list');
  if (!container) return;

  videoFiles.forEach((fileName, index) => {
    const card = document.createElement('article');
    card.className = 'video-card';

    const video = document.createElement('video');
    video.src = fileName;
    video.controls = true;
    video.preload = 'metadata';

    card.appendChild(video);
    container.appendChild(card);
  });

  makeScroller('video-list');
}

function setAboutPhoto() {
  const photo = document.getElementById('about-photo');
  if (!photo) return;

  photo.src = 'photo_2026-09-18_21-53-31.jpg';
}

function launchHeart() {
  const layer = document.querySelector('.heart-layer');
  if (!layer) return;

  const heart = document.createElement('div');
  heart.className = 'flying-heart';
  heart.innerHTML = '<span>ОПГ</span>';
  heart.style.top = `${20 + Math.random() * 65}vh`;
  heart.addEventListener('animationend', () => heart.remove(), { once: true });
  layer.appendChild(heart);
}

function launchLoveBurst() {
  const layer = document.querySelector('.heart-layer');
  if (!layer) return;

  const count = 10 + Math.floor(Math.random() * 6);
  for (let index = 0; index < count; index += 1) {
    const heart = document.createElement('div');
    heart.className = 'flying-heart burst-heart';
    heart.innerHTML = '<span>ОПГ&lt;3</span>';
    heart.style.left = '-80px';
    heart.style.top = `${10 + Math.random() * 80}vh`;
    heart.style.setProperty('--burst-y', `${-80 + Math.random() * 160}px`);
    heart.style.animationDelay = `${Math.random() * 0.8}s`;
    heart.addEventListener('animationend', () => heart.remove(), { once: true });
    layer.appendChild(heart);
  }
}

renderMembers();
enableTitleHover();
renderGallery();
renderVideos();
setAboutPhoto();
setInterval(launchHeart, 10000);
document.querySelector('.love-button')?.addEventListener('click', launchLoveBurst);
