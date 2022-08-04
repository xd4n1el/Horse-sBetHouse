import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;
const InputModel = styled.input`
  font-family: 'Rancho', cursive;
  font-weight: 500;
  width: 100%;
  height: 100%;
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => props.borderRadius};
  padding: 0rem 0.75rem;
  font-size: ${(props) => props.fontSize};

  :focus{
    border: none;
    outline 0;
  }

  ${props => props.type === 'number' ? '::-webkit-inner-spin-button { -webkit-appearance: none; }' : ''}
`;

const Input = (props) => {
  const maxLength = (event) => {
    const invalidChars = [...props.invalidCharacters];
    if (
      event.target.value.length === props.maxLength ||
      invalidChars.includes(event.key)
    ) {
      event.preventDefault();
    }
  };

  return (
    <Div width={props.width} height={props.height} margin={props.margin}>
      <InputModel
        fontSize={props.fontSize}
        border={props.border}
        borderRadius={props.borderRadius}
        placeholder={props.placeholder}
        type={props.type}
        onKeyPress={(event) =>
          props.maxLength ? maxLength(event) : props.maxLength
        }
        onChange={props.onChangeInput}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        value={props.value}
        ref={props.reference}
        variant={props.variants}
      />
    </Div>
  );
};

export default Input;
