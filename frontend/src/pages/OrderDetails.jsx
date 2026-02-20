import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/orderDetails/Breadcrumb';
import HeroSection from '../components/orderDetails/HeroSection';
import InfoHeader from '../components/orderDetails/InfoHeader';
import IngredientsSection from '../components/orderDetails/IngredientsSection';
import PurchaseCard from '../components/orderDetails/PurchaseCard';
import RecommendationsSection from '../components/orderDetails/RecommendationsSection';

const OrderDetails = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const mealId = id || '52772'; // Teriyaki Chicken por defecto si no hay ID
        // Conectar al backend de Symfony puerto 8000, que actúa de proxy a TheMealDB e inyecta el precio.
        const res = await fetch(`http://localhost:8000/api/meals/lookup.php?i=${mealId}`);
        if (!res.ok) throw new Error('Error al contactar con la API del servidor');
        
        const data = await res.json();
        if (!data.meals || !data.meals[0]) throw new Error('No se encontró el plato');
        const meal = data.meals[0];

        // Mapear dinámicamente hasta 20 ingredientes
        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
          const name = meal[`strIngredient${i}`];
          const amount = meal[`strMeasure${i}`];
          if (name && name.trim() !== '') {
            ingredientsList.push({
              name: name,
              amount: amount || '',
              // TheMealDB provee una url de imagen de ingredientes base
              img: `https://www.themealdb.com/images/ingredients/${encodeURIComponent(name)}-Small.png`
            });
          }
        }

        setRecipeData({
          id: meal.idMeal,
          category: meal.strCategory || 'General',
          title: meal.strMeal,
          description: meal.strInstructions 
            ? meal.strInstructions.substring(0, 180) + '...' 
            : 'Una deliciosa receta internacional lista para tu paladar.',
          imageAlt: meal.strMeal,
          imageSrc: meal.strMealThumb,
          isBestseller: true,
          rating: '4.8',
          reviewsCount: '1.2k',
          prepTime: '30 min',
          calories: '550 kcal',
          difficulty: 'Medium',
          ingredients: ingredientsList,
          pantryCheck: "Olive oil, salt, pepper.",
          purchaseParams: {
            servings: 2,
            portions: 4,
            price: parseFloat(meal.precio || '15.00'),
            originalPrice: parseFloat(meal.precio || '15.00') + 4,
            discount: '15% Off',
            deliveryInfo: {
              urgency: 'Order within 2h 15m',
              time: '7:00 PM today'
            }
          }
        });
      } catch (error) {
        console.error('Error fetching recipe data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!recipeData) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <span className="material-icons text-6xl text-red-500 mb-4">error_outline</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! No pudimos cargar la receta.</h2>
        <p className="text-gray-500">Asegúrate de que el backend de Symfony está encendido en el puerto 8000.</p>
        <button onClick={() => window.location.reload()} className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-[1400px] w-full mx-auto px-4 md:px-8 lg:px-12 py-8 font-sans">
      <Breadcrumb category={recipeData.category} recipeName={recipeData.title}  />
      
      <div className="lg:grid lg:grid-cols-12 lg:gap-13 xl:gap-24">
        {/* Left Column: Visuals & Content */}
        <div className="lg:col-span-8 space-y-8">
          <HeroSection 
            imageSrc={recipeData.imageSrc}
            imageAlt={recipeData.imageAlt}
            isBestseller={recipeData.isBestseller}
            rating={recipeData.rating}
            reviewsCount={recipeData.reviewsCount}
          />
          <InfoHeader title={recipeData.title} description={recipeData.description} />
          <IngredientsSection 
            ingredients={recipeData.ingredients} 
            pantryCheck={recipeData.pantryCheck} 
          />
        </div>

        {/* Right Column: Sticky Purchase Card */}
        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <PurchaseCard 
            title={recipeData.title + " Kit"}
            servings={recipeData.purchaseParams.servings}
            portions={recipeData.purchaseParams.portions}
            price={recipeData.purchaseParams.price}
            originalPrice={recipeData.purchaseParams.originalPrice}
            discount={recipeData.purchaseParams.discount}
            deliveryInfo={recipeData.purchaseParams.deliveryInfo}
            onAddToCart={(qty) => console.log('Added ' + qty + ' kits to cart')}
          />
        </div>
      </div>

      <RecommendationsSection />
    </main>
  );
};

export default OrderDetails;
