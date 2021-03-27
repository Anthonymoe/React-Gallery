import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList (props) {
    return(
        <>
            <h2>GalleryList</h2>
            <div>
                {props.gallery.map( ( photo )=>
                    <GalleryItem photo={photo} key={photo.id} addLike={props.addLike}/>
                )}
            </div>
        </>
    )
}

export default GalleryList;