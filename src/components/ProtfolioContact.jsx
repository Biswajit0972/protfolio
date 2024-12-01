

const ProtfolioContact = () => {

    return (
        <section className="mb-6">
            <h2 className="text-lg font-semibold mb-2 font-primary">Contact</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="mb-2">
                    <span className="font-medium">Email:</span>{" "}
                    <a
                        href="mailto:workbiswajit0981@gmail.com"
                        className="text-blue-600 underline"
                    >
                        workbiswajit0981@gmail.com
                    </a>
                </p>
                <p className="mb-2">
                    <span className="font-medium">Phone:</span> +91 9083399159
                </p>
                <p className="mb-2">
                    <span className="font-medium">GitHub:</span>{" "}
                    <a
                        href="https://github.com/Biswajit0972"
                        className="text-blue-600 underline"
                    >
                        github.com/Biswajit0972
                    </a>
                </p>
                <p>
                    <span className="font-medium">LinkedIn:</span>{" "}
                    <a
                        href="https://www.linkedin.com/in/dasbiswajiit"
                        className="text-blue-600 underline"
                    >
                        linkedin.com/in/dasbiswajiit
                    </a>
                </p>
            </div>
        </section>
    )
}
export default ProtfolioContact
