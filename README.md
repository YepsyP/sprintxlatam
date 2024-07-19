## Proyecto React con Vite y Nginx

Este proyecto de React utiliza Vite para el desarrollo y la compilación, y Nginx para servir la aplicación en producción. Nginx Proxy Manager se usa para gestionar los certificados SSL y redirigir el tráfico.

# Prerrequisitos

Docker

Docker Compose

Nginx Proxy Manager

# Versión de node, npm y vite del proyecto

node v20.11.1

npm v10.2.4

├─┬ @vitejs/plugin-react-swc@3.6.0

  └── vite@5.2.11
# 

# Dependencias de nivel superior instaladas en el proyecto

my-react-vite-project@1.0.0 /path/to/your/project

├── @fortawesome/fontawesome-free@6.5.2

├── @fortawesome/fontawesome-svg-core@6.5.2

├── @fortawesome/free-solid-svg-icons@6.5.2

├── @fortawesome/react-fontawesome@0.2.1

├── @types/react-dom@18.3.0

├── @types/react-router-dom@5.3.3

├── @types/react@18.3.2

├── @typescript-eslint/eslint-plugin@7.9.0

├── @typescript-eslint/parser@7.9.0

├── @vitejs/plugin-react-swc@3.6.0

├── bootstrap-icons@1.11.3

├── bootstrap@5.3.3

├── eslint-plugin-react-hooks@4.6.2

├── eslint-plugin-react-refresh@0.4.7

├── eslint@8.57.0

├── react-dom@18.3.1

├── react-router-dom@6.23.1

├── react@18.3.1

├── styled-components@6.1.11

├── typescript@5.4.5

└── vite@5.2.11

# Instalación:

Paso 1: Clonar el Repositorio 

Copiar el código en tu bash: 

git clone -b webReact https://github.com/YepsyP/sprintxlatam.git proyecto-sxl

cd proyecto-sxl 

////////////////

Paso 2: Configurar el Dockerfile

Crea un Dockerfile en el directorio raíz del proyecto con el siguiente contenido:

Copiar el código en tu Dockerfile:

FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./ RUN npm install

COPY . . RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

Copia el archivo de configuración de Nginx personalizado

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

////////////////

Paso 3: Configurar nginx.conf

Crea un archivo nginx.conf en el directorio raíz del proyecto con el siguiente contenido:

Copiar código en tu archivo nginx.conf:

server  {

  listen 80;
  
  server_name localhost;  
  
  location / {
  
    root /usr/share/nginx/html;
    
    index index.html index.htm;
    
    try_files $uri $uri/ /index.html;
    
  }
  
  location /assets/ {
  
    alias /usr/share/nginx/html/assets/;
    
  }
  
}

////////////////

Paso 4: Configurar Docker Compose

Crea un archivo docker-compose.yml en el directorio raíz del proyecto con el siguiente contenido:

Copiar código el siguiente codigo en tu .yml: 

version: '3'

services:

  webreact-react-app-nginx:
  
    build: .
    
    ports:
    
      - "127.0.0.1:8011:80"
      
    restart: unless-stopped
    

////////////////

Paso 5: Construir y Levantar el Contenedor 

Copiar el siguiente código en el bash:

docker-compose up --build -d

////////////////

Paso 6: Configurar Nginx Proxy Manager

Abre Nginx Proxy Manager en tu navegador: http://<dominio_o_IP>:81.

Inicia sesión con las credenciales de administrador.

Ve a la pestaña "Proxy Hosts" y haz clic en "Add Proxy Host".

Configura los siguientes campos:

Domain Names: dominio.com

Scheme: http Forward Hostname/IP: webreact-react-app-nginx

Forward Port: 80

SSL: Selecciona Let's Encrypt y activa Force SSL.
