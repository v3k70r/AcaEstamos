import { useState } from 'react';
import './Avatar.css';
import AvatarModal from '../Modal/AvatarModal';

function Avatar() {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const selectAvatar = (avatar) => {
        setSelectedAvatar(avatar);
        closeModal();
    };

    return (
        <>
            <div className="container-fluid contenedor-avatar">
                <div id="avatar-preview" className="row">
                    <div className="selected-avatar-container">
                        {selectedAvatar ? (
                            <img src={selectedAvatar.src} alt="Avatar Preview" className="avatar-option selected-avatar" />
                        ) : (
                            <div className="empty-avatar"></div>
                        )}
                    </div>
                </div>
                {/*<h4 id="seleccionaAvatar">Selecciona tu Avatar:</h4>*/}
                <button className='boton-avatar btn text-white' onClick={() => setIsModalOpen(true)}>Selecciona tu avatar</button>

                <AvatarModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    avatarData={avatarData}
                    onSelectAvatar={selectAvatar}
                />
            </div>
        </>
    );
}
const avatarData = [
    { src: 'images/Hombre_avatar1.png' },
    { src: 'images/Mujer_avatar1.png' },
    { src: 'images/Hombre_avatar2.png' },
    { src: 'images/Mujer_avatar2.png' },
    { src: 'images/Hombre_avatar3.png' },
    { src: 'images/Mujer_avatar3.png' },
    { src: 'images/Hombre_avatar4.png' },
    { src: 'images/Mujer_avatar4.png' },
    { src: 'images/Hombre_avatar5.png' },
    { src: 'images/Mujer_avatar5.png' },
    { src: 'images/Hombre_avatar6.png' },
    { src: 'images/Mujer_avatar6.png' },
];

export default Avatar;























{/*import './Avatar.css'

function Avatar() {
    return (
        <>
            <div className="container-fluid">
                <h4 id="seleccionaAvatar">Selecciona tu Avatar:</h4>
                <div className="row">
                    <div className="col-md-2">
                        <img src="images/Hombre_avatar1.png" alt="Avatar 1" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                    <div className="col-md-2">
                        <img src="images/Hombre_avatar2.png" alt="Avatar 2" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                    <div className="col-md-2">
                        <img src="images/Hombre_avatar3.png" alt="Avatar 3" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                    <div className="col-md-2">
                        <img src="images/Hombre_avatar4.png" alt="Avatar 4" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                    <div className="col-md-2">
                        <img src="images/Hombre_avatar5.png" alt="Avatar 5" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                    <div className="col-md-2">
                        <img src="images/Hombre_avatar6.png" alt="Avatar 6" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                    <div className="col-md-2">
                        <img src="images/Mujer_avatar1.png" alt="Avatar 7" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                    <div className="col-md-2">
                        <img src="images/Mujer_avatar2.png" alt="Avatar 8" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                    <div className="col-md-2">
                        <img src="images/Mujer_avatar3.png" alt="Avatar 9" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                    <div className="col-md-2">
                        <img src="images/Mujer_avatar4.png" alt="Avatar 10" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                    <div className="col-md-2">
                        <img src="images/Mujer_avatar5.png" alt="Avatar 11" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                    <div className="col-md-2">
                        <img src="images/Mujer_avatar6.png" alt="Avatar 12" className="avatar-option img-fluid text-center"
                            onClick="selectAvatar(this)"/>
                    </div>
                </div>
                <h5>Avatar Seleccionado:</h5>
                <div id="avatar-preview" className="row">
                    <div className="col-md-12">
                        <img src="placeholder.jpg" alt="Avatar Preview" className="avatar-option selected-avatar"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Avatar;*/}