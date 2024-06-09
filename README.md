## Proyecto React con Vite y Nginx 
Este proyecto de React utiliza Vite para el desarrollo y la compilación, y Nginx para servir la aplicación en producción. Nginx Proxy Manager se usa para gestionar los certificados SSL y redirigir el tráfico.

# Prerrequisitos 
Docker 
Docker Compose 
Nginx Proxy Manager

# Instalación: 
Paso 1: Clonar el Repositorio 

Copiar el código en tu bash: 

git clone -b webReact https://github.com/YepsyP/sprintxlatam.git proyecto-sxl 
cd proyecto-sxl 

////////////////

Paso 2: Configurar el Dockerfile 
Crea un Dockerfile en el directorio raíz del proyecto con el siguiente contenido:

Copiar el código en tu Dockerfile:

Etapa 1: Construcción de la aplicación
FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./ RUN npm install

COPY . . RUN npm run build

Etapa 2: Servir la aplicación con Nginx
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
server { 
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
