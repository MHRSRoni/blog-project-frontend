import { useState } from 'react';

const AllCategory = () => {

    const [following, setFollowing] = useState(false);

    const handleClick = () => {
        setFollowing(e => !e);
    }

    return (
        <div className='container mx-auto flex pt-3'>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"
                            }
                        </button>
                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>
                    </div>

                </div>
                {/* single card here */}














                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>
                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}




                {/* Single Card Start Here  */}
                <div class="bg-white p-4 rounded-md shadow-md">

                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-sm font-bold"> <span># </span>JavaScript</h2>
                        <h1 className="text-[12px]"> 139515 posts</h1>
                    </div>

                    <p className="text-gray-900 text-sm"> We are man and we are selfish!! Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                    <div className="mt-6 flex justify-between">
                        <button onClick={handleClick}
                            className={`${following ? 'bg-transparent text-black-700 font-semibold  text-black py-2 px-4 border-2 border-gray-100     hover:border-gray-700 rounded hover:border-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white font-xl hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded '}`}
                        >
                            {
                                following ? "Following" : " Follow"

                            }
                        </button>

                        <button className="font-xl bg-white hover:bg-gray-100 text-gray-800 font-xl py-2 px-4  rounded">
                            Hide
                        </button>
                        <button>
                            <img className="w-12 h-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QiqFhwmE--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png" alt="" />
                        </button>


                    </div>

                </div>
                {/* single card here */}






















            </div>


        </div>
    );
};

export default AllCategory;