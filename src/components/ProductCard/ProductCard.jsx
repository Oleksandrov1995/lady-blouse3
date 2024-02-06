import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './ProductCard.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { productsTypeData } from 'data/productsTypeData';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const ProductCard = ({ productCardModalOpen, productCardModalClose, productId }) => {
  const handleModalClose = () => {
    productCardModalClose();
      };
      const selectedProduct = productsTypeData.find(product => productId === product.id);

  return (
    <div>
      <Modal
        open={productCardModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={'modal'}
      >
        <Box className={'modalBox'}>
          <AiOutlineCloseCircle
            size={30}
            onClick={handleModalClose}
            className="modalButtonClose"
          />
          
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {selectedProduct && selectedProduct.colorsImg.map(slide => (
          <SwiperSlide key={slide.id}>
            {' '}
            <img
              className="reviews-img"
              src={slide.img}
              alt="Колір куртки"
            />
             <p>{slide.colorName}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <p>{selectedProduct?.price} грн</p>
          <p>{selectedProduct?.todayPrice} грн</p>
      <form action="">
      {selectedProduct && (
  <div>
    <label htmlFor="Size">Виберіть колір:</label>
    <select className='modalSelect' id="Color" value={selectedProduct.colorsImg.colorName} 
    >
      <option value='0'>- колір -</option>
      {selectedProduct.colorsImg.map((color) => (
        <option key={color.id} value={color.colorName}>{color.colorName}</option>
      ))}
    </select>
  </div>
)}

      {selectedProduct && (
  <div>
    <label htmlFor="Size">Розмір/Довжина:</label>
    <select className='modalSelect' id="Size" value={selectedProduct.size} 
    >
      <option value='0'>- розмір/довжина -</option>
      {selectedProduct.sizes.map((size, index) => (
        <option key={index} value={size}>{size}</option>
      ))}
    </select>
  </div>
)}
<button>Оформити замовлення</button>
</form>
<p>{selectedProduct && selectedProduct.aboutTitle}</p>
<div>{selectedProduct && selectedProduct.aboutText}</div>
<p>Заміри виробу</p>
   <div>{selectedProduct?.sizeTable}</div>
   <button>Обрати колір</button>
        </Box>
      </Modal>
    </div>
  );
};
