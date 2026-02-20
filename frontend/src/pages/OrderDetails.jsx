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

  // Simulamos la llamada a la API
  useEffect(() => {
    // Cuando el backend esté listo, aquí iría el fetch real:
    // fetch(`/api/recipes/${id}`)
    //   .then(res => res.json())
    //   .then(data => setRecipeData(data));
    
    setTimeout(() => {
      setRecipeData({
        id: id || '1',
        category: 'Indian',
        title: 'Chicken Tikka Masala',
        description: 'A rich, creamy, and spicy curry that brings the authentic taste of India straight to your kitchen. Perfectly balanced spices with tender chicken.',
        imageAlt: 'Rich and creamy Chicken Tikka Masala in a copper bowl with naan bread',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPFLZpBLnaE6szvVv2BXj2joeDU9kO2xPxAY5zJT5LR38MieYPUZ0DJ6lAP4C7cJZyXBXF4e1tra0PfnPOXKhf_5fU-J6ZYw1OwWdtISNT6-7pTWIENPMV6zYvgr19eWJrtk4LCS7CLLPWjVxNCQW0LzEkrmcKZQ8tiidUSCJ5A5batFo5LuiIT-Aw1ankpG7MSSCFoauYvF8CYjxrKgWV2ov_kmo0YEObmnPJjJ730ZVZeTiyRYrfF6dM-g74PVMKM6nmM2wCJSM',
        isBestseller: true,
        rating: '4.9',
        reviewsCount: '2.1k',
        prepTime: '45 min',
        calories: '620 kcal',
        difficulty: 'Medium',
        ingredients: [
          { name: 'Chicken Breast', amount: '500g', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlMz8RZjWDH3PzlEeaR6PYNaWkw7IVlgQ-OqWIYFz_i2UXsEtVLZykTjcveTRQiglPc6Q-D_wFfKg2zZiFIyfsKhuSuxZdKu-lbfZ0JyA88Ww-9VuOaTYGMF8nnrYoz_x7R5tU7_-Lf127193Ai9s5qYvASjr2U7CoWptlnrtfowi2NZVQr6sTE3t0h2AyK-5aILAAOY2wQFNx0uFd39WbVvCzDhrldGRS0TzfY9LzR7Ztbg5Qvr3DIsmbzpOk3YkpHk23YfpFEE4' },
          { name: 'Basmati Rice', amount: '300g', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz0H9NSNwDKagsEazS9qUB_Nom6dbWouKjIePrdLtKZOL0K597XFabhbw4Wu5IhNbek2YtoxqfC_WHxC5_WjF8RkrssBvZOUl6uXMiOAsGTcKVmDgXSS3rjQaJy53MW1RkENVEpR7tLWzF0uaCuFqkLTuBB2NIDD27e7uCOWLlfaw3W41yu--oJbRcGTJLSut4BI12TRWVDFGWV6CgiMolxp56cgtSCvdKD69FchcA0rZ31Rcak7_5WBYBs-zT0mK2H_y5osuO4wM' },
          { name: 'Greek Yogurt', amount: '200g', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChD89Qk725CQxJLoGHZ0QzNM-6UH4P7Q3ioMCIBzN-fEx6we2IAQC9sQGJXT95Z7atOB_yephnx32PjRBt4L7wyljun5twnLtSM9bKvHd7hhBqVSLbyJRJoika6DUFaCmnWS5et-sUFmp7faC4qFIyjXItCyvXKQDF31MxPUH4PYF8zZh05heYXtEcyNPepZPvMzCCa4e4jApCakKgMPK0mE3bOJQveG3kgc8rQd7BXhu_Nr3EI2VExeH6Dz41VF9Z1SobXM-yyzY' },
          { name: 'Tomato Puree', amount: '1 Can', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK-33m8GOKCyhtshDrKVB2pOJJ-XNbzvSoUJHjjijSS61DJ987s3DmMFE20Gqc2mh_MQHL7zmgZpGYlZ2UrzldoxDWFG4erldKrD8PDlAs2luDgZGM3gRlcFy6UZnFQEde18JQrYtRkELH-zzu0WoZ2SxozqHaKkzyQuaWYEB-ZUZZNIcVbbNO7bShWj18ewyIYYCexY-AcAWdfaLkCl2DVEhADzdVz8F7jHCXpDHLeBUWmuQVz1Bu4_CjznhUuPa0fuz0o8KBAQY' },
          { name: "Chef's Spice Mix", amount: '1 Sachet', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxJfFr1PeGTd_wCjYK-XNnemOzuaL0NtC2CM4Y0EGYI68y7qck2X9y0T5t2Z3JoZp0-qvU6CaFSvm3-ZGYQyBF606HvysEC8SHPup52GhsLLReTmENYbE4pGHlfqXCURE2d5Ny5IP4NwpJcxUMFHdsaEZwH7hN2R2PWmXgtSsCAGaLgHc9a2nGEdwS-qs4Hr_9H4-RKl4sx6mJuIurokKEhIoBMa_jHD8buqr3iCcO5t6gAelUx8ezcKKfGOSKC7P9-322QqFrw-M' },
          { name: 'Fresh Coriander', amount: '1 Bunch', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1Ec4IqlOGQjAFROZjmPD2SrQnOluBeiEivSUJm8nTJsiprmjvN4JjFrQRah2AkU2qbRa-E_Pm_Lc0Vn6OQmTj_0lKAQOX4MJZqgQmaeZrKvc6LPdfQH-_S2wQcOnKDEsTtZCk8GaJEwbjrP3XBgjGhRG6RUVpNfsz6csZ6Hwfd_rncFQW5ZsFc9-Ed0HeUbfN-ALMKRxXuKp47Bfd4SLZcqdod-D9dR6yIt7BNk8GviIo6th4S3ghHPlf7Xiy6rJKyE59R6bEvBo' }
        ],
        pantryCheck: "You'll need olive oil, salt, pepper, and a large frying pan.",
        steps: [
          { title: 'Marinate the Chicken', description: 'Cut the chicken into bite-sized pieces. In a bowl, mix the yogurt and half the spice blend. Add the chicken and coat well. Let it sit while you prep the rest.' },
          { title: 'Cook the Rice', description: 'Rinse the basmati rice until the water runs clear. Cook in boiling salted water for 10-12 minutes until fluffy. Drain and keep warm.' },
          { title: 'Simmer the Sauce', description: 'Sear the chicken in a hot pan. Add the tomato puree and remaining spices. Simmer for 15 minutes until the sauce thickens and chicken is cooked through.' }
        ],
        purchaseParams: {
          servings: 2,
          portions: 4,
          price: 18.50,
          originalPrice: 22.00,
          discount: '15% Off',
          deliveryInfo: {
            urgency: 'Order within 2h 15m',
            time: '7:00 PM today'
          }
        }
      });
      setLoading(false);
    }, 500); // delay de medio segundo para simular red
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
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
