function CardProducto({ producto }) {
  // Datos por defecto en caso de que la API no esté disponible
  const {
    id = 0,
    nombre = 'Producto sin nombre',
    descripcion = 'Sin descripción disponible',
    imagen = 'https://via.placeholder.com/300x200',
    precio = 0,
    tiempo = 0,
    dificultad = 'Medium',
    etiqueta = null,
    esFavorito = false
  } = producto || {};

  // Determinar el icono y color según la dificultad
  const getDificultadInfo = () => {
    switch(dificultad.toLowerCase()) {
      case 'easy':
        return { icon: 'emoji_emotions', color: 'text-green-500', label: 'Easy' };
      case 'hard':
      case 'chef level':
        return { icon: 'whatshot', color: 'text-red-500', label: 'Chef Level' };
      default:
        return { icon: 'whatshot', color: 'text-orange-400', label: 'Medium' };
    }
  };

  const dificultadInfo = getDificultadInfo();

  // Determinar el estilo de la etiqueta según su tipo
  const getEtiquetaClasses = () => {
    if (!etiqueta) return '';
    
    const tipo = etiqueta.toLowerCase();
    const baseClasses = 'absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider';
    
    const estilos = {
      'popular': 'bg-white/90 dark:bg-black/80 backdrop-blur-sm text-gray-900 dark:text-white',
      'value': 'bg-green-100 text-green-800',
      'spicy': 'bg-red-100 text-red-800',
      'family': 'bg-blue-100 text-blue-800',
      'keto': 'bg-purple-100 text-purple-800',
      'chef pick': 'bg-yellow-100 text-yellow-800'
    };
    
    return `${baseClasses} €{estilos[tipo] || 'bg-gray-100 text-gray-800'}`;
  };

  const handleAddToCart = () => {
    // Función para añadir al carrito (pendiente de implementar)
    console.log('Añadir al carrito:', producto);
  };

  const handleToggleFavorite = () => {
    // Función para marcar/desmarcar favorito (pendiente de implementar)
    console.log('Toggle favorito:', producto);
  };

  return (
    <article className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col card-hover-effect h-full">
      {/* Imagen del producto */}
      <div className="relative h-48 overflow-hidden group">
        <img 
          alt={nombre} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={imagen}
        />
        
        {/* Etiqueta (Popular, Value, Spicy, etc.) */}
        {etiqueta && (
          <div className={getEtiquetaClasses()}>
            {etiqueta}
          </div>
        )}
        
        {/* Botón de favorito */}
        <button 
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors"
        >
          <span className="material-icons text-sm">
            {esFavorito ? 'favorite' : 'favorite_border'}
          </span>
        </button>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Título */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary cursor-pointer transition-colors line-clamp-1">
            {nombre}
          </h2>
        </div>

        {/* Descripción */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">
          {descripcion}
        </p>

        {/* Precio y botón de añadir */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Kit Price</span>
            <span className="text-lg font-bold text-primary">€{precio.toFixed(2)}</span>
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 shadow-lg shadow-primary/30"
          >
            Add Kit <span className="material-icons text-sm">add</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardProducto;
