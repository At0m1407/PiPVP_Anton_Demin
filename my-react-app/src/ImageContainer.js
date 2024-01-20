import React from 'react';
import CustomizableImage from './CustomizableImage';
//создаем ImageContainer, который принимает свойство children в качестве дочерних компонентов.
const ImageContainer = ({ children }) => {
//возвращаем  <div>, внутри которого располагаются переданные дочерние компоненты.
  return children;
};

export default ImageContainer;