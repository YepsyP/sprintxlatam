# Proyecto React con Vite y Nginx

Este proyecto utiliza **React** con **Vite** para el desarrollo y la compilación, y **Nginx** para servir la aplicación en producción. **Nginx Proxy Manager** se usa para gestionar certificados SSL y redirigir el tráfico de manera eficiente.

## Tabla de Contenidos

- [Prerrequisitos](#prerrequisitos)
- [Versiones utilizadas](#versiones-utilizadas)
- [Dependencias](#dependencias)
- [Instalación](#instalación)
  - [Paso 1: Clonar el repositorio](#paso-1-clonar-el-repositorio)
  - [Paso 2: Configurar el Dockerfile](#paso-2-configurar-el-dockerfile)
  - [Paso 3: Configurar nginx.conf](#paso-3-configurar-nginxconf)
  - [Paso 4: Configurar Docker Compose](#paso-4-configurar-docker-compose)
  - [Paso 5: Construir y levantar el contenedor](#paso-5-construir-y-levantar-el-contenedor)
  - [Paso 6: Configurar Nginx Proxy Manager](#paso-6-configurar-nginx-proxy-manager)

## Prerrequisitos

Antes de empezar, asegúrate de tener instalados:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Nginx Proxy Manager](https://nginxproxymanager.com/)

## Versiones utilizadas

- **Node.js:** v20.11.1  
- **npm:** v10.2.4  
- **Vite:** v5.2.11  

## Dependencias

Las principales dependencias instaladas en este proyecto son:

- **React y React DOM:** v18.3.1
- **React Router DOM:** v6.23.1
- **Styled Components:** v6.1.11
- **Bootstrap:** v5.3.3
- **TypeScript:** v5.4.5
- **ESLint y plugins:** v8.57.0
- **Font Awesome:** v6.5.2

Para ver todas las dependencias instaladas, consulta el archivo `package.json`.

## Instalación

### Paso 1: Clonar el repositorio

Clona el repositorio y accede al directorio del proyecto:

```bash
git clone -b webReact https://github.com/YepsyP/sprintxlatam.git proyecto-sxl
cd proyecto-sxl
```

### Paso 2: Configurar el Dockerfile

Crea un archivo Dockerfile en el directorio raíz del proyecto con el siguiente contenido:

```dockerfile
Copiar código
# Etapa de construcción
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Paso 3: Configurar nginx.conf

Crea un archivo nginx.conf en el directorio raíz del proyecto con el siguiente contenido:

```nginx
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
```

### Paso 4: Configurar Docker Compose

Crea un archivo docker-compose.yml en el directorio raíz del proyecto con el siguiente contenido:

```yaml
version: '3'
services:
  webreact-react-app-nginx:
    build: .
    ports:
      - "127.0.0.1:8011:80"
    restart: unless-stopped
```

### Paso 5: Construir y levantar el contenedor

Ejecuta los siguientes comandos para construir y levantar el contenedor:
```bash
docker-compose up --build -d
```

### Paso 6: Configurar Nginx Proxy Manager

- Abre Nginx Proxy Manager en tu navegador: http://<dominio_o_IP>:81.
- Inicia sesión con las credenciales de administrador.
- Ve a la pestaña Proxy Hosts y haz clic en Add Proxy Host.
- Configura los siguientes campos:
  - Domain Names: dominio.com
  - Scheme: http
  - Forward Hostname/IP: webreact-react-app-nginx
  - Forward Port: 80
  - SSL: Selecciona Let's Encrypt y activa Force SSL.
