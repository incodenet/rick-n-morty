import {wrapper} from './p-input.styles';
import {PInputProps} from './p-input.types';

export const PInput = (props: PInputProps) => {
  return (
    <div className={wrapper}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...props} />
    </div>
  );
};
