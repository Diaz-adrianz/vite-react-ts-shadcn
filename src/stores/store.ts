import Config from '@/configs/config';
import StorageKeys from '@/configs/storage-keys';
import { Locale } from '@/types/type';
import { create } from 'zustand';

interface StoreState {
  locale: Locale;
}

interface StoreAction {
  setLocale: (locale: Locale) => void;
  clear: () => void;
}

const StoreInit: StoreState = {
  locale:
    (localStorage.getItem(StorageKeys.LOCALE) as Locale) ??
    Config.DEFAULT_LOCALE,
};

const Store = create<StoreState & StoreAction>((set) => ({
  ...StoreInit,
  setLocale: (locale) => {
    localStorage.setItem(StorageKeys.LOCALE, locale);
    set({ locale });
  },
  clear: () => set({ ...StoreInit }),
}));

export default Store;
