import './ImagePreviewField.css'
import { useState } from 'react'
import { InputWrapper, MasterInput, defaultFieldStyle } from '../../../../components'
import { BsFillTrashFill } from "react-icons/bs";

export default function ImagePreviewField({ profile, setProfile, ...props }) {

    const handleImagePreview = (event) => {
        var reader = new FileReader();
        reader.onload = function(event) {
            setProfile(reader.result);
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <InputWrapper label="Profile" required={true}>
            <label className={`${defaultFieldStyle} profile_label`} for={`${profile == null && 'profile'}`} tabIndex="0">
                {profile == null ? <div>Drop your profile</div>
                  : <img src={profile} className="preview" height="100" alt="Profile Preview"/>
                }
            </label>
            {profile && <BsFillTrashFill className="profile_edit"/>}
            <MasterInput type="file" id="profile" hidden accept="image/*" name="profile" onChange={handleImagePreview}/>
        </InputWrapper>
    )
}