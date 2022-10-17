import { HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface IButtonProps {
  type: string;
  text: string;
  rest?: HTMLAttributes<any>
}

const Button = ({ type, text, ...rest }: IButtonProps) => {
  const btnStyle = () => {
    if (type === "primary"){
        return ".btnPrimary"
    }
  };

  return <button className={`${() => btnStyle}`} >{text}</button>;
};

export default Button;
