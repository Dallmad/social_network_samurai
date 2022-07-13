import React, {ChangeEvent, useEffect, useState} from 'react';

export const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
        setStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} value={status} onBlur={deactivateEditMode} autoFocus={true}/>
                </div>
            }
        </>
    )
}

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}