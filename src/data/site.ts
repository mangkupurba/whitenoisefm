// All site copy lives here so it can be edited in one place.

export const ARCHIVE_LIVE = false;

// true: the crosshair grid sits on top of everything (photos included).
// false: the grid sits behind the content.
export const GRID_ON_TOP = true;

export const SHOP_URL = 'https://whitenoisefm.id';

export const NAV = [
  { label: 'Concept', href: '/concept' },
  { label: 'Archive', href: '/archive' },
  { label: 'Shop', href: SHOP_URL, external: SHOP_URL !== '#' },
  { label: 'Stockists', href: '/stockists' },
];

// Homepage image strip. Photos come from the images/ folder at the project root.
// Each folder becomes one box per image shape (portrait, landscape, poster...), so
// nothing gets cropped into the wrong proportions. Boxes appear in this folder order;
// any folder not listed here is added after these, alphabetically.
// The filename is shown as the caption, so name files the way they should read.
export const HOME_FOLDERS = ['SYNC/MAHIRO-TO', 'STASIS', 'SYNC/ATSUSHI-TO'];

// Seconds between automatic image changes in each box (clicking a box also changes it).
export const HOME_INTERVAL = 4;

export const CONTACT = {
  email: 'info@whitenoisefm.com',
  instagram: 'whitenoisefm',
};

export const ABOUT = [
  'WHITE NOISE FM is a design practice founded by Dekza Arlingga in 2020.',
  'Our design process stemmed from a desire to study form by way of reverse engineering; deconstructing existing shapes & ideas and composing an understanding of them through deductive reasoning. By constantly observing how things work and look, we aim to create unconventional constructions of familiar forms of clothing; intersecting the functions of historical workwear and modern utilitarian garments with the aesthetics of everyday objects.',
  'The stories we try to communicate in our collections come through tapping a form of primitive hypertext: an eclectic source of references that spans from still images and books to art and literature to TV and movies.',
  'Ultimately, WHITE NOISE FM exists to create tools that are instilled with the spirit of recent times for it to be preserved and studied in the future.',
];

export const ETYMOLOGY = [
  {
    term: 'White Noise',
    definition:
      'Traditionally refers to a noise that contains all frequencies across the spectrum of audible sound in equal measure.',
    result: 'Gathering of an eclectic source of references',
  },
  {
    term: 'Outputs',
    definition:
      'Clothes & Accessories, Collections, Products, Objects, Stories/Essays, Physical Installations.',
    result: 'Internally processed by the team',
  },
  {
    term: 'FM',
    definition:
      'Frequency modulation (FM) is a signal modulation technique used to transmit messages with a radio wave. Outputs are broadcasted and received by ‘listeners’.',
    result: 'Broadcast',
  },
];

export const STOCKISTS = [
  {
    name: 'Orbis Store',
    address:
      'Jl. Panglima Polim V No.38, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160',
    url: 'https://www.orbisjkt.com',
  },
  {
    name: 'SEEK Plaza Senayan',
    address:
      'Plaza Senayan Mall, Jl. Asia Afrika No.8, RT.1/RW.3, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270',
    url: 'https://www.seekindonesia.com',
  },
  {
    name: 'SEEK Grand Indonesia',
    address:
      'Grand Indonesia Skybridge, Jl. M.H. Thamrin No.1 1, RT.1/RW.5, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310',
    url: 'https://www.seekindonesia.com',
  },
];

export const TEAM = [
  {
    name: 'Dekza Arlingga',
    role: 'Creative Director',
    whatsapp: 'https://wa.me/628111624047',
    instagram: 'https://www.instagram.com/dekz.a',
    handle: 'dekz.a',
    email: 'info@whitenoisefm.com',
  },
  {
    name: 'Wisad Melosi Ramschie',
    role: 'Brand Manager',
    whatsapp: 'https://wa.me/6281374043824',
    instagram: 'https://www.instagram.com/wisad',
    handle: 'wisad',
    email: 'info@whitenoisefm.com',
  },
];
