import type { Feature, ScheduleItem, FlowStep, GroupCompany, NavItem } from '../types';

export const SITE_NAME = 'グループホーム コスモスの里';
export const SITE_NAME_SHORT = 'コスモスの里';
export const CORPORATION_NAME = '有限会社 愛友会';
export const TEL = '084-976-2200';
export const FAX = '084-976-2201';
export const ADDRESS = '〒720-1132 広島県福山市駅家町万能倉1256-1';
export const RECEPTION_HOURS = '9:00〜17:00（年中無休）';
export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.1!2d133.3188!3d34.5553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3550731e7be36b51%3A0xd0befc90bae67a97!2z44Kz44K544Oi44K544Gu6YeM!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp';

export const NAV_ITEMS: NavItem[] = [
  { label: '特徴', href: '#features' },
  { label: '一日の流れ', href: '#schedule' },
  { label: '入居の流れ', href: '#flow' },
  { label: '施設概要', href: '#company' },
  { label: 'お問い合わせ', href: '#contact' },
];

export const HERO = {
  label: '認知症対応型共同生活介護',
  catchCopy: '自宅のように\n安心して暮らせる場所',
  subCopy:
    '広島県福山市駅家町にあるグループホーム「コスモスの里」は、認知症の方が少人数で共同生活を送る家庭的な施設です。一人ひとりの個性を大切にし、穏やかな毎日をサポートします。',
  ctaText: 'お問い合わせはこちら',
  image: '/images/入り口2.JPG',
};

export const FEATURES: Feature[] = [
  {
    icon: 'favorite',
    title: '看取りケア',
    description:
      '住み慣れた場所で最期まで安心して過ごしていただけるよう、医療機関と連携しながら看取りケアに対応しています。ご本人・ご家族の意思を尊重し、穏やかな時間をお支えします。',
    image: '/images/廊下.jpg',
  },
  {
    icon: 'groups',
    title: '地域との交流',
    description:
      '地域のお祭りや行事への参加、ボランティアの方々との交流を通じて、社会とのつながりを大切にしています。季節を感じるイベントも定期的に開催しています。',
    image: '/images/お祭り.jpg',
  },
  {
    icon: 'newspaper',
    title: 'コスモス通信',
    description:
      '施設での日々の様子やイベントの報告を「コスモス通信」としてご家族にお届けしています。離れていてもお元気な姿を感じていただけます。',
    image: '/images/敬老会掲示.jpg',
  },
];

export const SCHEDULE: ScheduleItem[] = [
  { time: '7:00', activity: '起床・身支度', icon: 'wb_sunny' },
  { time: '8:00', activity: '朝食', icon: 'restaurant' },
  { time: '10:00', activity: '体操・レクリエーション', icon: 'fitness_center' },
  { time: '12:00', activity: '昼食', icon: 'lunch_dining' },
  { time: '15:00', activity: 'おやつ・余暇活動', icon: 'coffee' },
  { time: '18:00', activity: '夕食', icon: 'dinner_dining' },
  { time: '21:00', activity: '就寝', icon: 'bedtime' },
];

export const FLOW_STEPS: FlowStep[] = [
  {
    number: 1,
    icon: 'call',
    title: 'お問い合わせ',
    description: 'お電話またはお問い合わせフォームよりご連絡ください。ご質問だけでもお気軽にどうぞ。',
  },
  {
    number: 2,
    icon: 'location_on',
    title: '見学・面談',
    description: '実際に施設をご覧いただき、生活環境やケア内容についてご説明いたします。',
  },
  {
    number: 3,
    icon: 'description',
    title: '契約',
    description: '入居条件やご利用料金について丁寧にご説明し、ご納得いただいた上でご契約となります。',
  },
  {
    number: 4,
    icon: 'home',
    title: '入居',
    description: 'スタッフ一同、心を込めてお迎えいたします。新しい生活のスタートをサポートします。',
  },
];

export const GROUP_COMPANIES: GroupCompany[] = [
  {
    name: 'デイサービスセンター コスモス',
    address: '広島県福山市駅家町万能倉1256-1',
    url: '',
  },
  {
    name: 'ヘルパーステーション コスモス',
    address: '広島県福山市駅家町万能倉1256-1',
    url: '',
  },
  {
    name: 'ケアプランセンター コスモス',
    address: '広島県福山市駅家町万能倉1256-1',
    url: '',
  },
  {
    name: 'コスモス訪問看護ステーション',
    address: '広島県福山市駅家町万能倉1256-1',
    url: '',
  },
];

export const COMPANY_INFO = {
  name: CORPORATION_NAME,
  representative: '代表取締役 越智 愛子',
  established: '平成12年4月',
  business:
    '認知症対応型共同生活介護（グループホーム）、通所介護（デイサービス）、訪問介護（ヘルパー）、居宅介護支援（ケアプラン）、訪問看護',
  address: ADDRESS,
  tel: TEL,
  fax: FAX,
  image: '/images/入り口1.jpg',
};
