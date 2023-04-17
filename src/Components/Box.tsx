import { useNavigate } from '@solidjs/router';
import { Component } from 'solid-js';

interface IProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const Box: Component<IProps> = (props: IProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(props.href);
  };

  return (
    <div class="box box-animate" onClick={onClick}>
      <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <span class="icon is-large">
          <i class={'fas fa-2x ' + props.icon}></i>
        </span>
        <span class="is-size-4">
          <b>{props.title}</b>
        </span>
        <span class="is-size-6">{props.description}</span>
      </div>
    </div>
  );
};
