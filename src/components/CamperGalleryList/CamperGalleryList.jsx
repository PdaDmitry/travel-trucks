import { useSelector } from 'react-redux';

export const CamperGalleryList = () => {
  const gallery = useSelector(selectCampersGallary);
  return (
    <ul>
      {gallery.map((image, index) => (
        <li key={index}>
          <img src={image.original} alt={`Image ${index + 1}`} />
        </li>
      ))}
    </ul>
  );
};
