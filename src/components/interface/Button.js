import styled from "styled-components";

const ButtonModel = styled.button`
  position: ${(props) => props.position};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justContent};
  align-items: ${(props) => props.alignItems};
  background-color: ${(props) => props.bgColor};
  background-image: url(${(props) => props.bgImg});
  background-size: ${(props) => props.bgSize};
  background-repeat: no-repeat;
  background-position: center center;
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  filter: ${(props) => props.filter};
  cursor: pointer;
  z-index: ${(props) => props.zIndex};

  :disabled{
    opacity: 0.5;
  }
`;

const Button = (props) => {
  return (
    <ButtonModel
      position={props.position}
      display={props.display}
      justContent={props.justContent}
      alignItems={props.alignItems}
      bgColor={props.bgColor}
      bgImg={props.bgImg}
      bgSize={props.bgSize}
      width={props.width}
      maxWidth={props.maxWidth}
      height={props.height}
      maxHeight={props.maxHeight}
      border={props.border}
      borderRadius={props.borderRadius}
      margin={props.margin}
      filter={props.filter}
      zIndex={props.zIndex}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonModel>
  );
};

export default Button;
