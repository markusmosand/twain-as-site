import { Vehicle } from "@/types/vehicle";
import { ButtonLink } from "./ui/button";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/5 bg-background transition-shadow hover:shadow-lg">
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] bg-muted">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          {/* Placeholder - will be replaced with Image or 3D viewer */}
          <svg
            className="h-16 w-16 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
        </div>

        {/* Category badge */}
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center rounded-full bg-background/90 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm">
            {vehicle.category === "electric" ? "Elektrisk" : vehicle.category === "compact" ? "Kompakt" : "Varebil"}
          </span>
        </div>

        {/* Availability badge */}
        {!vehicle.available && (
          <div className="absolute right-3 top-3">
            <span className="inline-flex items-center rounded-full bg-foreground/90 px-2.5 py-0.5 text-xs font-medium text-background">
              Ikke tilgjengelig
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{vehicle.name}</h3>
            <p className="text-sm text-muted-foreground">{vehicle.tagline}</p>
          </div>
          {vehicle.priceFrom && (
            <span className="text-sm font-medium text-muted-foreground">
              {vehicle.priceFrom}
            </span>
          )}
        </div>

        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {vehicle.description}
        </p>

        {/* Specs */}
        <div className="mb-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {vehicle.specs.seats} seter
          </span>
          {vehicle.specs.range && (
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {vehicle.specs.range}
            </span>
          )}
          {vehicle.specs.cargo && (
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              {vehicle.specs.cargo}
            </span>
          )}
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {vehicle.specs.transmission === "Automatic" ? "Automat" : "Manuell"}
          </span>
        </div>

        {/* Features */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {vehicle.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {feature}
            </span>
          ))}
          {vehicle.features.length > 3 && (
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              +{vehicle.features.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <ButtonLink
            href={vehicle.getaroundUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            variant={vehicle.available ? "primary" : "secondary"}
          >
            {vehicle.available ? "Book på Getaround" : "Se tilgjengelighet"}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
