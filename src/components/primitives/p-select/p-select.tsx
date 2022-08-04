import {wrapper} from './p-select.styles';
import {PSelectProps} from './p-select.types';

export const PSelect = (props: PSelectProps) => {
  return (
    <div className={wrapper}>
      <label htmlFor={props.id}>{props.label}</label>
      <select {...props}>
        <option value="">{props.placeholder}</option>
        {props?.options?.map(opt => (
          <option key={opt.name} value={opt?.value}>
            {opt?.value}
          </option>
        ))}
      </select>
    </div>
  );
};
