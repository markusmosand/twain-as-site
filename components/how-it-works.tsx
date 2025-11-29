import { Section, SectionHeader, SectionTitle, SectionDescription } from "./ui/section";

const steps = [
  {
    step: "01",
    title: "Finn din bil",
    description: "Bla gjennom våre tilgjengelige biler og velg den som passer ditt behov.",
  },
  {
    step: "02",
    title: "Book via Getaround",
    description: "Reserver bilen direkte i Getaround-appen. Raskt, enkelt og sikkert.",
  },
  {
    step: "03",
    title: "Lås opp med mobilen",
    description: "Bruk Getaround-appen for å låse opp bilen. Nøklene ligger inne.",
  },
  {
    step: "04",
    title: "Kjør avgårde",
    description: "Nyt turen! Lever tilbake når du er ferdig, like enkelt som du hentet den.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-muted/30">
      <SectionHeader>
        <SectionTitle>Slik fungerer det</SectionTitle>
        <SectionDescription>
          Fire enkle steg fra booking til kjøring. Ingen papirarbeid, ingen kø.
        </SectionDescription>
      </SectionHeader>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => (
          <div key={item.step} className="relative">
            <div className="mb-4 text-4xl font-bold text-foreground/10">
              {item.step}
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
