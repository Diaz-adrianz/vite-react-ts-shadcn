export interface Option {
  value: string;
  label: Lang;
}

export type Locale = 'id' | 'en';

export type Lang = Partial<Record<Locale, string>>;
