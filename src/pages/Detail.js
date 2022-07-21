import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import style from '../detail.module.css';

function Detail(props) {
  let { id } = useParams();
  id = Number(id);

  useEffect(() => {});

  return (
    <div className='list_con'>
      <p>{props.shoes[id].title}</p>
      <div class='img'>
        <img
          alt=''
          src={`${process.env.PUBLIC_URL}/img/product0${id + 1}.jpg`}
        />
      </div>
      <p>{props.shoes[id].price}</p>
      <p>{props.shoes[id].txt}</p>
    </div>
  );
}

export default Detail;
