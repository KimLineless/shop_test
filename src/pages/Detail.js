import { useParams } from 'react-router-dom';

function Detail(props) {
  let { id } = useParams();
  id = Number(id);
  return (
    <div className='list_con'>
      <p>{props.shoes[id].title}</p>
      <img alt='' src={`${process.env.PUBLIC_URL}/img/product0${id + 1}.jpg`} />
      <p>{props.shoes[id].price}</p>
    </div>
  );
}

export default Detail;
