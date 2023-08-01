export interface NavSubLink {
  id: string;
  path: string;
  label: string;
  available: boolean;
  icon: null;
}

export interface NavLink {
  id: string;
  path: string;
  label: string;
  available: boolean;
  icon: null;
  subLinks: NavSubLink[];
  isDisabled: boolean;
}
