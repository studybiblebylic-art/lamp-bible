import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.holybible.parallel',
  appName: 'Holy Bible',
  webDir: 'dist',
  server: {
    url: 'https://ais-dev-yxsxy7gmchlla65tg4tok2-697326457514.asia-southeast1.run.app',
    cleartext: false
  },
  android: {
    backgroundColor: '#FBF8F1'
  }
};

export default config;
