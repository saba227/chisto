import "./App.css";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import Header from "./Components/header/header";
import FirstBaner from "./Components/firstBaner/firstBaner";
import Footer from "./Components/footer/footer";
import ServiceCards from "./Components/serviceCard/serviceCard";
import About from "./Components/aboutUs/about";

const store = sessionStorage.getItem("languageChanger"); // get storage for change language

i18n.use(initReactI18next).init({
  resources: {
    geo: {
      translation: {
        menu: {
          service: "სერვისები",
          about: "ჩვენს შესახებ",
          contact: "კონტაქტი",
        },
        firstBaner: {
          h1text1: "ქიმწმენდა",
          h1text2: "დასუფთავების",
          h1text3: "სერვისი ბათუმში",
          startbutton: "დაწყება",
        },
        cards: {
          carpetText:
            "ხალიჩების ქიმწმენდა ბავშვისთვის უსაფრთხო და უმაღლესი ხარისხის არაალერგიული ხსნარებით.",
          carpetTitle: "ხალიჩების ქიმწმენდა",
          glassCleaningText:
            " ნებისმიერი ლაქის მოცილება მინიდან. არაალერგიული მაღალი ხარისხის ხსნარებით.",
          glassCleaningTitle: "მინის წმენდა",
          bedClneaningText:
            " ჩამჯდარი მტვრის და ლაქების მოცილება, დეზინფექცია, ქიმწმენდა.",
          bedClneaningTitle: "რემონტის შემდგომი დალაგება",
          furnitureCleaningText: "მატრასები, კრესლო, დივანი, სკამები.",
          furnitureCleaningTitle: "რბილი ავეჯის ქიმწმენდა",
          homeCleaningText: "აპარტამენტის სრული დალაგების სერვისი.",
          homeCleaningTitle: "აპარტამენტის დალაგება",
          officeCleaningText:
            "იატაკების წმენდა, სრული ფართის დალაგება დეზინფექცია.",
          officeCleaningTitle: "ოფისის დალაგება",
          cost: "₾",
          button: "შეკვეთა",
        },
        seriveBuyCard: {
          title: "შეუკვეთე",
          service: "სერვისი",
          name: "სახელი",
          number: "ნომერი",
          button: "შეკვეთა",
        },
      },
    },
    ru: {
      translation: {
        menu: {
          service: "Используя",
          about: "Используя",
          contact: "Используя",
        },
        firstBaner: {
          h1text1: "Используя",
          h1text2: "этот сайт",
          h1text3: "Используя сайт",
          startbutton: "Get Start",
        },
        cards: {
          carpetText: "we cleaning every type of sofas. hight quality",
          carpetTitle: "Cleaning",
          glassCleaningText: "we cleaning every type of sofas. hight quality",
          glassCleaningTitle: "glass cleaning",
          bedClneaningText: "we cleaning every type of sofas. hight quality",
          bedClneaningTitle: "Cleaning",
          furnitureCleaningText:
            "we cleaning every type of sofas. hight quality",
          furnitureCleaningTitle: "Cleaning",
          homeCleaningText: "we cleaning every type of sofas. hight quality",
          homeCleaningTitle: "Cleaning",
          officeCleaningText: "we cleaning every type of sofas. hight quality",
          officeCleaningTitle: "Cleaning",
          cost: "Gel",
          button: "Buy",
        },
        seriveBuyCard: {
          title: "Order",
          service: "Service",
          name: "Name",
          number: "Phone",
          button: "Buy",
        },
      },
    },
  },
  lng: "geo",
  fallbackLng: "geo",
  debug: false,

  interpolation: {
    escapeValue: false,
  },
});

i18n.changeLanguage(store);

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Header translation={t} />
      <FirstBaner translation={t} />
      <ServiceCards translation={t} />
      <About />
      <Footer translation={t} />
    </div>
  );
}

export default App;
