import { vehicles } from "@/data/vehicles";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "./ui/section";
import { VehicleCard } from "./vehicle-card";

export function FleetGrid() {
  return (
    <Section id="fleet">
      <SectionHeader>
        <SectionTitle>Våre biler</SectionTitle>
        <SectionDescription>
          Velg mellom elektriske Teslaer eller praktiske varebiler. Alle tilgjengelig via Getaround.
        </SectionDescription>
      </SectionHeader>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </Section>
  );
}
