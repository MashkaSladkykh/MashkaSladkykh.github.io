import { nanoid } from 'nanoid';
const AttachedImages = ({images, name}) => (
    <>
        <h2>Attached images</h2>
        <div className="details_images">
            {images.map(picture=>(<img src={picture} alt={name} key={nanoid()}/>))}
        </div>
    </>
);

export default AttachedImages;