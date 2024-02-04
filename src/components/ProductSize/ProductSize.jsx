import './ProductSize.css';

export const ProductSize = () => {
  return (
    <section id="productSize" className='productSize'>
      <h2>Заміри виробу</h2>
      <table className='productSize-table'>
  <thead>
    <tr>
      <th>Розмір</th>
      <th>Обхват грудей, см</th>
      <th>Довжина, см</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>42-46</td>
      <td>88-108</td>
      <td>100\120</td>
    </tr>
    <tr>
      <td>48-50</td>
      <td>106-116</td>
      <td>100\120</td>
    </tr>
    <tr>
      <td>52-54</td>
      <td>114-124</td>
      <td>100\120</td>
    </tr>
  </tbody>
</table>

      <p><span className='productSize-bolt'>*</span>  Розмір 52-54 доступний під замовлення з доплатою 210 грн, термін виробництва 5 робочих днів, потім доставка 1-3 дні. Також можете залишити заявку і уточнити наявність розміру.</p>
    </section>
  );
};
