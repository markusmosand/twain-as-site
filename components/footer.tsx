import Link from "next/link";
import { Container } from "./ui/container";

const footerLinks = {
  company: [
    { href: "/blog", label: "Blogg" },
    { href: "#fleet", label: "Våre biler" },
  ],
  legal: [
    { href: "/personvern", label: "Personvern" },
    { href: "/vilkar", label: "Vilkår" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-foreground/5 bg-muted/30">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-block">
                <span className="text-xl font-semibold tracking-tight">
                  Twain
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Premium bilutleie i Oslo. Lei Tesla eller varebil enkelt via
                Getaround. Fullt digitalt, null stress.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold">Selskap</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Juridisk</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/5 pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Twain AS. Alle rettigheter
              reservert.
            </p>
            <p className="text-sm text-muted-foreground">
              Booking via{" "}
              <a
                href="https://getaround.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:underline"
              >
                Getaround
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
