import './AboutProduct.css'

export const AboutProduct = () => {
  return (
    <section className='aboutProduct'>
      <ul className='aboutProduct-list'>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct1.jpg')}alt="Жилетка на вішаку" />
          <h4 className='aboutProduct-listTitle'>Наповнювач</h4>
          <p className='aboutProduct-listText'>Легкий та м'який і теплий зимовий аеропух, добре відводить вологу, рівномірно лежить за рахунок пружності та не збивається.</p>
        </li>
        <li className='aboutProduct-item'>
          <img className='about-img' src={require('../../Images/aboutProduct2.jpg')} alt="Дівчина в жилетці" />
          <h4 className='aboutProduct-listTitle'>Тканина</h4>
          <p className='aboutProduct-listText'>Стійка до бруду та вологи матова плащівка яка добре допомагає тримати тепло, виконує роль захасту від відтру та приємна на дотик.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct3.jpg')} alt="Жилетки на вішаку" />
          <h4 className='aboutProduct-listTitle'>Підкладка</h4>
          <p className='aboutProduct-listText'>Міцна та гладенька саржа яка добре розправляєтся та лягає на одяг.</p>
        </li>
        <li className='aboutProduct-item '>
          <img className='about-img' src={require('../../Images/aboutProduct4.jpg')}alt="Жилетка на вішаку" />
          <h4 className='aboutProduct-listTitle'>Планка</h4>
          <p className='aboutProduct-listText'>Щільна  та добре прошита планка під блискавкою яка не дасть холоду проникнути в середину.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct5.jpg')} alt="Дівчина в жилетці" />
          <h4 className='aboutProduct-listTitle'>Манжети</h4>
          <p className='aboutProduct-listText'>М'якенькі та затишні манжети які своїм розміром, зручним положенням та теплом трохи навіть замінять рукавички.</p>
        </li>
       
      </ul>
    </section>
  );
};
