import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { MobileActions } from "./mobile-actions";
export { AppLinks } from "./app-links";
export { PageIntro } from "./page-intro";
export { CallBand } from "./call-band";
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <MobileActions />
    </>
  );
}
