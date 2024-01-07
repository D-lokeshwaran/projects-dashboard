import './ImagePreviewField.css'
import { useState } from 'react'
import { InputWrapper, MasterInput, defaultFieldStyle } from '../../../../components'
import { BsUpload, BsTrash } from "react-icons/bs";

export default function ImagePreviewField({ ...props }) {

    const[profile, setProfile] = useState(null);

    const handleImagePreview = (event) => {
        const file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            var size = 0;
            if(file.size < 1000000) {
                size = Math.floor(file.size/1000) + 'KB';
            } else {
                size = Math.floor(file.size/1000000) + 'MB';
            }
            setProfile({src: reader.result, name: file.name, size: size});
        }
        reader.readAsDataURL(file);
    }

    return (
        <InputWrapper label="Profile" wrapperClass="widthFullH">
            {profile == null ?
                <label className="profile_fileUpload flexAlignCenterH justifyCenterH">
                    <BsUpload/>
                    <span className="drag_text ml10H">
                        Drop profile here or <b className="dark_text">Browse profile</b>
                    </span>
                    <input type="file" hidden onChange={handleImagePreview} accept="image/*"/>
                </label>
            :   <div className="preview_container flexAlignCenterH spaceBetweenH">
                    <div className="flexAlignCenterH">
                        <img src={profile.src} className="preview" alt="Profile Preview"/>
                        <div className="profile_info ml20H">
                            <p>{profile.name}</p>
                            <small>{profile.size}</small>
                        </div>
                    </div>
                    <BsTrash className="profile_trash" onClick={() => setProfile(null)}
                            title="Remove the profile"/>
                </div>
            }
        </InputWrapper>
    )
}