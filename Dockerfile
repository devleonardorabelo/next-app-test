FROM oven/bun:1.1.12
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 bunjs
RUN adduser --system --uid 1001 bunjs
USER bunjs

COPY --chown=bunjs:bunjs apps/frontend/.next/standalone ./
COPY --chown=bunjs:bunjs apps/frontend/.next/static ./apps/frontend/.next/static
COPY --chown=bunjs:bunjs apps/frontend/public ./apps/frontend/public

CMD bun --bun run ./apps/frontend/server.js
