import React, { useState, useEffect } from 'react'; 

const Albums = () => { 
  // Состояния для хранения данных об альбомах и фотографиях 
  const [albums, setAlbums] = useState([]); 
  const [photos, setPhotos] = useState([]); 

  // Загрузка данных с сервера при монтировании компонента 
  useEffect(() => { 
    // Функция для загрузки данных с сервера 
    const fetchData = async () => { 
      try { 
        // Загрузка данных об альбомах 
        const albumsResponse = await fetch('https://jsonplaceholder.typicode.com/albums'); 
        const albumsData = await albumsResponse.json(); 
        setAlbums(albumsData); 

        // Загрузка данных о фотографиях 
        const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos'); 
        const photosData = await photosResponse.json(); 
        setPhotos(photosData); 
      } catch (error) { 
        console.error('Error fetching data:', error); 
      } 
    }; 

    // Вызываем функцию загрузки данных 
    fetchData(); 
  }, []); // Пустой массив зависимостей означает, что useEffect выполнится только при монтировании компонента 

  // Рендеринг компонента 
  return ( 
    <div> 
      {/* Заголовок компонента */}
      <h1>Альбомы и фотографии</h1> 
      
      {/* Маппинг данных об альбомах */}
      {albums.map(album => ( 
        <div key={album.id}> 
          {/* Название альбома */}
          <h2>{album.title}</h2> 
          
          {/* 
            Фильтрация фотографий по альбому и их отображение.
            Фотографии фильтруются по полю "albumId" и отображаются внутри каждого альбома.
          */}
          {photos.filter(photo => photo.albumId === album.id).map(photo => ( 
            <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} /> 
          ))} 
        </div> 
      ))}
    </div> 
  ); 
}; 

export default Albums; 