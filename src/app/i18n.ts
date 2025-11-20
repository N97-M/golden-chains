import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: {
        title: "WELCOME TO GOLDEN CHAINS TRADING LLC",
        close: "Continue"
      },
      nav: {
        home: "Home",
        ourTeam: "Our Team",
        about: "About Us",
        brands: "Brands",
        outlets: "Outlets",
        contact: "Contact Us",
      },
      quickInfo: {
        title: "Quick Info",
        description: "We are your trusted partner for high-quality auto parts and components. With years of experience and a commitment to excellence",
        brandsTitle: "Brands",
        contactTitle: "Contact Info",
        locationTitle: "Our Location",
        address: {
          poBox: "P.O.Box: 378150",
          shop: "Shop No. 7, Al Habtoor Building,",
          area: "Naif Deira Dubai, UAE",
        },
      },
      brands: {
        kyb: "High-quality shock absorbers and suspension parts",
        perfectRubber: "Premium rubber components and suspension parts",
        ibn: "Quality shock absorbers and suspension components",
        nextAuto: "Superior quality gas shock absorbers",
        smart: "High-quality brake pads and components",
        mikatakno: "Engine tune-up and gasket products",
        reliableChoice: "Trusted automotive parts including shock absorbers, brake pads, and suspension components",
        hkt: "High-quality automotive parts and components",
      },
      about: {
        welcomeTo: "WELCOME TO",
        companyName: "GOLDEN CHAINS TRADING LLC",
        p1: "We are a Dubai based company, specializing in auto spare parts and components trading. As a key player in the automotive industry, we deal with the supply and distribution of various parts and accessories required for vehicle maintenance, repair, and upgrade.",
        p2: "Our sector includes a wide range of products, from basic mechanical components like brakes, engines, and suspensions to electrical parts, filters, and lighting. We pride ourselves on offering only the highest quality products from trusted brands.",
        readMore: "Read More",
      },
      aboutPage: {
        title: "ABOUT GOLDEN CHAINS TRADING LLC",
        description: "Golden Chains TRADING LLC, a Dubai-based company, operates in the dynamic sector of auto spare parts and components trading. This industry plays a crucial role in the automotive ecosystem, focusing on the supply and distribution of a diverse range of parts and accessories needed for vehicle maintenance, repairs, and enhancements. The product range spans from essential mechanical components like engines, brakes, and suspensions to electrical items, filters, and lighting solutions. With a global reach, this sector sources parts from manufacturers worldwide and involves both wholesale and retail transactions.",
        missionTitle: "Mission Statement",
        missionText: "Our mission is to deliver exceptional services in the spare parts domain, ensuring unparalleled customer satisfaction through high-quality products and outstanding service.",
        visionTitle: "Vision Statement",
        visionText: "Our vision is to emerge as a leading provider of spare parts, renowned for our dedication to quality, innovation, and customer satisfaction.",
        contactTitle: "Contact Us",
        contactDesc: "Get in touch with us for more information about our products and services.",
        viewLocation: "View Location",
      },
      brandsPage: {
        title: "Our Brands",
        productsLabel: "Products:",
      },
      contactPage: {
        title: "Contact us",
        form: {
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          message: "Comment or Message",
          send: "Send",
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "Failed to send message",
          required: "is required",
          invalidEmail: "Please enter a valid email address",
        },
        businessHours: "Business Hours",
        generalEnquiries: "General enquiries",
        days: {
          monday: "Monday",
          tuesday: "Tuesday",
          wednesday: "Wednesday",
          thursday: "Thursday",
          friday: "Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          closed: "Closed",
        },
      },
      teamPage: {
        title: "Our Team",
        contactWApp: "Contact Me on WApp",
        emailMe: "Email Me",
        roles: {
          founder: "Founder (CEO & General Manager)",
          relManager: "Relationship & Operation Manager",
          warehouseManager: "Warehouse & Marketing Manager",
          salesManager: "Sales Manager",
          salesExec: "Sales Executive",
          adminManager: "Administration Manager",
        },
      },
      outletsPage: {
        title: "Our Outlets",
        uae: "United Arab Emirates",
        sudan: "Sudan",
        addressLabel: "Address:",
        descriptions: {
          warehouseGolden: "Our main warehouse facility in Dubai, ensuring efficient distribution and storage of our extensive range of auto parts.",
          showroomGolden: "Our main showroom in Dubai, showcasing our extensive range of auto parts and accessories.",
          hancoBahri: "Our showroom in Khartoum North Industrial Area, offering a wide selection of automotive products.",
          hancoHilat: "Our showroom in East Nile area, providing comprehensive automotive solutions.",
          warehouseHanco: "Our warehouse facility in Khartoum North Industrial Area, supporting our operations in Sudan.",
        },
      },
    },
  },
  ar: {
    translation: {
      welcome: {
        title: "مرحبًا بكم في جولدن تشينز للتجارة ذ.م.م",
        close: "متابعة"
      },
      nav: {
        home: "الرئيسية",
        ourTeam: "فريقنا",
        about: "من نحن",
        brands: "العلامات التجارية",
        outlets: "الفروع",
        contact: "اتصل بنا",
      },
      quickInfo: {
        title: "معلومات سريعة",
        description: "نحن شريكك الموثوق لقطع غيار السيارات والمكونات عالية الجودة. مع سنوات من الخبرة والالتزام بالتميز",
        brandsTitle: "العلامات التجارية",
        contactTitle: "معلومات الاتصال",
        locationTitle: "موقعنا",
        address: {
          poBox: "ص.ب: 378150",
          shop: "متجر رقم 7، مبنى الحبتور،",
          area: "نايف ديرة دبي، الإمارات العربية المتحدة",
        },
      },
      brands: {
        kyb: "ممتصات صدمات وأجزاء تعليق عالية الجودة",
        perfectRubber: "مكونات مطاطية وأجزاء تعليق ممتازة",
        ibn: "ممتصات صدمات ومكونات تعليق عالية الجودة",
        nextAuto: "ممتصات صدمات غازية فائقة الجودة",
        smart: "وسادات فرامل ومكونات عالية الجودة",
        mikatakno: "منتجات ضبط المحرك والحشيات",
        reliableChoice: "قطع غيار سيارات موثوقة بما في ذلك ممتصات الصدمات ووسادات الفرامل ومكونات التعليق",
        hkt: "قطع غيار ومكونات سيارات عالية الجودة",
      },
      about: {
        welcomeTo: "مرحبا بكم في",
        companyName: "جولدن تشينز للتجارة ذ.م.م",
        p1: "نحن شركة مقرها دبي، متخصصة في تجارة قطع غيار السيارات والمكونات. كلاعب رئيسي في صناعة السيارات، نتعامل مع توريد وتوزيع مختلف الأجزاء والملحقات المطلوبة لصيانة المركبات وإصلاحها وترقيتها.",
        p2: "يشمل قطاعنا مجموعة واسعة من المنتجات، من المكونات الميكانيكية الأساسية مثل الفرامل والمحركات وأنظمة التعليق إلى الأجزاء الكهربائية والمرشحات والإضاءة. نحن نفخر بتقديم منتجات عالية الجودة فقط من علامات تجارية موثوقة.",
        readMore: "اقرأ المزيد",
      },
      aboutPage: {
        title: "عن جولدن تشينز للتجارة ذ.م.م",
        description: "تعمل شركة جولدن تشينز للتجارة ذ.م.م، ومقرها دبي، في قطاع تجارة قطع غيار السيارات والمكونات الديناميكي. يلعب هذا القطاع دورًا حاسمًا في النظام البيئي للسيارات، مع التركيز على توريد وتوزيع مجموعة متنوعة من الأجزاء والملحقات اللازمة لصيانة المركبات وإصلاحها وتحسينها. يمتد نطاق المنتجات من المكونات الميكانيكية الأساسية مثل المحركات والفرامل وأنظمة التعليق إلى العناصر الكهربائية والمرشحات وحلول الإضاءة. مع انتشار عالمي، يورد هذا القطاع قطع الغيار من الشركات المصنعة في جميع أنحاء العالم ويشمل معاملات الجملة والتجزئة.",
        missionTitle: "بيان المهمة",
        missionText: "مهمتنا هي تقديم خدمات استثنائية في مجال قطع الغيار، وضمان رضا العملاء منقطع النظير من خلال منتجات عالية الجودة وخدمة متميزة.",
        visionTitle: "بيان الرؤية",
        visionText: "رؤيتنا هي أن نبرز كمزود رائد لقطع الغيار، مشهور بتفانينا في الجودة والابتكار ورضا العملاء.",
        contactTitle: "اتصل بنا",
        contactDesc: "تواصل معنا لمزيد من المعلومات حول منتجاتنا وخدماتنا.",
        viewLocation: "عرض الموقع",
      },
      brandsPage: {
        title: "علاماتنا التجارية",
        productsLabel: "المنتجات:",
      },
      contactPage: {
        title: "اتصل بنا",
        form: {
          firstName: "الاسم الأول",
          lastName: "الاسم الأخير",
          email: "البريد الإلكتروني",
          message: "التعليق أو الرسالة",
          send: "إرسال",
          sending: "جاري الإرسال...",
          success: "تم إرسال الرسالة بنجاح!",
          error: "فشل في إرسال الرسالة",
          required: "مطلوب",
          invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
        },
        businessHours: "ساعات العمل",
        generalEnquiries: "استفسارات عامة",
        days: {
          monday: "الاثنين",
          tuesday: "الثلاثاء",
          wednesday: "الأربعاء",
          thursday: "الخميس",
          friday: "الجمعة",
          saturday: "السبت",
          sunday: "الأحد",
          closed: "مغلق",
        },
      },
      teamPage: {
        title: "فريقنا",
        contactWApp: "تواصل معي عبر واتساب",
        emailMe: "راسلني",
        roles: {
          founder: "المؤسس (الرئيس التنفيذي والمدير العام)",
          relManager: "مدير العلاقات والعمليات",
          warehouseManager: "مدير المستودع والتسويق",
          salesManager: "مدير المبيعات",
          salesExec: "تنفيذي مبيعات",
          adminManager: "مدير إداري",
        },
      },
      outletsPage: {
        title: "فروعنا",
        uae: "الإمارات العربية المتحدة",
        sudan: "السودان",
        addressLabel: "العنوان:",
        descriptions: {
          warehouseGolden: "مستودعنا الرئيسي في دبي، يضمن التوزيع والتخزين الفعال لمجموعتنا الواسعة من قطع غيار السيارات.",
          showroomGolden: "معرضنا الرئيسي في دبي، يعرض مجموعتنا الواسعة من قطع غيار السيارات والملحقات.",
          hancoBahri: "معرضنا في المنطقة الصناعية بالخرطوم بحري، يقدم مجموعة واسعة من منتجات السيارات.",
          hancoHilat: "معرضنا في منطقة شرق النيل، يوفر حلول سيارات شاملة.",
          warehouseHanco: "مرفق مستودعنا في المنطقة الصناعية بالخرطوم بحري، يدعم عملياتنا في السودان.",
        },
      },
    },
  },
};

const i18nInstance = i18n.use(initReactI18next);

if (typeof window !== "undefined") {
  i18nInstance.use(LanguageDetector);
}

i18nInstance.init({
  resources,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

export default i18n;
