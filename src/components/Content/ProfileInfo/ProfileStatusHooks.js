import React, {useState, useEffect} from 'react';
import prof from './ProfileInfo.module.css';



const ProfileStatusHooks = (props) => {
    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }



    return <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode} >{props.status || '-----'}</span>
                </div> 
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                     autoFocus={true} onBlur={deactivateMode}
                      value={status}/>
                </div>
            }
            </div>
}


export default ProfileStatusHooks;