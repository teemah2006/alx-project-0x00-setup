import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`btn px-4 py-2 rounded-md border cursor-pointer ${styles}`}>
      {title}
    </button>
  )
}

export default Button;