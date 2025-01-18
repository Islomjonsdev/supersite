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
        business: "har qanday darajadagi biznes"
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
        business: "бизнеса любого уровня"
      },
    },
  },
  lng: 'uz', // boshlang'ich til
  fallbackLng: 'uz', // til topilmasa foydalaniladi
  interpolation: {
    escapeValue: false, // XSSdan himoya
  },
});

export default i18n;
