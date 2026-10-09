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
