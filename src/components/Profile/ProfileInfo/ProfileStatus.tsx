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

/*class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }
    activatedEditMode = () => {
    this.setState({
        editMode: true
        })
}
deactivateEditMode = () => {
    this.setState({
        editMode: false
        })
}
    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatedEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus*/