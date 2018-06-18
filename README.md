## Configuracion de producción Android

android/gradle.properties

modificar por la ruta donde se encuentre el archivo de propiedades
```
 certificate.properties=/home/path/certificate.properties

```

### Ejemplo de archivo de propiedades 

```
 file=/home/RutaCertificado/chat.keystore
 file.password=123456
 file.alias=chat
```



### Generar certificado

```
keytool -genkey -v -keystore chat.keystore -alias chat -keyalg RSA -keysize 2048 -validity 10000

```