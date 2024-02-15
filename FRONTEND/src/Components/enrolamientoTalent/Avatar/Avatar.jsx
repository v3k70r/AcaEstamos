import React from "react";

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
                <div id="avatar-preview" class="row">
                    <div className="col-md-12">
                        <img src="placeholder.jpg" alt="Avatar Preview" className="avatar-option selected-avatar"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Avatar;