'use client';

import { motion } from 'framer-motion';

type IconKey =
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'whatsapp'
  | 'airbnb'
  | 'waze'
  | 'maps'
  | 'links';

interface SocialItem {
  key: IconKey;
  label: string;
  href: string;
  brand: string;
}

const paths: Record<IconKey, string> = {
  instagram:
    'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.34 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.29 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.29-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63c-.76-.29-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84ZM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm6.41-10.45a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z',
  facebook:
    'M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.49 0-1.95.93-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12Z',
  tiktok:
    'M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z',
  whatsapp:
    'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.41Z',
  airbnb:
    'M12 0a2.3 2.3 0 0 0-2.3 1.96l-.03.2c-.69 2.4-1.96 5.09-3.72 8.07l-.67 1.12-.27.46-.07.12c-1.51 2.52-2.28 4.53-2.28 6.16 0 1.96 1.36 3.3 3.3 3.3 1.21 0 2.43-.49 3.55-1.4l.4-.34.18.16c1.18.99 2.46 1.58 3.73 1.58 1.94 0 3.3-1.34 3.3-3.3 0-1.63-.77-3.64-2.28-6.16l-.07-.12-.27-.46-.67-1.12c-1.76-2.98-3.03-5.67-3.72-8.07l-.03-.2A2.3 2.3 0 0 0 12 0Zm0 1.6c.42 0 .76.3.83.71l.02.13c.74 2.56 2.07 5.39 3.91 8.5l.66 1.12.26.45.13.23c1.3 2.2 1.93 3.86 1.93 5.05 0 1.1-.7 1.78-1.79 1.78-.88 0-1.85-.46-2.78-1.27l-.2-.18.27-.33c1.31-1.64 1.96-3.15 1.96-4.56 0-1.93-1.34-3.27-3.18-3.27s-3.18 1.34-3.18 3.27c0 1.41.65 2.92 1.96 4.56l.27.33-.2.18c-.93.81-1.9 1.27-2.78 1.27-1.09 0-1.79-.68-1.79-1.78 0-1.19.63-2.85 1.93-5.05l.13-.23.26-.45.66-1.12c1.84-3.11 3.17-5.94 3.91-8.5l.02-.13c.07-.41.41-.71.83-.71Zm0 9.42c1 0 1.66.7 1.66 1.75 0 .96-.5 2.08-1.46 3.32l-.2.25-.2-.25c-.96-1.24-1.46-2.36-1.46-3.32 0-1.05.66-1.75 1.66-1.75Z',
  waze:
    'M12 2a8 8 0 0 0-8 8c0 .9.15 1.77.43 2.58A2.5 2.5 0 0 0 6 17h.6a3 3 0 0 0 5.8 0h.2a3 3 0 0 0 5.8 0H19a2 2 0 0 0 1.4-3.42A8 8 0 0 0 12 2Zm-2.5 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-5.1 2.95a.6.6 0 0 1 .83.17 3.34 3.34 0 0 0 5.54 0 .6.6 0 1 1 1 .66 4.54 4.54 0 0 1-7.54 0 .6.6 0 0 1 .17-.83Z',
  maps:
    'M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z',
  links:
    'M10.59 13.41a1 1 0 0 0 1.42 0l4-4a3 3 0 0 0-4.24-4.24l-1.3 1.3a1 1 0 1 0 1.42 1.42l1.3-1.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 0 0 1.42Zm2.82-2.82a1 1 0 0 0-1.42 0l-4 4a3 3 0 0 0 4.24 4.24l1.3-1.3a1 1 0 0 0-1.42-1.42l-1.3 1.3a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 0 0-1.42Z',
};

const ALL_SOCIALS: SocialItem[] = [];

export function buildSocials(data: {
  whatsapp: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  airbnb: string;
  waze?: string;
  maps?: string;
  links: string;
}): SocialItem[] {
  const items: SocialItem[] = [
    { key: 'whatsapp', label: 'WhatsApp', href: data.whatsapp, brand: '#25D366' },
    { key: 'instagram', label: 'Instagram', href: data.instagram, brand: '#E1306C' },
    { key: 'facebook', label: 'Facebook', href: data.facebook, brand: '#1877F2' },
    { key: 'tiktok', label: 'TikTok', href: data.tiktok, brand: '#69C9D0' },
    { key: 'airbnb', label: 'Airbnb', href: data.airbnb, brand: '#FF5A5F' },
  ];
  if (data.waze) items.push({ key: 'waze', label: 'Waze', href: data.waze, brand: '#33CCFF' });
  if (data.maps) items.push({ key: 'maps', label: 'Google Maps', href: data.maps, brand: '#34A853' });
  items.push({ key: 'links', label: 'Todas las redes', href: data.links, brand: '#bd9a5b' });
  return items;
}

function Icon({ k, className = 'w-5 h-5' }: { k: IconKey; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={paths[k]} />
    </svg>
  );
}

/** Round icon buttons — for footer / compact areas */
export function SocialIconRow({ socials }: { socials: SocialItem[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {socials.map((s) => (
        <motion.a
          key={s.key}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          whileHover={{ y: -3 }}
          className="group relative grid place-items-center h-10 w-10 rounded-full liquid-glass text-cream/80 transition-colors"
          style={{ ['--brand' as string]: s.brand }}
        >
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: s.brand }}
          />
          <span className="relative group-hover:text-white transition-colors">
            <Icon k={s.key} />
          </span>
        </motion.a>
      ))}
    </div>
  );
}

/** Labeled pill buttons — for contact section */
export function SocialButtonGrid({ socials }: { socials: SocialItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      {socials.map((s) => (
        <a
          key={s.key}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-xl liquid-glass px-3.5 py-3 text-sm text-cream/85 hover:text-white transition-colors"
        >
          <span
            className="grid place-items-center h-7 w-7 rounded-lg shrink-0 transition-transform group-hover:scale-110"
            style={{ backgroundColor: s.brand }}
          >
            <Icon k={s.key} className="w-4 h-4 text-white" />
          </span>
          <span className="truncate">{s.label}</span>
        </a>
      ))}
    </div>
  );
}

export { ALL_SOCIALS };
