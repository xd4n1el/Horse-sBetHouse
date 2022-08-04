import Modal from "styled-react-modal";

const StyledModal = Modal.styled`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width};
    max-width: ${(props) => props.maxWidth};
    height: ${(props) => props.height};
    max-height: ${props => props.maxHeight};
    background-color: #D9D9D9;
    border-radius: ${props => props.borderRadius};
`;

const ModalModel = (props) => {
  return (
    <StyledModal
      isOpen={props.isOpen}
      width={props.width}
      maxWidth={props.maxWidth}
      height={props.height}
      maxHeight={props.maxHeight}
      borderRadius={props.borderRadius}
      onBackgroundClick={props.onBackgroundClick}
    >
      {props.children}
    </StyledModal>
  );
};

export default ModalModel;
