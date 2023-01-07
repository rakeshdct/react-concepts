import React, { useState } from 'react'
import '../styles/profileImageUpload.css';

const ProfileImageUpload = (props) => {
    const [imagePreviewUrl, setimagePreviewUrl] = useState('');
    const photoUpload = e => {
        e.preventDefault();
        const reader = new FileReader();
        if (e.target.files[0] !== undefined) {
            const file = e.target.files[0];
            reader.onloadend = () => {
                setimagePreviewUrl(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }
    const removepic = () => {
        setimagePreviewUrl('')
    }
    return (
        <div className="page">
            <div className="card">
                <div>
                    <h1>Profile Card </h1>
                    <label htmlFor="photo-upload" className="custom-file-upload">
                        {imagePreviewUrl === "" && <span>{props.profileInfo.inital}</span>}
                        <div className="img-wrap img-upload" >
                            <span>Click here to upload image </span>
                            <img htmlFor="photo-upload" src={imagePreviewUrl} alt="" />
                        </div>
                        <input id="photo-upload" type="file" accept=".jpg,.png" onChange={photoUpload} />
                    </label>
                    {imagePreviewUrl !== "" && <p onClick={removepic}>Remove profile picture</p>}
                    <h2 className={imagePreviewUrl === "" ? 'space' : ''}>{props.profileInfo.name}</h2>
                    <p>{props.profileInfo.status}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileImageUpload