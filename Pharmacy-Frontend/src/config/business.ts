export const business = {
  name: "Metmma Pharmacy",
  foundingYear: 1995, // TODO: confirm with client (index.html shows 2025 conflict)
  phone: "+265 994 399 885",
  whatsapp: "+265 994 399 885", // TODO: confirm
  email: {
    primary: "info@metmmapharmacy.com",
    prescriptions: "prescriptions@metmmapharmacy.com",
  },
  address: {
    physical: "Nanjiri, along M1, Lilongwe, Malawi",
    mailing: undefined, // TODO: confirm if different
  },
  hours: {
    weekday: "Mon-Sat: 8:00 AM - 5:00 PM",
    weekend: "Sun & Holidays: 8:00 AM - 2:00 PM",
  },
  domain: "https://metmmapharmacy.com", // TODO: confirm production domain
  social: {
    facebook: "https://facebook.com/metmmapharmacy", // TODO: confirm
  },
} as const;
