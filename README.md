# Star Wars API

Este proyecto es una API HTTP sencilla desarrollada con Node.js, utilizando el Framework Serverless para su despliegue en AWS Lambda y API Gateway. La API proporciona información relacionada con el universo de Star Wars.

## Características

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Serverless Framework**: Herramienta para desarrollar y desplegar aplicaciones sin servidor en plataformas en la nube.
- **AWS Lambda**: Servicio de computación que permite ejecutar código sin aprovisionar servidores.
- **API Gateway**: Servicio de AWS para crear, publicar, mantener, monitorear y asegurar APIs a cualquier escala.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Serverless Framework](https://www.serverless.com/) (versión 2.72.0 o superior)
- Una cuenta de [AWS](https://aws.amazon.com/) con las credenciales configuradas localmente.

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Franco-Abanto/sw-api.git
   ```

2. **Navegar al directorio del proyecto:**

   ```bash
   cd sw-api
   ```

3. **Instalar las dependencias:**

   ```bash
   npm install
   ```

## Despliegue

Para desplegar la API en AWS, ejecuta el siguiente comando:

```bash
serverless deploy
```

Después del despliegue, deberías ver una salida similar a:

```
Deploying sw-api to stage dev (us-east-1)

✔ Service deployed to stack sw-api-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: sw-api-dev-hello (1.9 kB)
```

Nota: En su forma actual, después del despliegue, tu API es pública y puede ser invocada por cualquier persona. Para despliegues en producción, es recomendable configurar un autorizador. Para más detalles sobre cómo hacerlo, consulta la [documentación del evento HTTP](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

## Invocación Local

Para probar la función localmente, puedes ejecutar:

```bash
serverless invoke local --function hello
```

Esto ejecutará la función `hello` localmente y mostrará la respuesta en la terminal.

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la función Lambda.
- `serverless.yml`: Archivo de configuración del Serverless Framework.
- `package.json`: Archivo de configuración de npm que incluye las dependencias y scripts del proyecto.

## Contribuciones

Si deseas contribuir a este proyecto:

1. Realiza un fork del repositorio.
2. Crea una nueva rama con tu funcionalidad o corrección: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza tus cambios y haz commit: `git commit -m 'Agregar nueva funcionalidad'`.
4. Envía tus cambios al repositorio remoto: `git push origin mi-nueva-funcionalidad`.
5. Abre una solicitud de pull en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
