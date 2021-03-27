function GalleryItem (props) {
    return(
        <>
            <div className="content">
                <img className="photo" src={props.photo.path} />
                <p>{props.photo.description}</p>
                <button id={props.photo.id}>Love IT!</button>
                <p>Likes:<span></span></p>
            </div>
        </>
    )
}

export default GalleryItem;