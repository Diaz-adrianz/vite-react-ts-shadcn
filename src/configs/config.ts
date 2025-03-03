import { Locale } from '@/types/type';

// use UPPERCASE for key
interface Config {
  DEFAULT_LOCALE: Locale;
}

const Config: Config = {
  DEFAULT_LOCALE: 'en',
};

export default Config;
