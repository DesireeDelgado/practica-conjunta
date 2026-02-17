# Diario de Trabajo

Este documento recoge el seguimiento diario del trabajo realizado por el equipo en el Proyecto Final Integrador.

## Registro Diario

### Sesión 1 - [16-02-2026] - Inicio del Proyecto

Se establecieron los grupos de trabajo y se dió inicio al proyecto utilizando el framework Symfony.

### Sesión 2 - [17-02-2026] - Arquitectura, Seguridad y Funcionalidad Base

Se ha llevado a cabo el diseño y modelado relacional del sistema, traduciendo el esquema entidad-relación en entidades de Doctrine para estructurar la base de datos. Sobre esta arquitectura, se implementaron los módulos CRUD para la gestión de datos y se configuró el componente de seguridad de Symfony, desarrollando un flujo completo de autenticación y registro de usuarios bajo estándares de persistencia profesional.

**Detalles técnicos adicionales implementados en esta sesión:**

- **Infraestructura:** Configuración de contenedor Docker para PostgreSQL (puerto 5433).
- **Seguridad y Acceso:**
    - Confguración de Firewall `main` (Login/Logout).
    - Definición de reglas de acceso (`access_control`) en `security.yaml`: Catálogo público (`/plato`), Pedidos/Perfil privados (`/pedido`, `/perfil`, ROLE_USER).
    - Formulario de Registro (`RegistrationController`) con validación y hasheado de contraseñas.
- **Controladores y Vistas:**
    - Creación de Landing Page dinámica (`MainController`) mostrando categorías desde base de datos.
    - Implementación de Perfil de Usuario (`ProfileController`) con historial de pedidos.
    - Generación de CRUDs completos para `Plato`, `Ingrediente`, `Categoria`, `User` y `Pedido` mediante `make:crud`.
- **Documentación:**
    - Creación de este diario de trabajo.
    - Actualización del README con tecnologías y roles del equipo.

**Nota:** Estas dos sesiones han sido realizadas al completo en conjunto por los cuatro integrantes.

---

_Este diario se actualizará con los progresos de cada sesión de trabajo._
