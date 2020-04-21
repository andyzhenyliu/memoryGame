export interface MenuOption {
  label: string;
  time: number;
  rule: Rule;
}

export interface Rule {
  colors: number;
  patterns: number;
}
