# Examen-docker-swarm

## Inicializar el servidor con `npm run dev`
# Nombre de tu Aplicación

## Instrucciones de Ejecución

1. **Construir la Imagen Docker:**
   - Abre una terminal y navega al directorio raíz de tu aplicación.
   - Ejecuta el siguiente comando para construir la imagen Docker:

     ```bash
     docker build -t nombre-de-tu-imagen .
     ```

2. **Desplegar en Docker Swarm:**
   - Si estás utilizando Docker Swarm, despliega el servicio en tu stack. Asegúrate de ajustar el archivo `docker-compose.yml` según tus necesidades.

     ```bash
     docker stack deploy -c docker-compose.yml nombre-del-stack
     ```

   - Reemplaza `nombre-del-stack` con el nombre que desees para tu stack.

3. **Verificar la Ejecución:**
   - Después de desplegar, verifica que el servidor esté ejecutándose sin errores. Puedes verificar los logs del contenedor con:

     ```bash
     docker logs nombre-del-contenedor
     ```

4. **Acceder a la Aplicación:**
   - Una vez que el servidor esté en ejecución, puedes acceder a la aplicación en tu navegador. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.