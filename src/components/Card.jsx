const Card = ({children}) => {
    return (
        <div
            className="relative h-[30dvh] w-[60dvw] sm:w-[50dvw] md:w-[40dvw] lg:w-[30dvw] rounded-lg px-5 py-7 border border-black dark:border-white hover:bg-white-500 hover:custom-box-shadow dark:hover:shadow-amber-50 cursor-pointer flex flex-col transition dark:text-white dark:hover:text-black overflow-x-hidden overflow-auto">
            {children}
        </div>
    )
}
export default Card
