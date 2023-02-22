export const AttachedImages = ({ images, name }) => (
  <>
    <h2>Attached images</h2>
    <div className='details_images'>
      {images.map((picture) => (
        <img src={picture.url} alt={name} key={picture.id} />
      ))}
    </div>
  </>
);