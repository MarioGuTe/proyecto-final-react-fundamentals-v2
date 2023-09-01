import { useState, useEffect, useCallback, useMemo } from "react";
import Header from "../molecules/Header/Header";
import HeroSection from "../molecules/HeroSection/HeroSection";
import SearchBar from "../molecules/SearchBar/SearchBar";
import CategoryList from "../molecules/CategoryList/CategoryList";
import ImageGallery from "../molecules/ImageGallery/ImageGallery";
import { PixabayApi } from "../api/pixabay-data";
import s from "./particle/style.module.css";

function App() {
  const [images, setImages] = useState();

  // LLamado de imágenes por default
  const fetchDefaultImages = useCallback(async () => {
    const imageList = await PixabayApi.fetchDefaultImages();
    if (imageList.length > 0) {
      setImages(imageList);
    }
  }, []);

  // Función en versión normal a modo de demostración
  // async function fetchDefaultImages() {
  //   const imageList = await PixabayApi.fetchDefaultImages();
  //   if (imageList.length > 0) {
  //     setImages(imageList);
  //   }
  // }

  // Aplicación de hook useMemo a modo de demostración
  // const fetchDefaultImages = useMemo(() => {
  //   return async () => {
  //     const imageList = await PixabayApi.fetchDefaultImages();
  //     if (imageList.length > 0) {
  //       setImages(imageList);
  //     }
  //   };
  // }, []);

  // Llamado de imágenes a través de una query/petición
  async function fetchByQuery(query) {
    const queryResponse = await PixabayApi.fetchByQuery(query);
    if (queryResponse.length > 0) {
      setImages(queryResponse);
    } else {
      console.log("No se encontraron resultados");
    }
  }

  // Pintado de imágenes iniciales
  useEffect(() => {
    fetchDefaultImages();
  }, []);

  return (
    <div>
      <Header title="FF" />
      <section className={s.main_content}>
        <HeroSection />
        <SearchBar onSubmit={fetchByQuery} />
      </section>
      <CategoryList categoryList={images} onClickItem={fetchByQuery} />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
