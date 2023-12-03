import React from 'react';

const ProfileComponent = () => {
    return (
        <div className='container mx-auto flex pt-3'>

            <div className="bg-white p-8 rounded shadow-md w-full ">

                <div className="mb-4 text-center">
                    <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-line-black-icon-png-image_691051.jpg" alt="Profile Image" className="mx-auto rounded-full h-20 w-20" />
                </div>


                <div className="flex justify-start flex-wrap gap-4">

                    <div className="mb-4 w-[31%]">
                        <label for="fileInput" className="block text-sm font-medium text-gray-600">Choose File</label>
                        <input placeholder="Your text will be here" type="file" id="fileInput" name="fileInput" className="mt-1 p-1 border rounded-md w-full" />
                    </div>


                    <div className="mb-4 w-[31%]">
                        <label for="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                        <input placeholder="Your Email" type="email" id="email" name="email" className="mt-1 p-2 border rounded-md w-full" />
                    </div>

                    <div className="mb-4 w-[31%]">
                        <label for="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
                        <input placeholder="Your First Name" type="text" id="firstName" name="firstName" className="mt-1 p-2 border rounded-md w-full" />
                    </div>


                    <div className="mb-4 w-[31%]">
                        <label for="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
                        <input placeholder="Your Last Name" type="text" id="lastName" name="lastName" className="mt-1 p-2 border rounded-md w-full" />
                    </div>

                    <div className="mb-4 w-[31%]">
                        <label for="mobile" className="block text-sm font-medium text-gray-600">Mobile</label>
                        <input placeholder="Your Mobile Number" type="tel" id="mobile" name="mobile" className="mt-1 p-2 border rounded-md w-full" />
                    </div>


                </div>

                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
                </div>

            </div>

        </div>
    );
};

export default ProfileComponent;