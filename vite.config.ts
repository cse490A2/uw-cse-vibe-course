// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Normalize BASE_PATH so it is always "/<repo>/" (or "/" for root hosting),
// even if it arrives empty, as "//", or containing an "org/repo" prefix.
function normalizeBasePath(raw: string | undefined): string {
  if (!raw) return "/";
  const cleaned = raw.replace(/^\/+|\/+$/g, ""); // trim slashes
  if (!cleaned) return "/";
  const repo = cleaned.split("/").pop() ?? cleaned; // drop any "org/" prefix
  return `/${repo}/`;
}

export default defineConfig({
  // Serve from a sub-path when deploying to https://<user>.github.io/<repo>/
  vite: { base: normalizeBasePath(process.env["BASE_PATH"]) },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Render every page to plain HTML at build time so it can be served as a static site.
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});

