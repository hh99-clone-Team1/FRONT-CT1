/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import './Imageboard.css';
import ImageCard from '../ImageCard/ImageCard';
import optimizeImage from '../ImageCard/ImageOptimization';

function Imageboard({ fetchedPosts, mainboard }) {
  const [optimizedImages, setOptimizedImages] = useState([]);

  useEffect(() => {
    const optimizeImages = async () => {
      const newOptimizedImages = new Map(optimizedImages);
      await Promise.all(
        fetchedPosts.map(async (post) => {
          if (!optimizedImages.has(post.postId)) {
            const optimizedData = await optimizeImage(post.url, post.title, post.nickname, post.postId, post.userId);
            newOptimizedImages.set(post.postId, optimizedData);
          }
        }),
      );
      setOptimizedImages(newOptimizedImages);
    };
    optimizeImages();
  }, [fetchedPosts, optimizedImages]);

  return (
    <>
      {Array.from(optimizedImages.values()).map((optimizedData) => (
        <ImageCard optimizedData={optimizedData} mainboard={mainboard} key={optimizedData.postId} />
      ))}
    </>
  );
}

export default Imageboard;
