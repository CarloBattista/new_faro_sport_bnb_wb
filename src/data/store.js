import { reactive } from 'vue';

export const store = reactive({
  LANG: {
    current: 'it',
    languages: [
      { code: 'it', name: 'Italiano', flag: '🇮🇹' },
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'de', name: 'German', flag: '🇩🇪' },
    ],
  },
  YEAR: new Date().getFullYear(),

  email: 'fabimanu1974@gmail.com',
  phone: '+39 391 141 2884',
  address: 'Via anello di san cataldo 10, Taranto, San vito (TA)',

  checkIn: '15:00',
  checkOut: '10:00',
  creditCardAccepted: 'all',

  services: [
    {
      id: 0,
      icon: 'Wifi',
      label: 'wifi',
      description: null,
    },
    {
      id: 1,
      icon: 'CarFront',
      label: 'parking',
      description: null,
    },
    {
      id: 2,
      icon: 'Snowflake',
      label: 'air_conditioning',
      description: null,
    },
    {
      id: 3,
      icon: 'Thermometer',
      label: 'heating',
      description: null,
    },
    {
      id: 4,
      icon: 'Utensils',
      label: 'essentials',
      description: null,
    },
    {
      id: 5,
      icon: 'AlarmSmoke',
      label: 'fire_alarm',
      description: null,
    },
    {
      id: 6,
      icon: 'Beer',
      label: 'fridge',
      description: null,
    },
    {
      id: 7,
      icon: 'TvMinimal',
      label: 'tv',
      description: null,
    },
    {
      id: 8,
      icon: 'Coffee',
      label: 'coffee_machine',
      description: null,
    },
  ],
  contacts: [
    {
      id: 0,
      icon: 'MapPin',
      label: 'Via anello di san cataldo 10, Taranto, San vito (TA)',
      description: null,
      type: 'location',
    },
    {
      id: 1,
      icon: 'Mail',
      label: 'fabimanu1974@gmail.com',
      description: null,
      type: 'mailto',
    },
    {
      id: 2,
      icon: 'Smartphone',
      label: '+39 391 141 2884',
      description: null,
      type: 'tel',
    },
  ],
  gallery: [
    '/orizzontale/_webp/IMG_5622.webp',
    '/orizzontale/_webp/IMG_5625.webp',
    '/orizzontale/_webp/IMG_5627.webp',
    '/orizzontale/_webp/IMG_5636.webp',
    '/orizzontale/_webp/IMG_5644.webp',
    '/orizzontale/_webp/IMG_5648.webp',
  ],
});
