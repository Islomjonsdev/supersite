import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        //Header
        services: "Xizmatlar",
        portfolio: "Portfolio",
        aboutUs: "Biz haqimizda",
        team: "Jamoa",
        blog: "Blog",
        takl: "Sharhlar",
        //Hero
        it_services: "IT xizmatlar uchun",
        business: "har qanday darajadagi biznes",
        more: "5 yildan ortiq vaqt davomida bizning e'tiborimiz shu biznesingizni onlayn o'zgartirish",
        callWithYou: "Biz bilan bog'lanish",
      },
    },
    ru: {
      translation: {
        //Header
        services: "Услуги",
        portfolio: "Портфолио",
        aboutUs: "О нас",
        team: "Кoманда",
        blog: "Блог",
        takl: "Отзывы",

        it_services: "IT-услуги для ",
        business: "бизнеса любого уровня",
        more: "Более 5 лет наш фокус в онлайн трансформации Вашего бизнеса",
        callWithYou: "Связаться с нами",
      },
    },
  },
  lng: 'ru',
  fallbackLng: 'ru', 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
