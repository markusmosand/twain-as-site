"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Vehicle } from "@/types/vehicle";

// Dynamically import 3D components to avoid SSR issues
const Scene3D = dynamic(
  () => import("./scene-3d").then((mod) => mod.Scene3D),
  { ssr: false }
);

const VehicleModel = dynamic(
  () => import("./vehicle-model").then((mod) => mod.VehicleModel),
  { ssr: false }
);

interface VehicleViewerProps {
  vehicle: Vehicle;
}

// Color mapping for different vehicles
const vehicleColors: Record<string, string> = {
  "tesla-model-3": "#ffffff",
  "tesla-model-y": "#1e3a5f",
  "opel-vivaro-1": "#f5f5f5",
  "ford-fiesta": "#c41e3a",
};

export function VehicleViewer({ vehicle }: VehicleViewerProps) {
  const [is3DEnabled, setIs3DEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const color = vehicleColors[vehicle.id] || "#1a1a1a";

  if (!is3DEnabled) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-muted">
        <div className="text-center text-muted-foreground">
          <svg
            className="mx-auto h-16 w-16 opacity-30"
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
          <button
            onClick={() => setIs3DEnabled(true)}
            className="mt-2 text-xs underline hover:no-underline"
          >
            Vis 3D-modell
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="flex flex-col items-center gap-2">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground" />
            <span className="text-xs text-muted-foreground">Laster 3D...</span>
          </div>
        </div>
      )}

      {/* 3D Scene */}
      <Scene3D className="absolute inset-0">
        <VehicleModel
          type={vehicle.type}
          color={color}
        />
        <primitive
          object={{}}
          onUpdate={() => setIsLoading(false)}
        />
      </Scene3D>

      {/* Toggle button */}
      <button
        onClick={() => setIs3DEnabled(false)}
        className="absolute bottom-2 right-2 rounded-full bg-background/80 p-1.5 text-xs backdrop-blur-sm transition-colors hover:bg-background"
        title="Skjul 3D"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* 3D hint */}
      <div className="absolute bottom-2 left-2 rounded-full bg-background/80 px-2 py-1 text-xs backdrop-blur-sm">
        Dra for å rotere
      </div>
    </>
  );
}
