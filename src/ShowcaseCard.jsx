import React from 'react';

const ShowcaseCard = ({ image, title, type }) => {
    return (
        <div className="w-fit rounded-md">
            <img
                className="object-cover cursor-pointer transition-all duration-300 w-96 h-96"
                src={image}
                alt={title}
            />
            {/* <div className="flex justify-between py-4">
                <div className="flex flex-col">
                    <h1 className="font-times text-lg lg:text-2xl">{title}</h1>
                    <p className="inter text-xs lg:text-sm font-light text-zinc-400">
                        {type}
                    </p>
                </div>

            </div> */}
        </div>
    );
};

export default ShowcaseCard;