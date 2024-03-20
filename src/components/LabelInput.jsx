import styled from 'styled-components';
import Input from './Input';

function LabelInput({ id, placeholder, type, value, label, onChange }) {
  return (
    <LabelInputLayout>
      <label htmlFor={id}>
        <p>{label}</p>
      </label>
      <Input placeholder={placeholder} type={type} value={value} id={id} onChange={onChange} />
    </LabelInputLayout>
  );
}
export default LabelInput;

const LabelInputLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;

  p {
    font-size: 12px;
    margin: 0;
    padding-bottom: 8px;
    line-height: 1;
    cursor: pointer;
  }
`;
