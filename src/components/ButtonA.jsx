

const ButtonA = ({children,  className, href}) => {
    return (
       <a href={href} className={className} target="_blank">{children}</a>
    )
}
export default ButtonA
