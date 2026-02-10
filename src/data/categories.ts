import type { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'cloud-storage',
    name: 'Cloud Storage',
    description: 'File storage and sync services',
    usGiants: ['Google Drive', 'Dropbox', 'iCloud', 'OneDrive'],
  },
  {
    id: 'email',
    name: 'Email',
    description: 'Email providers and services',
    usGiants: ['Gmail', 'Outlook', 'Yahoo Mail'],
  },
  {
    id: 'search-engine',
    name: 'Search Engine',
    description: 'Web search engines',
    usGiants: ['Google Search', 'Bing'],
  },
  {
    id: 'social-media',
    name: 'Social Media',
    description: 'Social networking platforms',
    usGiants: ['Facebook', 'Instagram', 'X/Twitter', 'LinkedIn'],
  },
  {
    id: 'messaging',
    name: 'Messaging',
    description: 'Instant messaging and communication',
    usGiants: ['WhatsApp', 'iMessage', 'Discord', 'Slack'],
  },
  {
    id: 'video-hosting',
    name: 'Video Hosting',
    description: 'Video platforms and streaming',
    usGiants: ['YouTube', 'Vimeo', 'Twitch'],
  },
  {
    id: 'office-suite',
    name: 'Office Suite',
    description: 'Document editing and collaboration',
    usGiants: ['Microsoft Office', 'Google Workspace'],
  },
  {
    id: 'maps',
    name: 'Maps & Navigation',
    description: 'Mapping and navigation services',
    usGiants: ['Google Maps', 'Apple Maps', 'Waze'],
  },
  {
    id: 'browser',
    name: 'Browser',
    description: 'Web browsers',
    usGiants: ['Google Chrome', 'Safari', 'Edge'],
  },
  {
    id: 'vpn',
    name: 'VPN',
    description: 'Virtual private network services',
    usGiants: ['NordVPN', 'ExpressVPN'],
  },
  {
    id: 'analytics',
    name: 'Analytics',
    description: 'Web and product analytics',
    usGiants: ['Google Analytics', 'Mixpanel', 'Amplitude'],
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'Task and project management tools',
    usGiants: ['Jira', 'Asana', 'Monday.com', 'Trello'],
  },
  {
    id: 'password-manager',
    name: 'Password Manager',
    description: 'Password management and security',
    usGiants: ['LastPass', '1Password', 'Dashlane'],
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Artificial intelligence platforms and tools',
    usGiants: ['OpenAI', 'Google AI', 'AWS AI'],
  },
  {
    id: 'hosting',
    name: 'Cloud & Hosting',
    description: 'Web hosting and cloud infrastructure',
    usGiants: ['AWS', 'Google Cloud', 'Azure', 'Cloudflare'],
  },
  {
    id: 'payments',
    name: 'Payments',
    description: 'Payment processing and fintech',
    usGiants: ['Stripe', 'PayPal', 'Square'],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    description: 'Online store platforms',
    usGiants: ['Shopify', 'Amazon', 'eBay'],
  },
  {
    id: 'other',
    name: 'Other',
    description: 'Other tools and services',
    usGiants: [],
  },
];
