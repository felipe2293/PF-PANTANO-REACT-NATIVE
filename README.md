# Workshop de Compra de Equipos Industriales

Este proyecto es una simulación de un workshop para la compra de equipos industriales,  utilizando tecnologías modernas para usarla como aplicativo móvil. La aplicación está construida con React Native, haciendo uso de props, hooks, routers, redux, etc.  para la gestión de componentes,rutas y pantallas. Además, se integra la autenticación de usuario, la carga de fotos de perfil y la geolocalización a través de la cámara y la ubicación del dispositivo. Por otro lado, se utiliza Firebase para gestionar la base de datos en tiempo real y Cloud Firestore para almacenar información específica del usuario. Además, se implementa SQLite para guardar direcciones de forma estática en dispositivos móviles.

## Características clave

- **Autenticación de Usuario**: Los usuarios pueden registrarse e iniciar sesión en la aplicación utilizando Firebase Authentication.

- **Carga de Foto de Perfil**: Se permite a los usuarios cargar una foto de perfil utilizando la cámara de su dispositivo.

- **Geolocalización**: La aplicación utiliza la ubicación del usuario para mostrar información relevante relacionada con la ubicación.

- **Base de Datos en Tiempo Real**: Firebase Realtime Database se utiliza para gestionar datos en tiempo real, como la disponibilidad de equipos industriales.

- **Almacenamiento de Datos de Usuario**: La información específica del usuario se almacena en Cloud Firestore, permitiendo un acceso rápido y eficiente a los datos.

- **SQLite para Direcciones**: Las direcciones de interés se almacenan de forma estática en SQLite en dispositivos móviles para un acceso rápido sin conexión.

## Configuración del Proyecto

1. Clonar repositorio en PC:

```shell
git clone https://github.com/felipe2293/PF-PANTANO-REACT-NATIVE.git
```
2. Instalar las dependencias del proyecto:

```shell
cd workshop-compra-equipos-industriales
npm install
```
3. Inicia la aplicación:

```shell
npm start
```