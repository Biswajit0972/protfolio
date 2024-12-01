import {useState} from 'react'

const TextExpender = ({text="", limit, className}) => {
    const [expand, setExpend] = useState(false);

    const displayedText = expand? `${text.slice(0, (limit * 5))}..` : `${text.slice(0, limit)}`
    return (
        <>

        <p className={className}>{displayedText}
            {text.length > limit && (
                <button onClick={() => setExpend(!expand)}>
                    {expand ? '^' : '...'}
                </button>
            )}
        </p>
        </>

    )
}
export default TextExpender;
