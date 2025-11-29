import { ButtonLink } from "./ui/button";
import { Container } from "./ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Lei bil i Oslo.
            <br />
            <span className="text-muted-foreground">Enkelt og digitalt.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Tesla eller varebil? Book via Getaround, hent bilen med mobilen, og
            kjor. Ingen ko, ingen nokkelhenting, null stress.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="#fleet" size="lg">
              Se våre biler
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="outline" size="lg">
              Slik fungerer det
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
