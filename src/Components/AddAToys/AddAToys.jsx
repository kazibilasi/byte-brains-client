/* eslint-disable no-unused-vars */
import React from 'react';

const AddAToys = () => {


    return (
        <div>
            <div className=' w-full h-full p-10'>

                <form className=' w-full lg:w-[800px] h-full bg-slate-50 p-8 container mx-auto'>
                    <div className='flex w-full gap-x-6'>
                        <div className=" w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Toy Name*</span>

                            </label>
                            <input type="text" name='name' placeholder="recipe name" className="input input-bordered w-full " />

                        </div>
                        <div className=" w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Seller Name*</span>

                            </label>
                            <input type="text" name='name' placeholder="recipe name" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className=' flex gap-x-6 w-full'>
                        <div className=" w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Seller Email*</span>

                            </label>
                            <input type="text" name='name' placeholder="recipe name" className="input input-bordered w-full " />

                        </div>
                        <div className=" w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Available quantity*</span>

                            </label>
                            <input type="text" name='name' placeholder="recipe name" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="w-full flex gap-x-6">
                        <div className='w-2/3'>

                            <label className="label w-full">
                                <span className="label-text font-semibold">Sub Category*</span>

                            </label>
                            <select name='category' className="select select-bordered w-full">
                                <option disabled selected>Pick one</option>
                                <option>Outdoor Exploration</option>
                                <option>Plush Toys</option>
                                <option>Building Blocks</option>
                                <option>Dolls and Accessories</option>
                                
                            </select>


                        </div>
                        <div className='w-2/3'>
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>

                            </label>
                            <input type="number" name='price' placeholder="Price" className="input input-bordered w-full " />
                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Toy Details</span>

                        </label>
                        <textarea name='recipe' className="textarea textarea-bordered h-24" placeholder="recipe details"></textarea>

                    </div>
                    <input type="file" name='image' className="file-input file-input-ghost file-input-bordered mt-5 w-full max-w-xs" /><br />

                    <input type='submit' value='Add Item' className='btn btn-square bg-orange-300 w-fit p-3 mt-2'></input>
                </form>
            </div>
        </div>
    );
};

export default AddAToys;