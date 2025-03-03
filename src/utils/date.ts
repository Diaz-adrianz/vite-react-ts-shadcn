import Config from '@/configs/config';
import moment from 'moment';

export const formatTime = (
  time: any,
  format: string,
  {
    fb = '',
    locale = Config.DEFAULT_LOCALE,
  }: {
    fb?: string;
    locale?: string;
  } = {}
) => {
  if (!time) return fb;
  return moment.parseZone(time).locale(locale).format(format);
};
