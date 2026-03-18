export interface Feature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
  icon: string;
  description?: string;
}

export interface FlowStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface GroupCompany {
  name: string;
  address: string;
  url: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
