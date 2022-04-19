import React, {useState} from 'react';

export const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input value={props.status} onBlur={deactivateEditMode} autoFocus={true}/>
                </div>
            }
        </>
    )
}

type ProfileStatusType = {
    status: string
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