# Stage 1: Build the React app
FROM cgr.dev/chainguard/node:latest AS build

USER root

# Set working directory
WORKDIR /react

# Copy and install only the production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy the application source code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: NGINX to serve the React app
FROM cgr.dev/chainguard/nginx:latest

USER root

# Copy the built React app from the build stage
COPY --from=build /react/build /usr/share/nginx/html

# Copy custom NGINX config file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080 instead of 80 (to avoid root privileges)
EXPOSE 80