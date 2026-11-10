export type Lang = 'uk' | 'en'

/** Company contact details. Leave a value empty to hide it on the site. */
export const contacts = {
  phone: '',
  email: '',
  address: { uk: 'Україна', en: 'Ukraine' },
}

export const enquiryForm = {
  name: 'request-quote',
  endpoint: '/__forms.html',
}

export const img = (file: string, w: number) =>
  `/.netlify/images?url=/img/${file}&w=${w}&fm=webp&q=75`

export type SectorId = 'gas' | 'oil' | 'port' | 'machine' | 'mining'

type Sector = {
  id: SectorId
  image: string
  title: string
  client: string
  description: string
  items: string[]
}

type Content = {
  langName: string
  otherLangLabel: string
  meta: { title: string; description: string }
  legalName: string
  nav: { about: string; sectors: string; supply: string; process: string; contact: string; cta: string }
  hero: { eyebrow: string; title: string; titleAccent: string; lead: string; primary: string; secondary: string }
  stats: { value: string; label: string }[]
  about: { eyebrow: string; title: string; paragraphs: string[]; points: string[] }
  sectorsSection: { eyebrow: string; title: string; lead: string; request: string }
  sectors: Sector[]
  supply: { eyebrow: string; title: string; lead: string; groups: { title: string; text: string }[] }
  advantages: { eyebrow: string; title: string; items: { title: string; text: string }[] }
  process: { eyebrow: string; title: string; steps: { title: string; text: string }[] }
  form: {
    eyebrow: string
    title: string
    lead: string
    sectorLabel: string
    sectorPlaceholder: string
    otherSector: string
    company: string
    name: string
    phone: string
    email: string
    message: string
    messageHint: string
    submit: string
    sending: string
    success: string
    again: string
    error: string
    contactsTitle: string
    phoneLabel: string
    emailLabel: string
    addressLabel: string
    responseNote: string
  }
  footer: { rights: string; tagline: string }
  notFound: { title: string; text: string; back: string }
}

export const content: Record<Lang, Content> = {
  uk: {
    langName: 'УКР',
    otherLangLabel: 'English version',
    meta: {
      title: 'ТОВ «ІНПРОММАШ» — постачання промислового обладнання та запчастин',
      description:
        'Постачання обладнання та запасних частин для газовидобувної та нафтової галузі, морських портів, машинобудування та гірничодобувної промисловості України.',
    },
    legalName: 'ТОВ «ІНПРОММАШ»',
    nav: {
      about: 'Про компанію',
      sectors: 'Галузі',
      supply: 'Що постачаємо',
      process: 'Як працюємо',
      contact: 'Контакти',
      cta: 'Надіслати запит',
    },
    hero: {
      eyebrow: 'Промислове постачання · Україна',
      title: 'Обладнання та запчастини,',
      titleAccent: 'що тримають промисловість у русі',
      lead: 'ТОВ «ІНПРОММАШ» постачає обладнання та запасні частини для газовидобувних і нафтових підприємств, морських портів, машинобудівних та гірничодобувних виробництв України.',
      primary: 'Отримати комерційну пропозицію',
      secondary: 'Галузі, з якими працюємо',
    },
    stats: [
      { value: '5', label: 'ключових галузей промисловості' },
      { value: 'B2B', label: 'постачання для державних і приватних підприємств' },
      { value: 'ЗІП', label: 'вузли, агрегати та запасні частини' },
      { value: '24 год', label: 'на первинну відповідь щодо запиту' },
    ],
    about: {
      eyebrow: 'Про компанію',
      title: 'Надійний партнер у постачанні для критичних галузей',
      paragraphs: [
        'ІНПРОММАШ — українська компанія, що спеціалізується на комплексному постачанні промислового обладнання, вузлів і запасних частин. Ми працюємо з підприємствами, для яких простій техніки означає прямі збитки, тому робимо ставку на точність підбору, прозорі умови та дотримання строків.',
        'Підбираємо позиції за кресленнями, каталожними номерами або зразками, пропонуємо оригінальні вироби та перевірені аналоги, супроводжуємо поставку документацією та сертифікатами відповідності.',
      ],
      points: [
        'Підбір за кресленням, каталожним номером чи зразком',
        'Оригінальні запчастини та сертифіковані аналоги',
        'Повний пакет супровідних документів',
        'Робота за договором, тендерні закупівлі',
      ],
    },
    sectorsSection: {
      eyebrow: 'Галузі',
      title: 'Працюємо для провідних підприємств України',
      lead: 'Розуміємо специфіку кожної галузі — від умов роботи на свердловині до режиму цілодобового порту.',
      request: 'Запит для цієї галузі',
    },
    sectors: [
      {
        id: 'gas',
        image: 'gas.png',
        title: 'Газовидобування',
        client: 'Для АТ «Укргазвидобування»',
        description:
          'Обладнання для облаштування свердловин, промислових газопроводів та установок підготовки газу.',
        items: ['Фонтанна та запірна арматура', 'Компресорне обладнання та ЗІП', 'Насоси та ущільнення', 'КВПіА та засоби вимірювання'],
      },
      {
        id: 'oil',
        image: 'oil.png',
        title: 'Нафтовидобування',
        client: 'Для ПАТ «Укрнафта»',
        description:
          'Запчастини та комплектуючі для видобування, підготовки та транспортування нафти.',
        items: ['Верстати-качалки та їх вузли', 'Штангові та відцентрові насоси', 'Бурове обладнання та інструмент', 'Трубопровідна арматура'],
      },
      {
        id: 'port',
        image: 'port.png',
        title: 'Морські порти',
        client: 'Для морських портів України',
        description:
          'Комплектуючі для портової перевантажувальної техніки та інфраструктури терміналів.',
        items: ['Запчастини до кранів та перевантажувачів', 'Канати, гаки, вантажозахоплення', 'Редуктори, гальма, муфти', 'Електродвигуни та електрообладнання'],
      },
      {
        id: 'machine',
        image: 'machine.png',
        title: 'Машинобудування',
        client: 'Для машинобудівних підприємств',
        description:
          'Обладнання та комплектуючі для механообробних, збиральних і ремонтних виробництв.',
        items: ['Підшипники та елементи трансмісії', 'Гідравліка та пневматика', 'Верстатне оснащення', 'Металопрокат та кріплення'],
      },
      {
        id: 'mining',
        image: 'mining.png',
        title: 'Гірничодобування',
        client: 'Для гірничодобувних підприємств',
        description:
          'Вузли та запчастини для екскаваторів, дробарок, конвеєрів та збагачувального обладнання.',
        items: ['Зношувані деталі дробарок і млинів', 'Конвеєрні стрічки, ролики, барабани', 'Запчастини до гірничої техніки', 'Футерування та броня'],
      },
    ],
    supply: {
      eyebrow: 'Що постачаємо',
      title: 'Від окремої деталі — до комплексної поставки',
      lead: 'Формуємо поставку під специфікацію замовника та консолідуємо позиції від різних виробників в одному договорі.',
      groups: [
        { title: 'Запірна та регулювальна арматура', text: 'Засувки, крани, клапани, фонтанна арматура для високого тиску.' },
        { title: 'Насосне та компресорне обладнання', text: 'Насоси, компресори, ремкомплекти, ущільнення та ЗІП.' },
        { title: 'Привод і трансмісія', text: 'Редуктори, муфти, підшипники, вали, зубчасті передачі.' },
        { title: 'Гідравліка та пневматика', text: 'Гідроциліндри, насоси, розподільники, рукави високого тиску.' },
        { title: 'Електрообладнання', text: 'Електродвигуни, пускова апаратура, кабельна продукція.' },
        { title: 'Вироби під замовлення', text: 'Виготовлення деталей за кресленнями та зразками замовника.' },
      ],
    },
    advantages: {
      eyebrow: 'Чому ІНПРОММАШ',
      title: 'Працюємо так, щоб ваше обладнання не простоювало',
      items: [
        { title: 'Точний підбір', text: 'Інженерна перевірка сумісності перед кожною поставкою.' },
        { title: 'Контроль строків', text: 'Фіксуємо терміни в договорі та інформуємо про кожен етап.' },
        { title: 'Документи та якість', text: 'Сертифікати, паспорти, декларації відповідності на продукцію.' },
        { title: 'Гнучкі умови', text: 'Робота з ПДВ, тендерні процедури, відтермінування платежу.' },
      ],
    },
    process: {
      eyebrow: 'Як працюємо',
      title: 'Чотири кроки від запиту до поставки',
      steps: [
        { title: 'Запит', text: 'Надсилаєте перелік, специфікацію, креслення чи фото деталі.' },
        { title: 'Підбір і пропозиція', text: 'Підбираємо позиції та готуємо комерційну пропозицію.' },
        { title: 'Договір', text: 'Узгоджуємо умови, строки та порядок оплати.' },
        { title: 'Поставка', text: 'Доставляємо на об’єкт із повним пакетом документів.' },
      ],
    },
    form: {
      eyebrow: 'Контакти',
      title: 'Надішліть запит на постачання',
      lead: 'Опишіть потребу — ми підберемо позиції та підготуємо комерційну пропозицію.',
      sectorLabel: 'Галузь',
      sectorPlaceholder: 'Оберіть галузь',
      otherSector: 'Інше',
      company: 'Підприємство',
      name: 'Контактна особа',
      phone: 'Телефон',
      email: 'Email',
      message: 'Що потрібно поставити?',
      messageHint: 'Найменування, каталожні номери, кількість, бажані строки',
      submit: 'Надіслати запит',
      sending: 'Надсилаємо…',
      success: 'Дякуємо! Ваш запит отримано — ми зв’яжемося з вами найближчим часом.',
      again: 'Надіслати ще один запит',
      error: 'Не вдалося надіслати запит. Ваші дані збережено у формі — спробуйте ще раз.',
      contactsTitle: 'Зв’язатися напряму',
      phoneLabel: 'Телефон',
      emailLabel: 'Email',
      addressLabel: 'Адреса',
      responseNote: 'Відповідаємо на запити протягом одного робочого дня.',
    },
    footer: {
      rights: 'Усі права захищено.',
      tagline: 'Постачання промислового обладнання та запчастин',
    },
    notFound: { title: 'Сторінку не знайдено', text: 'Такої сторінки не існує або її було переміщено.', back: 'На головну' },
  },
  en: {
    langName: 'ENG',
    otherLangLabel: 'Українська версія',
    meta: {
      title: 'INPROMMASH LLC — Industrial Equipment & Spare Parts Supply',
      description:
        'Supply of equipment and spare parts for Ukraine’s gas and oil production, seaports, machine-building and mining industries.',
    },
    legalName: 'INPROMMASH LLC',
    nav: {
      about: 'About',
      sectors: 'Industries',
      supply: 'What we supply',
      process: 'How we work',
      contact: 'Contact',
      cta: 'Request a quote',
    },
    hero: {
      eyebrow: 'Industrial supply · Ukraine',
      title: 'Equipment and spare parts',
      titleAccent: 'that keep industry running',
      lead: 'INPROMMASH LLC supplies equipment and spare parts to gas and oil producers, seaports, machine-building plants and mining operations across Ukraine.',
      primary: 'Request a quote',
      secondary: 'Industries we serve',
    },
    stats: [
      { value: '5', label: 'core industrial sectors' },
      { value: 'B2B', label: 'supply for state and private enterprises' },
      { value: 'OEM+', label: 'genuine parts and certified equivalents' },
      { value: '24 h', label: 'initial response to your request' },
    ],
    about: {
      eyebrow: 'About us',
      title: 'A reliable supply partner for critical industries',
      paragraphs: [
        'INPROMMASH is a Ukrainian company specialising in end-to-end supply of industrial equipment, assemblies and spare parts. Our customers are enterprises where downtime means direct losses, so we focus on accurate selection, transparent terms and on-time delivery.',
        'We source items from drawings, part numbers or samples, offer genuine parts and proven equivalents, and ship every order with full documentation and certificates of conformity.',
      ],
      points: [
        'Sourcing by drawing, part number or sample',
        'Genuine parts and certified equivalents',
        'Complete accompanying documentation',
        'Contract supply and tender procurement',
      ],
    },
    sectorsSection: {
      eyebrow: 'Industries',
      title: 'Serving Ukraine’s leading enterprises',
      lead: 'We understand the specifics of each sector — from wellsite conditions to round-the-clock port operations.',
      request: 'Request for this sector',
    },
    sectors: [
      {
        id: 'gas',
        image: 'gas.png',
        title: 'Gas production',
        client: 'For JSC Ukrgasvydobuvannya',
        description: 'Equipment for well completion, field gas pipelines and gas treatment units.',
        items: ['Wellhead and shut-off valves', 'Compressor equipment and spares', 'Pumps and seals', 'Instrumentation and metering'],
      },
      {
        id: 'oil',
        image: 'oil.png',
        title: 'Oil production',
        client: 'For PJSC Ukrnafta',
        description: 'Parts and components for oil production, treatment and transportation.',
        items: ['Pumping units and assemblies', 'Sucker-rod and ESP pumps', 'Drilling equipment and tools', 'Pipeline valves'],
      },
      {
        id: 'port',
        image: 'port.png',
        title: 'Seaports',
        client: 'For Ukrainian seaports',
        description: 'Components for port handling machinery and terminal infrastructure.',
        items: ['Crane and handler spare parts', 'Wire ropes, hooks, lifting gear', 'Gearboxes, brakes, couplings', 'Electric motors and electrical equipment'],
      },
      {
        id: 'machine',
        image: 'machine.png',
        title: 'Machine building',
        client: 'For machine-building plants',
        description: 'Equipment and components for machining, assembly and repair shops.',
        items: ['Bearings and transmission parts', 'Hydraulics and pneumatics', 'Machine tool tooling', 'Rolled metal and fasteners'],
      },
      {
        id: 'mining',
        image: 'mining.png',
        title: 'Mining',
        client: 'For mining enterprises',
        description: 'Assemblies and spare parts for excavators, crushers, conveyors and processing equipment.',
        items: ['Crusher and mill wear parts', 'Conveyor belts, idlers, pulleys', 'Mining machinery spare parts', 'Liners and wear plates'],
      },
    ],
    supply: {
      eyebrow: 'What we supply',
      title: 'From a single part to a complete supply package',
      lead: 'We build each delivery around the customer’s specification and consolidate items from multiple manufacturers under one contract.',
      groups: [
        { title: 'Shut-off and control valves', text: 'Gate valves, ball valves, check valves and high-pressure wellhead equipment.' },
        { title: 'Pumps and compressors', text: 'Pumps, compressors, repair kits, seals and spares.' },
        { title: 'Drives and transmission', text: 'Gearboxes, couplings, bearings, shafts and gears.' },
        { title: 'Hydraulics and pneumatics', text: 'Cylinders, pumps, directional valves, high-pressure hoses.' },
        { title: 'Electrical equipment', text: 'Electric motors, switchgear and cable products.' },
        { title: 'Made-to-order parts', text: 'Manufacturing of parts to customer drawings and samples.' },
      ],
    },
    advantages: {
      eyebrow: 'Why INPROMMASH',
      title: 'We work so your equipment never stands idle',
      items: [
        { title: 'Accurate selection', text: 'Engineering compatibility check before every shipment.' },
        { title: 'Deadline control', text: 'Lead times fixed in the contract, with updates at every stage.' },
        { title: 'Documents and quality', text: 'Certificates, data sheets and declarations of conformity.' },
        { title: 'Flexible terms', text: 'VAT invoicing, tender procedures and deferred payment.' },
      ],
    },
    process: {
      eyebrow: 'How we work',
      title: 'Four steps from request to delivery',
      steps: [
        { title: 'Request', text: 'Send us a list, specification, drawing or photo of the part.' },
        { title: 'Sourcing & offer', text: 'We source the items and prepare a commercial offer.' },
        { title: 'Contract', text: 'We agree on terms, lead times and payment.' },
        { title: 'Delivery', text: 'Delivered to your site with a full documentation package.' },
      ],
    },
    form: {
      eyebrow: 'Contact',
      title: 'Send a supply request',
      lead: 'Describe what you need — we will source the items and prepare a commercial offer.',
      sectorLabel: 'Industry',
      sectorPlaceholder: 'Select an industry',
      otherSector: 'Other',
      company: 'Company',
      name: 'Contact person',
      phone: 'Phone',
      email: 'Email',
      message: 'What do you need supplied?',
      messageHint: 'Item names, part numbers, quantities, required lead time',
      submit: 'Send request',
      sending: 'Sending…',
      success: 'Thank you! Your request has been received — we will be in touch shortly.',
      again: 'Send another request',
      error: 'We couldn’t send your request. Your details are still in the form — please try again.',
      contactsTitle: 'Contact us directly',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      addressLabel: 'Address',
      responseNote: 'We respond to requests within one business day.',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Industrial equipment and spare parts supply',
    },
    notFound: { title: 'Page not found', text: 'This page doesn’t exist or has been moved.', back: 'Back to home' },
  },
}
