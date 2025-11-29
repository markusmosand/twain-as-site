import { Vehicle } from "@/types/vehicle";

export const vehicles: Vehicle[] = [
  {
    id: "tesla-model-3",
    name: "Tesla Model 3",
    type: "sedan",
    category: "electric",
    tagline: "Elektrisk kjoreglede",
    description:
      "Sporty elektrisk sedan med imponerende rekkevidde og Autopilot. Perfekt for by og langtur.",
    specs: {
      seats: 5,
      range: "510 km",
      transmission: "Automatic",
      power: "275 hk",
      acceleration: "0-100 km/t på 6.1s",
    },
    features: ["Autopilot", "Premium lyd", "Glastak", "Varmepumpe"],
    imagePath: "/images/vehicles/tesla-model-3.jpg",
    imageAlt: "Hvit Tesla Model 3 parkert i Oslo",
    getaroundUrl: "https://getaround.com", // TODO: Replace with actual URL
    available: true,
    priceFrom: "fra 599 kr/dag",
  },
  {
    id: "tesla-model-y",
    name: "Tesla Model Y",
    type: "suv",
    category: "electric",
    tagline: "Elektrisk familie-SUV",
    description:
      "Romslig elektrisk SUV med plass til hele familien og bagasje. Perfekt for helgeturer og ferie.",
    specs: {
      seats: 5,
      range: "455 km",
      transmission: "Automatic",
      power: "299 hk",
      acceleration: "0-100 km/t på 5.0s",
    },
    features: ["Autopilot", "Panoramatak", "Stor bagasjeplass", "Tilhengerfeste"],
    imagePath: "/images/vehicles/tesla-model-y.jpg",
    imageAlt: "Blå Tesla Model Y i norsk natur",
    getaroundUrl: "https://getaround.com", // TODO: Replace with actual URL
    available: true,
    priceFrom: "fra 699 kr/dag",
  },
  {
    id: "opel-vivaro-1",
    name: "Opel Vivaro",
    type: "van",
    category: "commercial",
    tagline: "Pålitelig varebil",
    description:
      "Romslig varebil perfekt for flytting, transport av møbler eller større handleturer.",
    specs: {
      seats: 3,
      transmission: "Manual",
      cargo: "5.3 m³",
      power: "145 hk",
    },
    features: ["Stort lasterom", "Sidedobbeltdor", "Ryggesensorer", "Bluetooth"],
    imagePath: "/images/vehicles/opel-vivaro.jpg",
    imageAlt: "Hvit Opel Vivaro varebil",
    getaroundUrl: "https://getaround.com", // TODO: Replace with actual URL
    available: true,
    priceFrom: "fra 499 kr/dag",
  },
  {
    id: "opel-vivaro-2",
    name: "Opel Vivaro",
    type: "van",
    category: "commercial",
    tagline: "Pålitelig varebil",
    description:
      "Vår andre Opel Vivaro – identisk med den første. Perfekt når du trenger ekstra kapasitet.",
    specs: {
      seats: 3,
      transmission: "Manual",
      cargo: "5.3 m³",
      power: "145 hk",
    },
    features: ["Stort lasterom", "Sidedobbeltdor", "Ryggesensorer", "Bluetooth"],
    imagePath: "/images/vehicles/opel-vivaro.jpg",
    imageAlt: "Hvit Opel Vivaro varebil",
    getaroundUrl: "https://getaround.com", // TODO: Replace with actual URL
    available: true,
    priceFrom: "fra 499 kr/dag",
  },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}

export function getVehiclesByCategory(category: Vehicle["category"]): Vehicle[] {
  return vehicles.filter((v) => v.category === category);
}
