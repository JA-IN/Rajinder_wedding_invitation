export interface WeddingEvent {
  id: string;
  title: string;
  punjabiTitle?: string;
  date: string;
  day: string;
  time: string;
  venueName: string;
  venueAddress: string;
  description: string;
  dressCode?: string;
  imageUrl: string;
  mapQuery: string;
  badge?: string;
}

export interface FamilyBlessing {
  role: string;
  names: string;
  relationText?: string;
  note: string;
  iconType: 'grandparents' | 'siblings' | 'sister' | 'kids';
}

export interface GuestBlessing {
  id: string;
  name: string;
  attendingEvents: string;
  guestCount: number;
  message: string;
  date: string;
}
