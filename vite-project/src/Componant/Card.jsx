import React from 'react'

const Card = ({name="CWC"}) => {
    return (
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
            <img
                src="https://images.unsplash.com/photo-1739382445476-61ff0ae36125?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
                        soluta amet corporis accusantium aliquid consectetur eaque!
                    </p>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                >
                    Read more
                </button>
            </div>
        </div>
    )
}

export default Card