import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { data } from "../utils/index.js";
import { CiPlay1 } from "react-icons/ci";
import updateprotfolio from "../img/My resume .docx.pdf"
const Protfolio = () => {

    return (
        <div className="relative overflow-hidden w-full p-5 dark:bg-black dark:text-white-500">
            <div className="mx-auto relative inline bg-red text-center">
                <p className="text-capitalize text-xl font-sans font-semibold">Welcome to my</p>
                <h1 className="text-7xl font-primary mt-3">Portfolio</h1>
            </div>
            <div className="overflow-x-auto">
                <SyntaxHighlighter
                    language="javascript"
                    showLineNumbers
                    showInlineLineNumbers
                    wrapLines={true} // Ensure wrapping of long lines
                >
                    {data}

                </SyntaxHighlighter>
            </div>
           <div className="flex h-10 w-24 bg-green-500 relative rounded-md shadow-lg">
            <a href={updateprotfolio} download className="h-full w-full grid place-content-center text-2xl ">
             <CiPlay1 />
            </a>
           </div>
        </div>
    )
}
export default Protfolio;
