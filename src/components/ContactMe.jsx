
const ContactMe = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-100 text-gray-900">
            {/* Contact Form */}
            <div className="flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
                <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 py-4">
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://linkedin.com/dasbiswajiit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.603c0-1.337-.026-3.061-1.866-3.061-1.867 0-2.154 1.459-2.154 2.967v5.697h-3v-11h2.887v1.507h.042c.403-.76 1.387-1.561 2.853-1.561 3.049 0 3.611 2.007 3.611 4.615v6.439z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/Biswajit0972/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.774.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.931 0-1.31.467-2.382 1.235-3.221-.123-.303-.534-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.553 3.298-1.23 3.298-1.23.653 1.653.242 2.873.119 3.176.77.839 1.234 1.911 1.234 3.221 0 4.609-2.803 5.628-5.475 5.922.43.372.823 1.102.823 2.221v3.293c0 .319.219.694.824.576 4.765-1.586 8.199-6.083 8.199-11.384 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.345 3.608 1.32.975.975 1.258 2.242 1.32 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.258-3.608 1.32-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.258-2.242-1.32-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.258 3.608-1.32 1.265-.058 1.645-.069 4.849-.069m0-2.163c-3.257 0-3.667.012-4.947.071-1.281.059-2.573.344-3.575 1.346-1.002 1.002-1.287 2.294-1.346 3.575-.059 1.28-.071 1.69-.071 4.947s.012 3.667.071 4.947c.059 1.281.344 2.573 1.346 3.575 1.002 1.002 2.294 1.287 3.575 1.346 1.28.059 1.69.071 4.947.071s3.667-.012 4.947-.071c1.281-.059 2.573-.344 3.575-1.346 1.002-1.002 1.287-2.294 1.346-3.575.059-1.28.071-1.69.071-4.947s-.012-3.667-.071-4.947c-.059-1.281-.344-2.573-1.346-3.575-1.002-1.002-2.294-1.287-3.575-1.346-1.28-.059-1.69-.071-4.947-.071zm0 5.838c-3.405 0-6.162 2.757-6.162 6.162s2.757 6.162 6.162 6.162 6.162-2.757 6.162-6.162-2.757-6.162-6.162-6.162zm0 10.248c-2.255 0-4.086-1.831-4.086-4.086s1.831-4.086 4.086-4.086 4.086 1.831 4.086 4.086-1.831 4.086-4.086 4.086zm6.406-11.845c-.796 0-1.44.644-1.44 1.44s.644 1.44 1.44 1.44 1.44-.644 1.44-1.44-.644-1.44-1.44-1.44z" />
                        </svg>
                    </a>
                </div>
                <p className="text-center mt-2 text-sm">&copy; 2024 Biswajit Das. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default ContactMe;
