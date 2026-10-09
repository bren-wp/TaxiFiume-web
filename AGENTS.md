<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared Taxi Fiume navigation and footer in a reusable site layout, with distinct TanStack content routes, so every original page remains directly addressable.
- Serve optimized original media from local public assets and keep source-derived service data in a shared module, so media stays self-contained and prices remain consistent across pages.
- Contact and application forms prepare email drafts rather than claim delivery; no message-delivery service is connected.
- Keep mobile quick-contact actions in SiteLayout with safe-area spacing and hide them while form fields are focused, so every page stays usable without covering the keyboard workflow.
- Apply shared mobile layouts to wide phones and short landscape viewports as well as narrow screens, preserving scrollable menus and safe-area insets without disabling browser zoom.
- Keep homepage sections, header, footer, page introductions, contact actions and route-error views in focused components; route files compose them rather than duplicate markup.
- Keep styles in ordered domain stylesheets imported by styles.css, preserving the cascade with responsive rules last.
- Keep business data in focused modules behind the fiume entry point and legal documents in per-page JSON files, so edits remain localized and unrelated legal content is not loaded.
- Centralize leaf metadata in lib/seo.ts with mandatory self-referencing paths and factual business schema; leave canonical tags off the root and defer sitemaps until a public URL exists.
- Generate linked Schema.org graphs in lib/structured-data.ts from shared service/contact data; identify contact and legal pages with valid page types and topics, using relative identities until publication and omitting invented coordinates or ratings.
- Render original content photography with LocalPhoto and local size variants, retaining intrinsic dimensions, lazy loading below the fold and high priority for page covers.
