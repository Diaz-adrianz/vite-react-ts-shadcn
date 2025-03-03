import Config from '@/configs/config';
import en from '@/locales/en.json';
import id from '@/locales/id.json';
import Store from '@/stores/store';
import { Lang } from '@/types/type';

const locales: any = { id, en };

const useLocale = () => {
  const store = Store();

  const dict = (key: string, params: Record<string, any> = {}) => {
    let translation = ((locales[store.locale] as any)?.[key] as string) || key;

    Object.keys(params).forEach((paramKey) => {
      const value = params[paramKey];
      const regex = new RegExp(`{{${paramKey}}}`, 'g');
      translation = translation.replace(regex, String(value));
    });

    return translation;
  };

  const translate = (lang?: Lang) =>
    lang ? (lang[store.locale] ?? lang[Config.DEFAULT_LOCALE] ?? '') : '';

  return { dict, translate };
};

export default useLocale;
