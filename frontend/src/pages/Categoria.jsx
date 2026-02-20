import CardProducto from '../components/CardProducto';

function Categoria() {
  // Datos de ejemplo (temporales hasta que se conecte con la API)
  const productos = [
    {
      id: 1,
      nombre: 'Chicken Marengo',
      descripcion: 'A classic French dish featuring chicken braised with onions, tomatoes, and mushrooms.',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeRUIZngTbGbw1iEi2x6Q4SelY79eEQUJKIace4J0cbWe-SG5GhBTXC9k1GV4nKjINX8cap-Z4AzpyDsC8KMVTlFYSAKhXM2psCfIfJwMlwff8yDNy_E10D6FzHF4H14qDtolsrmVU8MkdD4sHfK9EnuTwzEMrXT5CDed-itFTZhZUW9vfWJfXv_kPdCTYe3boZ8gE9wu47s8ogskBOwYcRw_zMFkeeedvxIEM0tSf54RH4_g-4_tz6yPvnulRFB_206Uvo03-MVY',
      precio: 18.50,
      tiempo: 45,
      dificultad: 'Medium',
      etiqueta: 'Popular',
      esFavorito: true
    },
    {
      id: 2,
      nombre: 'Southern Fried Chicken',
      descripcion: 'Crispy, golden-brown chicken seasoned with our secret blend of 11 herbs and spices.',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUx7Vi22jM6ffYC3hdD3JY5CK0tFHE8Crl9KjmDmlWj-f_P9hOyFw6Pi6ZS6htY4LOzHUg1cnBQhhVJlpSInUo3j8KyeDOGJEXxX6GDcI15rvblMOmOIp8wtGAbH_f0699cB6Xc5D1tJ27jIe-2huLwBopL3kggjKxIzwnqcC1IM3tFAuOm6ZTVM2mz6BU272nlfKyxPC6B77o78wqJFAF0Agf8d4R5HwoREpHY2TQzR9OL1ute_wkh5b9BwLmkbIv43POU7dE99s',
      precio: 12.99,
      tiempo: 30,
      dificultad: 'Easy',
      etiqueta: 'Value',
      esFavorito: false
    },
    {
      id: 3,
      nombre: 'Chicken & Mushroom Hotpot',
      descripcion: 'A comforting, hearty stew perfect for cold evenings. Includes fresh thyme and bay leaves.',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6dpPf6Kae8cfF46TXMEF43rDibF6xhPfLYKYJFpRInIFdsvZCtVA2Vp9wBnf-erwxzB0FDO-5vVzy8abjwR-lGj9LBB_8CsJBfPp9VJ94h7Uo8srx9wP9mzZ4XVfETE61JTaRCrFhB8Ypyw8jdmkZg4C6NRBNE_hpa8Q7oyOSlc9xYd7snO3SIkYZsUKMHbAM565o0RLTWuZjou5jLXwysgWAckedlObM4GIHslT4OUjEAgLoT-LBX8krDBYAJjmekbs5YhpFTcU',
      precio: 22.00,
      tiempo: 60,
      dificultad: 'Medium',
      etiqueta: null,
      esFavorito: false
    },
    {
      id: 4,
      nombre: 'Tandoori Chicken',
      descripcion: 'Roasted chicken prepared with yogurt and spices. The kit includes our house-made masala blend.',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFumBvhioNBwSn1OuoRuyeYBJTcGp8kPcDq9iX5lVBxhFya1NvlupddCL2DjHOq3_KddbF1aR3V7oxuGUfarWEtuzDOU73SdE97I5n75-Xlg8VpIz47U0TPfBswezD1tBPAYbd07wDhYRZlbCrEGU9sbrscKItNdMkdn3CIkiS_BNgfUrO4mBdBHr6XAm_e97oHCfwH6RS_f8aTrdr8wf93Y3J1MdKHmWZHmKVooc4PyE3-Jh_KWq4UwPGbiPZWBsdSHPeCC2NqPw',
      precio: 19.99,
      tiempo: 50,
      dificultad: 'Medium',
      etiqueta: 'Spicy',
      esFavorito: false
    },
    {
      id: 5,
      nombre: 'Teriyaki Chicken Casserole',
      descripcion: 'A savory mix of chicken, rice, and vegetables glazed in a sweet teriyaki sauce.',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYIUhVjAPw_ds8ZbvOW7jNWqeK7aZcSvGOOOrtMoBWfM7TYD6IUEud3BFZrYEnHiH0b7y7xVMuj2AySh--_MBeDDV5TRq0g0L10A8CCduzCRqFh3usz0VskvwhdYP3IebzXc3rhpcJ7DwF5cIEh6JCaM-E1N_5F-HV9KSTU4D_rd4dKh5_L8R4ooXSVuX5hGj0pZOaLJQ8G7fndm0jG3vHIScZMyVZ1Wg4XK_IgPJhsYr7gSrLYBKrwkUW11PIfBqc1434zXMgkwI',
      precio: 24.50,
      tiempo: 55,
      dificultad: 'Easy',
      etiqueta: 'Family',
      esFavorito: false
    },
    {
      id: 6,
      nombre: 'Chicken Enchilada',
      descripcion: 'Layered tortillas, shredded chicken, and melted cheese baked to perfection.',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRam5ttPvTNNhF0GlQc1dmFygp6a2yJ70S7lH-qNAoWTDoNJ6TuyHSyg7jerKyfB3L3H_lTPw50Vg74iHOrSJ3eRMh2Tg0fFJ5GaHpEhmH5u6dZ2iRUpO6vp4dNQuopA50g9QoTF62fPjmbuo4m7R9jwmoSzwxB5AgOqfMejw_b_sLm7rQqvoDkv3jvH0fuhEBrmva5XTylwbALgi1MQ40EnjTAhmlJLXJfYlZ-fO6Y0Ffa9JPOQZ-ayzcd_yRn-MHmEo-Z4VXGTc',
      precio: 17.75,
      tiempo: 40,
      dificultad: 'Medium',
      etiqueta: 'Keto',
      esFavorito: false
    },
    {
      id: 7,
      nombre: "General Tso's Chicken",
      descripcion: 'Sweet and spicy deep-fried chicken dish served with broccoli.',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4aFNDgfViu5Czdaro4Gct4rJ2KUMPGkLNxHRdAWf9jVxGI-wHIzUPyPAyQpsPTd3uTaH7Vk6hDWkfimMV-cWZl8XId_4cW311SgovPwk4OrglHpUTCpmI0pJqoacGGSQ03dZPrnfmB6EJunnE2Kfep_nyLJU1evLfRgoxLNsub-koz44ay9G-aUTVYMFoaC3608Si0GykoEZ_4Yka9Iz_JTwTzHO8V9ixs0jBPbeBsgmtoS0psj99NoSxHQF7WncUECLoo4Dy3c4',
      precio: 16.25,
      tiempo: 35,
      dificultad: 'Medium',
      etiqueta: null,
      esFavorito: false
    },
    {
      id: 8,
      nombre: 'Chicken Karaage',
      descripcion: 'Japanese fried chicken. The pieces are marinated in soy sauce, ginger, and garlic.',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI8z7hILXfaY224aF64D9SdDV0LoBywWcnVBhLMzoI0VoUuEfg12cXXxRh33kSGemZT1Oh5bEma48mKrhqFj3FNa5IIoVP3yruXkx61-6IAcudh3vZI_-6Edj_M_qOqBTCNfmVdbOK7VlBmvf1c8-R4Of9BB_-EqkyEFmNGvI8kFzqg4FBwX8h1HZMt7IgZwJk-gfF-sbzgXgp-EbDlNIDKA6J7MaQC1RHLAWAW0LGobK4Xx1seLQHYaP5TKqJhcRjkD5PBki-RHA',
      precio: 15.50,
      tiempo: 40,
      dificultad: 'Easy',
      etiqueta: null,
      esFavorito: false
    },
    {
      id: 9,
      nombre: 'Pad See Ew',
      descripcion: 'Thai stir-fried noodles with chicken, Chinese broccoli, and egg.',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhEdx6uw3eWLLJXSxyYy-UDC7JMAdBnFVevj0bjp_UPQWZmoOjJFsCc5OGzVV5h0xQ5FdUgU-fxrnBkKHIQKpWOfM5mLplVN2GpzX4VRlPop0fbk8KEzXUkwOTZBcCTQDaYYMJnPyp7-l3_1IvsFDbFhZfUMKPJ0crxmhCD_vocInxcpUq0-IUXZUaGxtVWVXIvof41ly_D75KiHsujdLTnFzczfQ1SMYXeNqqpdOLPCP2zL0vp_V_CLto-8VQufuGqWkfFb9gs00',
      precio: 13.90,
      tiempo: 25,
      dificultad: 'Easy',
      etiqueta: 'Chef Pick',
      esFavorito: false
    }
  ];

  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
          {/* Mobile Filter Toggle (Visible only on small screens) */}
          <div className="lg:hidden mb-4">
            <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 p-3 rounded-lg font-medium text-gray-700 dark:text-gray-200">
              <span className="material-icons">tune</span>
              Show Filters
            </button>
          </div>
          
          <div className="hidden lg:block space-y-8 sticky top-24">
            {/* Dietary Preferences */}
            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white flex items-center justify-between">
                  Diatario
                <span className="material-icons text-gray-400 text-sm cursor-pointer">expand_less</span>
              </h3>
              <div className="space-y-3">
                <label className="flex items-center group cursor-pointer">
                  <input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4 transition duration-150 ease-in-out cursor-pointer" type="checkbox"/>
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">Gluten-Free</span>
                </label>
                <label className="flex items-center group cursor-pointer">
                  <input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4 transition duration-150 ease-in-out cursor-pointer" type="checkbox"/>
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">Keto Friendly</span>
                </label>
                <label className="flex items-center group cursor-pointer">
                  <input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4 transition duration-150 ease-in-out cursor-pointer" type="checkbox"/>
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">Paleo</span>
                </label>
                <label className="flex items-center group cursor-pointer">
                  <input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4 transition duration-150 ease-in-out cursor-pointer" type="checkbox"/>
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">Dairy-Free</span>
                </label>
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Precio máximo</h3>
              <div className="relative pt-6 pb-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="absolute top-0 left-0 h-1 bg-primary rounded-full" style={{width: '50%'}}></div>
                <input 
                  type="range" 
                  min="0" 
                  max="50" 
                  step="10"
                  defaultValue="30"
                  className="absolute top-0 left-0 w-full h-1 bg-transparent appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:shadow"
                  onInput={(e) => {
                    const percent = (e.target.value / e.target.max) * 100;
                    e.target.previousElementSibling.style.width = percent + '%';
                    e.target.parentElement.nextElementSibling.children[1].textContent = e.target.value + '€';
                  }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>0€</span>
                <span className="font-medium text-primary">30€</span>
                <span>50€</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Recipe Grid */}
        <section className="flex-grow">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Mostrando <span className="font-semibold text-gray-900 dark:text-white">9 resultados</span> para pollo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {productos.map(producto => (
              <CardProducto key={producto.id} producto={producto} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav aria-label="Pagination" className="inline-flex rounded-lg shadow-sm -space-x-px">
              <a className="relative inline-flex items-center px-4 py-2 rounded-l-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
                <span className="material-icons text-base">chevron_left</span>
              </a>
              <a className="relative inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 bg-primary text-white text-sm font-medium" href="#">1</a>
              <a className="relative inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">2</a>
              <a className="relative inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">3</a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm font-medium text-gray-700">...</span>
              <a className="relative inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">8</a>
              <a className="relative inline-flex items-center px-4 py-2 rounded-r-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
                <span className="material-icons text-base">chevron_right</span>
              </a>
            </nav>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Categoria;