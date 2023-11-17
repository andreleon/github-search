import './Button.scss'

interface ButtonProps {
  title: string
  onClick: () => void
  className?: string
}
export const Button = ({ className, onClick, title }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {title}
    </button>
  )
}
