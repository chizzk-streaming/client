import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        default: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple SD Gothic Neo',
          'Malgun Gothic',
          '맑은 고딕',
          'Nanum Gothic',
          '나눔고딕',
          'Noto Sans KR',
          'Noto Sans CJK KR',
          'sans-serif',
        ],
        title: [
          "'Sandoll Nemony2'",
          'Apple SD Gothic NEO',
          'Helvetica Neue',
          'Helvetica',
          '나눔고딕',
          'NanumGothic',
          'sans-serif',
        ],
      },
      colors: {
        customGray: {
          100: '#757575',
          300: '#dfe2ea',
          1000: '#141517',
          hover: 'hsla(0,0%,100%,.1)',
        },
        title: {
          gray: {
            300: '#9DA5B6',
          },
        },
      },
      borderColor: {
        gray: 'hsla(0,0%,100%,.1)',
        grayDark: '#303133',
        green: {
          300: 'rgba(0,255,163,.5)',
        },
      },
      spacing: {
        mvh: 'calc(var(--vh, 1vh)*100)',
      },
    },
  },
  plugins: [],
};
export default config;
