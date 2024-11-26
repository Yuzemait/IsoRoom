# Etapa 1: Construir la aplicación
FROM node:18 AS build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación con NGINX
FROM nginx:alpine

# Copia los archivos de construcción de la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando de inicio
CMD ["nginx", "-g", "daemon off;"]
