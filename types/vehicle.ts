export interface VehicleSpecs {
  seats: number;
  range?: string;
  transmission: "Automatic" | "Manual";
  cargo?: string;
  power?: string;
  acceleration?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: "sedan" | "suv" | "van";
  category: "electric" | "commercial";
  tagline: string;
  description: string;
  specs: VehicleSpecs;
  features: string[];
  modelPath?: string;
  imagePath: string;
  imageAlt: string;
  getaroundUrl: string;
  available: boolean;
  priceFrom?: string;
}

export type VehicleCategory = "all" | "electric" | "commercial";
