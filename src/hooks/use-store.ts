import Store from '@/stores/store';

const useStore = () => {
  const store = Store();

  return { ...store };
};

export default useStore;
