import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './AvatarModal.css'

const AvatarModal = ({ isOpen, onRequestClose, avatarData, onSelectAvatar }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Selecciona tu avatar"
            className="custom-modal-content"
        >
            <h4 className="modal-header">Selecciona tu Avatar:</h4>
            <div className="row">
                {avatarData.map((avatar, index) => (
                    <div className="col-md-2 col-sm-4 col-6" key={index}>
                        <img
                            src={avatar.src}
                            alt={`Avatar ${index + 1}`}
                            className="avatar-option img-fluid text-center"
                            onClick={() => onSelectAvatar(avatar)}
                        />
                    </div>
                ))}
            </div>
        </Modal>
    );
};
AvatarModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  avatarData: PropTypes.array.isRequired,
  onSelectAvatar: PropTypes.func.isRequired,
};

export default AvatarModal;