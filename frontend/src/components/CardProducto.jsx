function CardProducto({ producto }) {
  // Adaptamos los datos de la API de TheMealDB al formato del componente
  const {
    idMeal = 0,
    strMeal = 'Producto sin nombre',
    strMealThumb = 'https://via.placeholder.com/300x200',
    strArea = 'Internacional',
    precio = 15.99
  } = producto || {};

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
          alt={strMeal} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={strMealThumb}
        />
        
        {/* Badge con el origen del plato */}
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
          {strArea}
        </div>
        
        {/* Botón de favorito */}
        <button 
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors"
        >
          <span className="material-icons text-sm">favorite_border</span>
        </button>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Título */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary cursor-pointer transition-colors line-clamp-1">
            {strMeal}
          </h2>
        </div>

        {/* Descripción */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">
          Delicious {strArea} cuisine
        </p>

        {/* Precio y botón de añadir */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Kit Price</span>
            <span className="text-lg font-bold text-primary">{precio.toFixed(2)}€</span>
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
