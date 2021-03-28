import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem (props) {
    const[showPhoto, setShowPhoto] = useState( false );

    let displayPhoto = () => {
        let content = <img className="photo" onClick = {toggleContent} src={props.photo.path } />
        if( showPhoto ) {
            content = <div className="description" onClick = {toggleContent}><p>{props.photo.description}</p></div> 
        }
        return content;
    }

    let toggleContent = () => {
        setShowPhoto( !showPhoto );
    }

    return(
        <>
            <div className="content">
                {displayPhoto()}
                <button onClick={ () => props.addLike(props.photo.id)} className="button" id={props.photo.id}>Love IT!</button>
                <p>Likes:{props.photo.likes}</p>
            </div>
        </>
    )
}

export default GalleryItem;