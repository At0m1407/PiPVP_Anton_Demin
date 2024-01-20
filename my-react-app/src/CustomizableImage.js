import React from 'react';
// Создаем CustomizableImage, который принимает (props) src, width, height и style .
const CustomizableImage = ({ src, width, height, style }) => {
//создаем imageStyles, который содержит базовые стили для максимальной ширины и высоты, а также дополнительные стили, переданные через props
  const imageStyles = {
    maxWidth: '100%',
    maxHeight: '100%',
    ...style,
  };
//Возвращаем элемент <img>, в который передаются свойства изображения и стили.
  return <img src={src} width={width} height={height} style={imageStyles} />;
};
export default CustomizableImage;