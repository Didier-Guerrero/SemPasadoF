# SemPasadoF

 # Pagina deployada
 https://sempasadof.onrender.com
 
# Gestión de Clientes y Contratos

Este proyecto es una aplicación básica para la gestión de **clientes** y **contratos**. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) tanto para los clientes como para los contratos, y soporta filtrado por fechas para la gestión de contratos.

## Características

- **Gestión de Clientes**: Crear, leer, actualizar y eliminar clientes.
- **Gestión de Contratos**: Crear, leer, actualizar y eliminar contratos, asociados a clientes.
- **Filtrado por Fechas**: Filtrar contratos en un rango de fechas específico.
- **Interfaces Dinámicas**: Vistas para listar, ver detalles, editar y eliminar tanto clientes como contratos.

## Tecnologías Utilizadas

- **Node.js**: Plataforma para el backend.
- **Express.js**: Framework para construir la API y gestionar las rutas.
- **EJS**: Motor de plantillas para renderizar vistas en el servidor.
- **Supabase**: Base de datos utilizada para gestionar los datos de clientes y contratos.
- **HTML5, CSS3**: Para la estructura y el diseño básico de las interfaces.

## Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalados los siguientes componentes:

- **Node.js** v14 o superior.
- **npm** (gestor de paquetes de Node.js).
- **Cuenta de Supabase** (u otra base de datos compatible con SQL).

### Pasos para la Instalación

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/tu-repo.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd nombre-del-proyecto
    ```

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

4. Configura el archivo `.env` en la raíz del proyecto para las variables de entorno:

    ```bash
    touch .env
    ```

   Dentro de `.env`, agrega las siguientes variables:

    ```
    SUPABASE_URL=tu-supabase-url
    SUPABASE_KEY=tu-supabase-key
    ```

### Ejecutar el Proyecto

1. Inicia el servidor:

    ```bash
    npm start
    ```

2. Accede a la aplicación en tu navegador:

    ```bash
    http://localhost:3000
    ```

## Uso

### Gestión de Clientes

- **Listar Clientes**: Muestra una lista de todos los clientes en la base de datos.
- **Crear Cliente**: Permite agregar un nuevo cliente a la base de datos.
- **Editar Cliente**: Permite modificar la información de un cliente existente.
- **Eliminar Cliente**: Elimina un cliente específico.

### Gestión de Contratos

- **Listar Contratos**: Muestra una lista de todos los contratos registrados.
- **Filtrar Contratos por Fechas**: Filtra contratos por un rango de fechas específico.
- **Ver Detalles de un Contrato**: Permite ver los detalles completos de un contrato.
- **Editar Contrato**: Permite modificar un contrato.
- **Eliminar Contrato**: Elimina un contrato específico desde la vista de detalles.

## Estructura de Archivos

```bash
├── config
│   └── db.js           # Configuración de la base de datos Supabase
├── controllers
│   ├── clientsController.js  # Lógica para la gestión de clientes
│   └── contractsController.js  # Lógica para la gestión de contratos
├── models
│   ├── clientsModel.js  # Consultas SQL para clientes
│   └── contractsModel.js  # Consultas SQL para contratos
├── public
│   └── css              # Estilos CSS
├── routes
│   ├── clients.js       # Rutas para la gestión de clientes
│   └── contracts.js     # Rutas para la gestión de contratos
├── views
│   ├── clients          # Vistas para clientes
│   └── contracts        # Vistas para contratos
├── .env                 # Variables de entorno (ignorado por Git)
├── .gitignore           # Ignorar archivos no deseados
├── package.json         # Configuración del proyecto y dependencias
└── server.js            # Punto de entrada del servidor
