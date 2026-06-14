# 🌿 Guía de Imágenes — LUCULUC Garden & Forest

## Estructura de Carpetas

Las imágenes deben colocarse en `public/images/` con esta estructura:

```
public/images/
├── hero-bg.jpg                    # Portada principal
├── og-image.jpg                   # Para redes sociales (1200x630)
├── favicon.ico                    # Ícono del sitio
│
├── rooms/
│   ├── master.jpg                 # Habitación principal (King)
│   ├── secondary-1.jpg            # Habitación 2 (Queen)
│   └── secondary-2.jpg            # Habitación 3 (Queen)
│
├── experiences/
│   ├── arenal.jpg                 # Volcán Arenal
│   ├── catarata-fortuna.jpg       # Catarata La Fortuna
│   ├── termales.jpg               # Aguas termales
│   ├── ciudad-quesada.jpg         # Ciudad Quesada
│   ├── senderos.jpg               # Senderos y naturaleza
│   └── aventura.jpg               # Tours de aventura
│
└── gallery/
    ├── exterior.jpg               # Fachada/Exterior
    ├── interior.jpg               # Sala/Interior principal
    ├── gardens.jpg                # Jardines y naturaleza
    ├── master-room.jpg            # Habitación principal
    ├── sunset.jpg                 # Atardeceres
    └── nature.jpg                 # Naturaleza/bosque
```

## Especificaciones

### Hero (Portada)
- **Archivo:** `hero-bg.jpg`
- **Tamaño:** 1920x1080 píxeles (mínimo)
- **Peso:** < 500 KB (el sitio lo optimiza automáticamente)
- **Contenido:** Foto impactante de la cabaña o jardín

### Rooms (Habitaciones)
- **Archivos:** `master.jpg`, `secondary-1.jpg`, `secondary-2.jpg`
- **Tamaño:** 1200x800 píxeles (recomendado)
- **Peso:** < 300 KB cada una
- **Contenido:** Interior de cada habitación

### Experiences (Experiencias cercanas)
- **Archivos:** `arenal.jpg`, `catarata-fortuna.jpg`, etc.
- **Tamaño:** 1200x800 píxeles
- **Peso:** < 300 KB cada una
- **Contenido:** Fotos de lugares cercanos

### Gallery (Galería)
- **Archivos:** `exterior.jpg`, `interior.jpg`, etc.
- **Tamaño:** 1200x900 píxeles (la primera puede ser más grande: 1200x1500)
- **Peso:** < 400 KB
- **Contenido:** Variedad de ángulos de la cabaña

### Open Graph (Redes Sociales)
- **Archivo:** `og-image.jpg`
- **Tamaño:** 1200x630 píxeles (exacto)
- **Peso:** < 200 KB
- **Contenido:** Logo + foto principal combinados

## Cómo Subir las Imágenes

### Opción 1: Arrastra y Suelta (Más Fácil)
1. Comprime cada imagen JPG al máximo (80-85% calidad)
2. Arrástrale al chat
3. Yo las coloco en las carpetas correctas

### Opción 2: Google Drive
1. Descarga tu carpeta de Drive
2. Comprime las imágenes (máx 1200px ancho)
3. Comparte una carpeta Drive conmigo con la estructura

### Opción 3: Por Email/Link
1. Sube a WeTransfer o similar
2. Pasa el link

## Optimización Automática

Una vez colocadas las imágenes, **Next.js las optimiza automáticamente:**

- ✅ Conversión a WebP (más ligero)
- ✅ Redimensionamiento responsive
- ✅ Lazy loading (carga bajo demanda)
- ✅ Compresión sin perder calidad

## Verificar que Todo Funciona

```bash
# Copia las imágenes a sus carpetas

# Compila el sitio
npm run build

# Inicia en desarrollo
npm run dev

# Abre en navegador
# http://localhost:3000
```

## Checklist

- [ ] Fotos descargadas del Drive/comprimidas
- [ ] Organizadas en la estructura de carpetas
- [ ] Nombres de archivos exactos (sin espacios, minúsculas)
- [ ] Build (`npm run build`) sin errores
- [ ] Sitio cargado (`npm run dev`)
- [ ] Imágenes visibles en home

## Contacto

Si tienes dudas sobre tamaños o formatos:
- 📱 WhatsApp: `+506 8558-7119`
- 📧 Coordina en el chat

---

**¡LUCULUC se verá espectacular con las fotos reales! 🌿**
