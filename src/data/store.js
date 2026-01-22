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
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww',
  ],
});
