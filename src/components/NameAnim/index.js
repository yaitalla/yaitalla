import React from 'react';
import { Wrapper, Title, Letter } from './style';

const Space = () => {
  return (
    <>
      <Letter>&nbsp;</Letter>
      <Letter>&nbsp;</Letter>
    </>
  )
}

const AnimatedTitle = ({s}) => {
  
  const str = Array.from(s)
    return (
      <Wrapper>
        <Title >
          {
            str.map((c, i) => c === ' ' ?
              <Space key={i} />
              :
              <Letter key={i} >{c}</Letter> 
            )
          }
                 </Title>
      </Wrapper>
    );
  };
  
  export default AnimatedTitle;
  