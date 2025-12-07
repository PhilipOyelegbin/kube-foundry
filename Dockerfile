FROM node:24-alpine AS builder
WORKDIR /app
COPY dwellingbloom/package*.json .
COPY dwellingbloom/yarn.lock .
RUN yarn
COPY dwellingbloom/ .
RUN yarn run build

RUN adduser -D appuser
RUN chown -R appuser:appuser /app
USER appuser

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80