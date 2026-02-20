import logo from '../img/logo.png';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 justify-items-center md:justify-items-start">
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center mb-6">
              <img alt="Come y Calla Logo" className="w-auto h-14" src={logo} />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Ingredientes frescos, comida deliciosa y tu estómago contento.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Descubre</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Categorías</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Ingredientes</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Menú Semanal</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Tarjeta regalo</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Sobre Nosotros</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Carreras</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left col-span-2 sm:col-span-1">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Centro de Ayuda</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Términos del Servicio</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex justify-center items-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">© 2026 Come y Calla. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;