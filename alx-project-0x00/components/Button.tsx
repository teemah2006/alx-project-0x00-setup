import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  return (
    <button className={`btn px-4 py-2 rounded-md  cursor-pointer ${size} ${shape}`}>
      {title}
    </button>
  )
}

export default Button;