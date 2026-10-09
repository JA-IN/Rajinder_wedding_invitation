import { WeddingEvent, FamilyBlessing, GuestBlessing } from '../types/wedding';

export const coupleDetails = {
  groom: {
    name: 'Surinder Singh Purba',
    shortName: 'Surinder',
    father: 'Late S. Balwinder Singh Purba',
    mother: 'Sdm. Tarsem Kaur',
    family: 'Purba Family',
  },
  bride: {
    name: 'Harpreet Kaur Bedi',
    shortName: 'Harpreet',
    father: 'S. Shingara Singh Bedi',
    mother: 'Sdm. Kulvir Kaur',
    family: 'Bedi Family',
  },
  weddingDate: '22 November 2026',
  targetIsoDate: '2026-11-22T09:00:00+05:30',
  primaryLocation: 'Bathinda & Pathrala, Punjab',
  hostContact: {
    name: 'Rajinder Purba',
    phone: '8360045011',
    formattedPhone: '+91 83600 45011',
    whatsappUrl: 'https://wa.me/918360045011',
  },
  sponsors: ['Ekam Garments', 'New Ekam Garments'],
};

export const weddingEvents: WeddingEvent[] = [
  {
    id: 'sukhmani-path',
    title: 'Sri Sukhmani Sahib Path',
    punjabiTitle: 'ਸ੍ਰੀ ਸੁਖਮਨੀ ਸਾਹਿਬ ਪਾਠ',
    date: '21 November 2026',
    day: 'Saturday',
    time: 'Morning 9:00 AM – 11:00 AM',
    venueName: 'Purba Residence',
    venueAddress: 'Mandi Dabwali',
    description:
      'Commencing the auspicious wedding celebrations by seeking the divine blessings of Almighty Waheguru Ji through sacred Gurbani recitation.',
    dressCode: 'Traditional Punjabi Attire / Head Covered with Rumal or Dupatta',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAc5zV-GN2bUeqWzDQILGOyNzvaJorRrru_ToKBNQo-2RCx1q27g4oBEPRaA_49ZAe1NPgyhiWtvA9xGfzyxJl8R30zybeIUgtKYEcpII-ZRqgMtl7fYnLlKQzmtd0j5ETeU9n8uIDGHbWftuK9oflHeFmqfbB_LBTQkMg7Gv2Nc-_5ac5543k8xs2cx5oeNTYCD1jAFGhxi60Jm8oGxNvH7YJLQqrX95FGDoUHyhU',
    mapQuery: 'https://www.google.com/maps?q=29%C2%B058%2704.8%22N%2074%C2%B041%2734.5%22E&z=17&hl=en',
    badge: 'Auspicious Beginning',
  },
  {
    id: 'haldi-mehndi',
    title: 'Haldi & Mehndi Ceremony',
    punjabiTitle: 'ਹਲਦੀ ਅਤੇ ਮੇਹਂਡੀ',
    date: '21 November 2026',
    day: 'Saturday',
    time: '4:00 PM Onwards',
    venueName: 'Purba Residence',
    venueAddress: 'Mandi Dabwali',
    description:
      'The traditional Punjabi Maiyan and Haldi ritual with turmeric paste, mustard oil, and colorful rangoli, celebrated amidst joyous folk boliyan and family songs.',
    dressCode: 'Sunshine Yellow, Mustard & Festive Ethnic Wear',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaqC18XMHxNe-zXcGP3rxFUBkM1I_xutJzxQXljxStZdDnmzXZs7NA0PYRMzf91S6Ds-VxrvvJhKosz0XBQOBP_M3jIgZL-zyj7lgYQ7pEIR-di1gDihvMbyKZpJfeqKYh64aLTK2x8I8euFL0hg0N7TSrEGLDUdigTaap0tGJT4Vm0AomqXCPimdCJU_zNojwKbgoQYYdQCZjN4FsnwWs5tqPV7oVZFVvM1bAOic',
    mapQuery: 'https://www.google.com/maps?q=29%C2%B058%2704.8%22N%2074%C2%B041%2734.5%22E&z=17&hl=en',
    badge: 'Traditional Ritual',
  },
  {
    id: 'jaggo-party',
    title: 'Jaggo & Celebration Night',
    punjabiTitle: 'ਜਾਗੋ ਅਤੇ ਸੰਗੀਤ ਪਾਰਟੀ',
    date: '21 November 2026',
    day: 'Saturday',
    time: '7:00 PM Onwards',
    venueName: 'Regal Food',
    venueAddress: 'Regal Food, Main Road, Bathinda Region, Punjab',
    description:
      'An electric night of Jaggo procession with brass lights, vigorous Bhangra and Giddha, live dhol beats, drinks, and a lavish celebratory dinner party at Regal Food.',
    dressCode: 'Indo-Western / Glamorous Shimmer & Festive Kurta-Pajama',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBcVl7wgRlFx9dGWEozQuaJ0_-wVF3i0nkhKmEmXo1itRXI095PSlkUM8PsT83XxxmZA7H5Ilgj2gsfLWtENLleCvoY6VE0nMcAMCCREuykrpHMVYnIFs3q0aTWLVTfYP4YOt80H135-5C3Z-kZ7Mb9lE0Z3feuKUBjpx3BDa6jZNWKUuSSgcb3EPTb1Msl93QrsYpLKFaS9LGjuTCrbwjf_q9qP8z694RvMTSvqnA',
    mapQuery: 'Regal Food, Bathinda, Punjab',
    badge: 'Party & Dhol Beats',
  },
  {
    id: 'anand-karaj',
    title: 'Anand Karaj',
    punjabiTitle: 'ਅਨੰਦ ਕਾਰਜ (ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਹਜ਼ੂਰੀ)',
    date: '22 November 2026',
    day: 'Sunday',
    time: '9:00 AM Barat Arrival | 10:00 AM Anand Karaj',
    venueName: 'Gurudwara Sahib Gosayiana, Patshahi Dasvi Pathrala',
    venueAddress: 'Gurudwara Sahib Gosayiana, Patshahi Dasvi, Pathrala, Punjab',
    description:
      'The sacred wedding ceremony where Surinder and Harpreet take the four auspicious Lavanan in the holy presence of Sri Guru Granth Sahib Ji. Guru Ka Langar will be served followed by the ceremony.',
    dressCode: 'Formal Modest Traditional Wear (Strictly cover heads; avoid black/white)',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3T-bvZNfWQdZycOOU8Ufu5aiX4rUscyUwM7zKJ8gltPq38b2eJWAcDfALLXtNMLgU2BfTAlsWiKBPtNAInCPnunaLdUrGRlzHZ5cuUoL6pxrE25IZIHC6IvlVNZlqSuoUGcfaycVKuPlX-apD3clUfWkf1dd9OdUnl_PK4mrSyXlAxvb8slddX7DV4i7doCSgGHQtO1NrXcUMFQtZCwESsIkFtiU12ET8RPTbU68',
    mapQuery: 'Gurudwara Sahib Gosayiana, Patshahi Dasvi Pathrala, Punjab',
    badge: 'Sacred Auspicious Ceremony',
  },
  {
    id: 'royal-reception',
    title: 'Grand Wedding Palace Reception',
    punjabiTitle: 'ਸ਼ਾਹੀ ਰਿਸੈਪਸ਼ਨ ਪਾਰਟੀ',
    date: '22 November 2026',
    day: 'Sunday',
    time: '12:30 PM Onwards',
    venueName: 'Gill Resorts Jassi Bagwali',
    venueAddress: 'Gill Resorts, Jassi Bagwali, Bathinda Highway, Punjab',
    description:
      'Join both families for a grand royal celebration, gourmet multi-cuisine banquet feast, celebratory cake cutting, and congratulations at Gill Resorts Jassi Bagwali.',
    dressCode: 'Royal Punjabi Traditional / Elegant Formal Evening Attire',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBXEg2v84DAWXrC8g_aOboFPtPwfnn1-MzGFi2m6HpgypPtT9KMx_i49HkRYSM3bZPLKw2DDbX6N7o9PObY54zqTxGPuqod5Y-_EonqzuTRBK89I5eZVkQ82xxCAr9NgZ0u28qJI2RKvyy3FZpIK42u21_KdCKTCQl_RYXjbZ5Ubdmrp8PW_q6hELoUXfxdmtA4hOep-NYi7nWtUrN84BYGCOCJrg3aYV_N_zd8Rpw',
    mapQuery: 'Gill Resorts Jassi Bagwali, Bathinda, Punjab',
    badge: 'Royal Grand Banquet',
  },
];

export const familyBlessings: FamilyBlessing[] = [
  {
    role: 'Grand Parents',
    names: 'Late S. Hardev Singh Purba & Sdm. Surjit Kaur Purba',
    relationText: 'With divine blessings from the heavens & heartfelt love',
    note: 'ਵਾਹਿਗੁਰੂ ਜੀ ਦੀ ਅਰਦਾਸ ਹੈ ਕਿ ਸੁਰਿੰਦਰ ਅਤੇ ਹਰਪ੍ਰੀਤ ਨੂੰ ਅਸੀਮ ਕ੍ਰਿਪਾ, ਲੰਮਾ ਜੀਵਨ, ਅਰਾਮ-ਕ੍ਰਮ, ਧਨ-ਦੌਲਤ ਅਤੇ ਪ੍ਰੇਮ ਨਾਲ ਬਖਸ਼ੇ, ਜਿਵੇਂ ਉਹ ਇਸ ਪਵਿੱਤਰ ਯਾਤਰਾ ਵਿੱਚ ਦੋਹਾਂ ਜਾਨਾਂ ਨੂੰ ਇਕ ਰੂਹ ਵਿੱਚ ਮਿਲਾਉਣ ਲਈ ਅੱਗੇ ਵਧ ਰਹੇ ਹਨ।',
    iconType: 'grandparents',
  },
  {
    role: 'Bhabhi & Brother',
    names: 'Pooja & Rajinder Purba',
    relationText: 'Loving Brother & Bhabhi',
    note: 'ਪਿਆਰੀ ਹਰਪ੍ਰੀਤ, ਸਾਡੀ ਪਰਿਵਾਰ ਵਿੱਚ ਸੁਆਗਤ ਹੈ! ਸਾਡੇ ਪਿਆਰੇ ਭਰਾ ਸੁਰਿੰਦਰ ਅਤੇ ਪਿਆਰੀ ਭਾਬੀ ਦੇ ਲਈ ਅਨੰਤ ਖੁਸ਼ੀਆਂ, ਹੱਸੀਆਂ, ਪਰਸਪਰ ਭਰੋਸੇ ਅਤੇ ਸਹਿਯੋਗ ਦੇ ਨਾਲ ਲੰਬੀ ਉਮਰਾਂ ਦੀ ਅਰਦਾਸ ਕਰਦੇ ਹਾਂ।',
    iconType: 'siblings',
  },
  {
    role: 'Sister & Jiju',
    names: 'Amandeep Kaur & Gurpreet Singh',
    relationText: 'Loving Sister & Brother-in-Law',
    note: 'ਜਦੋਂ ਸਾਡਾ ਪਿਆਰਾ ਭਰਾ ਇਸ ਸੁੰਦਰ ਅਧਿਆਇ ਵਿੱਚ ਪਹੁੰਚਦਾ ਹੈ, ਤਾਂ ਸਾਨੂੰ ਗਰਵ ਅਤੇ ਸ਼ੁੱਧ ਖੁਸ਼ੀ ਨਾਲ ਭਰਿਆ ਮਹਿਸੂਸ ਹੁੰਦਾ ਹੈ। ਅਰਦਾਸ ਹੈ ਕਿ ਤੁਹਾਡੇ ਘਰ ਵਿੱਚ ਹਮੇਸ਼ਾਂ ਮੁਸਕਾਨਾਂ ਅਤੇ ਵਾਹਿਗੁਰੂ ਦੀ ਕ੍ਰਿਪਾ ਵਧਦੀ ਰਹੇ।',
    iconType: 'sister',
  },
  {
    role: 'Nieces & Nephew',
    names: 'Ekam, Sonavjot, Girisha',
    relationText: 'Cherished Nieces & Nephew',
    note: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ! 👶🏻💕\nਸਾਡਾ ਚਾਚੂ-ਮਾਮੂ ਜੀ ਦਾ ਵਿਆਹ ਹੋ ਰਿਹਾ ਹੈ,\nਤੁਸੀਂ ਜ਼ਰੂਰ ਆਉਣਾ ਜੀ!\nਵਾਹੇਗੁਰੂ ਦੀ ਅਰਥਨਾ ਹੈ ਕਿ ਤੁਹਾਨੂੰ ਹਮੇਸ਼ਾਂ ਖੁਸ਼ੀਆਂ ਅਤੇ ਭਲਿਆਣ ਦੇ ਨਾਲ ਬਸਿਆ ਰਹੇ।',
    iconType: 'kids',
  },
];

export const initialGuestBlessings: GuestBlessing[] = [
  {
    id: '1',
    name: 'S. Sukhdev Singh & Family',
    attendingEvents: 'All Auspicious Events',
    guestCount: 4,
    message: 'Warmest congratulations to the Purba and Bedi families! May Waheguru Ji bless the lovely couple Surinder & Harpreet with infinite happiness and harmony.',
    date: 'Just now',
  },
  {
    id: '2',
    name: 'Manpreet Singh (Bedi Relatives)',
    attendingEvents: 'Anand Karaj & Reception',
    guestCount: 2,
    message: 'Lakh Lakh Vadhaiyan! Harpreet and Surinder look like a match made in heaven. Looking forward to the sacred Anand Karaj at Gurudwara Sahib Gosayiana.',
    date: '2 hours ago',
  },
  {
    id: '3',
    name: 'Gurjot & Simran',
    attendingEvents: 'Jaggo & Reception',
    guestCount: 2,
    message: 'Can’t wait for the Jaggo and Party at Regal Food! Congratulations to Rajinder veere and the entire Purba family!',
    date: 'Yesterday',
  },
];

