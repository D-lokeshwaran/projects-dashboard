import './ImagePreviewField.css'
import { useState } from 'react'
import { InputWrapper, MasterInput, defaultFieldStyle } from '../../../../components'

export default function ImagePreviewField({ profile, setProfile }) {

    const handleImagePreview = (event) => {
        var reader = new FileReader();
        reader.onload = function(event) {
            setProfile(reader.result);
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <InputWrapper label="Profile" required={true} className="ml20H">
            <label className={`${defaultFieldStyle} profile_label`} for={`${profile == null && 'profile'}`}>
                {profile == null ? <div>Drop your profile</div>
                  : <img src={profile} className="preview" height="100" alt="Profile Preview"/>
                }
            </label>
            <MasterInput type="file" id="profile" hidden accept="image/*" name="profile" onChange={handleImagePreview}/>
        </InputWrapper>
    )
}