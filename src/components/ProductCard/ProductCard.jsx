import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProductCard.css';
import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { productsTypeData } from 'data/productsTypeData';

export const ProductCard = ({ modalOpen }) => {
  const { id } = useParams();
  const selectedProduct = productsTypeData.find(product => id === product.id);

  const [productColor, setProductColor] = useState({});
  const [productSize, setProductSize] = useState('');

  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');

    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const handleColorChange = event => {
    const selectedColorId = event.target.value;
    const selectedColor = selectedProduct.colorsImg.find(
      color => color.id === selectedColorId
    );

    setProductColor(selectedColor);
  };

  const handleAddPRoduct = () => {
    const productToAdd = {
      id: `${selectedProduct.id}-${productColor.id}-${productSize}`,
      type: selectedProduct.type,
      price: selectedProduct.todayPrice,
      color: productColor.colorName,
      size: productSize,
      quantity: 1,
    };

    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const isProductAdded = storedProducts.find(
      product => productToAdd.id === product.id
    );
    if (isProductAdded) {
      return modalOpen();
    }
    const updatedProducts = [...storedProducts, productToAdd];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    modalOpen();
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <Link to={`/`}>
        <ArrowBackIcon fontSize="large" />
      </Link>
      <h3>{selectedProduct.type}</h3>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {selectedProduct &&
          selectedProduct.colorsImg.map(slide => (
            <SwiperSlide key={slide.id}>
              {' '}
              <img className="reviews-img" src={slide.img} alt="Колір куртки" />
              <p>{slide.colorName}</p>
            </SwiperSlide>
          ))}
      </Swiper>
      <p>{selectedProduct?.price} грн</p>
      <p>{selectedProduct?.todayPrice} грн</p>
      <form action="">
        {selectedProduct && (
          <div>
            <label htmlFor="Size">Оберіть колір:</label>
            <select
              onChange={handleColorChange}
              id="Color"
              value={selectedProduct.colorsImg.colorName}
            >
              <option value="0">- колір -</option>
              {selectedProduct.colorsImg.map(color => (
                <option key={color.id} value={color.id}>
                  {color.colorName}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedProduct && (
          <div>
            <label htmlFor="Size">Оберіть розмір:</label>
            <select
              onChange={event => setProductSize(event.target.value)}
              id="Size"
              value={selectedProduct.size}
            >
              <option value="0">- розмір/довжина -</option>
              {selectedProduct.sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>
      <button onClick={handleAddPRoduct}>Оформити замовлення</button>

      <p>{selectedProduct && selectedProduct.aboutTitle}</p>
      <div>{selectedProduct && selectedProduct.aboutText}</div>
      <p>Заміри виробу</p>
      <div>{selectedProduct?.sizeTable}</div>
      <button onClick={handleAddPRoduct}>
  Оформити замовлення
</button>
    </div>
  );
};
