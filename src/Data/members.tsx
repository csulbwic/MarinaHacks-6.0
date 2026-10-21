/*
GROUP 1: Directors
GROUP 2: WiC Officers
GROUP 3: Website Committee
GROUP 4: Design Committee
GROUP 5: Sponsorship Committee
*/

export const members = [
  // ===== DIRECTORS (Group 1) =====
  { name: 'Noor K.',       group: 1, role: 'MarinaHacks Lead', committeeType: 'director',  img: '/Team_Photos/2026_MH/NoorKasem.png' },
  { name: 'Callissa U.',   group: 1, role: 'MarinaHacks Lead', committeeType: 'director',  img: '/Team_Photos/2026_MH/CallissaUccello.png' },

  // ===== OFFICERS (Group 2) =====
  { name: 'Tessa H.',      group: 2, role: 'President',        committeeType: 'officer',  img: '/Team_Photos/2026_MH/TessaHolder.jpg' },
  { name: 'Christina P.',  group: 2, role: 'Vice President', committeeType: 'officer',  img: '/Team_Photos/2026_MH/ChristinaPeralta.jpg' },
  { name: 'Anvi P.',       group: 2, role: 'Secretary',     committeeType: 'officer',  img: '/Team_Photos/2026_MH/AnviPande.jpeg' },
  { name: 'Isha M.',       group: 2, role: 'Treasurer',     committeeType: 'officer',  img: '/Team_Photos/2026_MH/IshaMehta.png' },
  { name: 'Rochelle S.',   group: 2, role: 'Event Coordinator', committeeType: 'officer',  img: '/Team_Photos/2026_MH/RochelleSuarez.jpeg' },
  { name: 'Noor K.',       group: 2, role: 'AESB Representative', committeeType: 'officer',  img: '/Team_Photos/2026_MH/NoorKasem.png' },
  { name: 'Rikhi J.',      group: 2, role: 'AESB Representative', committeeType: 'officer',  img: '/Team_Photos/2026_MH/RikhiJoseph.jpeg' },
  { name: 'Anna G.',       group: 2, role: 'Webmaster',       committeeType: 'officer',  img: '/Team_Photos/2026_MH/AnnaGelisanga.jpg' },
  { name: 'Mishka K.',     group: 2, role: 'Webmaster',       committeeType: 'officer',  img: '/Team_Photos/2026_MH/MishkaKhalilM.jpeg' },
  { name: 'Sofia H.',      group: 2, role: 'Publicity Chair', committeeType: 'officer',  img: '/Team_Photos/2026_MH/SofiaHaroOrtiz.jpeg' },
  { name: 'Warissa H.',    group: 2, role: 'Graphic Designer', committeeType: 'officer',  img: '/Team_Photos/2026_MH/WarissaHossain.jpeg' },
  { name: 'Mia C.',        group: 2, role: 'School Outreach Coordinator', committeeType:'officer',  img: '/Team_Photos/2026_MH/MiaCarter.jpg' },
  { name: 'Amanda G.',     group: 2, role: 'School Outreach Coordinator', committeeType: 'officer',  img: '/Team_Photos/2026_MH/AmandaGantugs.jpeg' },
  { name: 'Callissa U.',   group: 2, role: 'School Outreach Coordinator', committeeType: 'officer',  img: '/Team_Photos/2026_MH/CallissaUccello.png' },
  { name: 'Estefania A.',  group: 2, role: 'School Outreach Coordinator', committeeType: 'officer',  img: '/Team_Photos/2026_MH/EstefaniaArandaPena.jpeg' },
  { name: 'Dianna M.',     group: 2, role: 'Sisterhood Coordinator', committeeType: 'officer',  img: '/Team_Photos/2026_MH/DiannaMendoza.jpeg' },
  { name: 'Lexi N.',       group: 2, role: 'Sisterhood Coordinator', committeeType: 'officer',  img: '/Team_Photos/2026_MH/LexiNguyen.jpeg' },

  // ===== WEBSITE (Group 3) =====
  { name: 'Anna G.',       group: 3, role: 'Website Lead',  committeeType: 'website',  img: '/Team_Photos/2026_MH/AnnaGelisanga.jpg' },
  { name: 'Mishka K.',     group: 3, role: 'Website Lead',  committeeType: 'website',  img: '/Team_Photos/2026_MH/MishkaKhalilM.jpeg' },

  { name: 'Joelle M.',     group: 3, role: 'Member',        committeeType: 'website',  img: '/Team_Photos/2026_MH/JoelleMoxley.jpeg' },
  { name: 'Melissa L.',    group: 3, role: 'Member',        committeeType: 'website',  img: '/Team_Photos/2026_MH/MelissaLazenby.jpeg' },
  { name: 'Joseph H.',     group: 3, role: 'Member',        committeeType: 'website',  img: '/Team_Photos/2026_MH/JosephHuynh.jpg' },
  { name: 'Vivian V.',     group: 3, role: 'Member',        committeeType: 'website',  img: '/Team_Photos/2026_MH/VivianVu.jpeg' },
  { name: 'Mitzly M.',     group: 3, role: 'Member',        committeeType: 'website',  img: '/Team_Photos/2026_MH/MitzlyMaciel.jpeg' },

  // ===== DESIGN (Group 4) =====
  { name: 'Warissa H.',    group: 4, role: 'Design Lead',   committeeType: 'designer', img: '/Team_Photos/2026_MH/WarissaHossain.jpeg' },
  
  { name: 'Mishka M.',     group: 4, role: 'Member',        committeeType: 'designer', img: '/Team_Photos/2026_MH/MishkaKhalilM.jpeg' },
  { name: 'Lexi N.',       group: 4, role: 'Member',        committeeType: 'designer', img: '/Team_Photos/2026_MH/LexiNguyen.jpeg' },
  { name: 'Nhu L.',        group: 4, role: 'Member',        committeeType: 'designer', img: '/Team_Photos/2026_MH/NhuLu.jpeg' },
  { name: 'Mitzly M.',     group: 4, role: 'Member',        committeeType: 'designer', img: '/Team_Photos/2026_MH/MitzlyMaciel.jpeg' },

  // ===== SPONSORSHIP + Budgeting (Group 5) =====
  { name: 'Christina P.',  group: 5, role: 'Sponsorship Lead', committeeType: 'sponsorship',  img: '/Team_Photos/2026_MH/ChristinaPeralta.jpg' },
  { name: 'Rochelle S.',   group: 5, role: 'Budgeting Lead', committeeType: 'sponsorship', img: '/Team_Photos/2026_MH/RochelleSuarez.jpeg' },
  { name: 'Isha M.',       group: 5, role: 'Budgeting Lead',     committeeType: 'sponsorship',  img: '/Team_Photos/2026_MH/IshaMehta.png' },
];
