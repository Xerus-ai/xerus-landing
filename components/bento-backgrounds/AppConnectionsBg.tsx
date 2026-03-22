'use client';

import BentoBg from './BentoBg';
import {
  SiSlack,
  SiGmail,
  SiNotion,
  SiAirtable,
  SiGooglecalendar,
  SiStripe,
  SiFigma,
  SiLinear,
  SiX,
  SiHubspot,
  SiJira,
  SiShopify,
  SiGoogledrive,
  SiZapier,
  SiWebflow,
  SiIntercom,
  SiAsana,
  SiDropbox,
  SiTrello,
  SiLinkedin,
  SiDiscord,
  SiGithub,
  SiTwitch,
  SiMailchimp,
  SiSalesforce,
  SiZendesk,
  SiClickup,
  SiMiro,
  SiCalendly,
  SiTodoist,
  SiPostman,
  SiSupabase,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

/* ── Rows ── */

const ROW_1: { name: string; Icon: IconType; color: string }[] = [
  { name: 'Slack', Icon: SiSlack, color: '#E01E5A' },
  { name: 'Gmail', Icon: SiGmail, color: '#EA4335' },
  { name: 'Notion', Icon: SiNotion, color: '#000000' },
  { name: 'Airtable', Icon: SiAirtable, color: '#18BFFF' },
  { name: 'Calendar', Icon: SiGooglecalendar, color: '#4285F4' },
  { name: 'Stripe', Icon: SiStripe, color: '#635BFF' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'Linear', Icon: SiLinear, color: '#5E6AD2' },
];

const ROW_2: typeof ROW_1 = [
  { name: 'X', Icon: SiX, color: '#000000' },
  { name: 'HubSpot', Icon: SiHubspot, color: '#FF7A59' },
  { name: 'Jira', Icon: SiJira, color: '#0052CC' },
  { name: 'Shopify', Icon: SiShopify, color: '#7AB55C' },
  { name: 'Drive', Icon: SiGoogledrive, color: '#4285F4' },
  { name: 'Zapier', Icon: SiZapier, color: '#FF4A00' },
  { name: 'Webflow', Icon: SiWebflow, color: '#4353FF' },
  { name: 'Intercom', Icon: SiIntercom, color: '#1F8DED' },
];

const ROW_3: typeof ROW_1 = [
  { name: 'Asana', Icon: SiAsana, color: '#F06A6A' },
  { name: 'Dropbox', Icon: SiDropbox, color: '#0061FF' },
  { name: 'Trello', Icon: SiTrello, color: '#0079BF' },
  { name: 'LinkedIn', Icon: SiLinkedin, color: '#0A66C2' },
  { name: 'Discord', Icon: SiDiscord, color: '#5865F2' },
  { name: 'GitHub', Icon: SiGithub, color: '#181717' },
  { name: 'Twitch', Icon: SiTwitch, color: '#9146FF' },
  { name: 'Mailchimp', Icon: SiMailchimp, color: '#FFE01B' },
];

const ROW_4: typeof ROW_1 = [
  { name: 'Salesforce', Icon: SiSalesforce, color: '#00A1E0' },
  { name: 'Zendesk', Icon: SiZendesk, color: '#03363D' },
  { name: 'ClickUp', Icon: SiClickup, color: '#7B68EE' },
  { name: 'Miro', Icon: SiMiro, color: '#FFD02F' },
  { name: 'Calendly', Icon: SiCalendly, color: '#006BFF' },
  { name: 'Todoist', Icon: SiTodoist, color: '#E44332' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
  { name: 'Supabase', Icon: SiSupabase, color: '#3FCF8E' },
];

/* Duplicate for seamless loop */
const row1 = [...ROW_1, ...ROW_1];
const row2 = [...ROW_2, ...ROW_2];
const row3 = [...ROW_3, ...ROW_3];
const row4 = [...ROW_4, ...ROW_4];

/* ── App tile ── */

function AppTile({ name, Icon, color }: { name: string; Icon: IconType; color: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 shrink-0 w-[72px]">
      <div className="w-12 h-12 rounded-xl bg-white border border-[#e0e0e0] flex items-center justify-center shadow-sm">
        <Icon size={24} color={color} />
      </div>
      <span className="text-[10px] font-medium text-[#1a1a1a] text-center whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

/* ── Marquee row ── */

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: { name: string; Icon: IconType; color: string }[];
  direction: 'left' | 'right';
  duration: string;
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex gap-4 w-max"
        style={{ animation: `marquee-${direction} ${duration} linear infinite` }}
      >
        {items.map((app, i) => (
          <AppTile key={`${direction}-${i}`} {...app} />
        ))}
      </div>
    </div>
  );
}

/* ── Main ── */

export default function AppConnectionsBg() {
  return (
    <BentoBg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden py-4">
        <MarqueeRow items={row1} direction="left" duration="22s" />
        <MarqueeRow items={row2} direction="right" duration="26s" />
        <MarqueeRow items={row3} direction="left" duration="24s" />
        <MarqueeRow items={row4} direction="right" duration="28s" />
      </div>
    </BentoBg>
  );
}
