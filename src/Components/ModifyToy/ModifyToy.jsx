import React, { useContext } from 'react';
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const ModifyToy = ({ item, handleDeleteMyToys, }) => {

    const { user, loading } = useContext(AuthContext)
    const handleUpdateItem = (event) => {
        event.preventDefault()
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const toyDetails = form.toyDetails.value;
        const image = form.photoURL.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const size = form.size.value;
        const color = form.color.value;
        // console.log(toyName,sellerEmail,sellerName, category, toyDetails, image, price,quantity)
        const saveToy = {
            toyName: toyName, sellerEmail: sellerEmail, sellerName: sellerName, subcategory: category, availableQuantity: quantity,
            productDetails: toyDetails, toyImage: image, price: price, size: size, color: color
        }

        fetch(`https://byte-brains-server.vercel.app/updateToys/${item._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveToy)
        })
            .then((response) => {
                console.log('after posting new menu item', response);
                if (response) {
                    Swal.fire({
                        title: 'Toy Added Successfully',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    form.reset()
                }

                return response.data;
            })
            .catch((error) => {
                console.error('Error:', error);

                throw error;
            });
    }
    console.log(item)
    return (
        <div className="overflow-x-auto">
            {
                loading ? (<span className="loading loading-dots loading-lg"></span>) : (<table className="table">
                    {/* head */}

                    <tbody>
                        {/* row 1 */}
                        <tr className='text-base'>
                            <td><img className='w-[100px]' src={item.toyImage} alt="image coming" /></td>
                            <td>{item.toyName}</td>
                            <td>{item.subcategory}</td>
                            <td>{item.price}</td>
                            <td><button onClick={() => document.getElementById('my_modal_5').showModal()} className='text-2xl'><GrUpdate></GrUpdate></button></td>
                            <td><button onClick={() => handleDeleteMyToys(item._id)} className='text-4xl'><AiFillDelete></AiFillDelete></button></td>
                        </tr>

                    </tbody>


                </table>)
            }
            <div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                    <div className=" w-2/4 bg-slate-200 container mx-auto ">
                        <form onSubmit={handleUpdateItem} className=' w-full  h-full  p-8 container mx-auto'>
                            <div className='flex w-full gap-x-6'>
                                <div className=" w-full ">
                                    <label className="label">
                                        <span className="label-text font-semibold">Toy Name*</span>

                                    </label>
                                    <input type="text" name='toyName' placeholder="toy name" className="input input-bordered w-full " />

                                </div>
                                <div className=" w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Seller Name*</span>

                                    </label>
                                    <input type="text" name='sellerName' placeholder="seller name" className="input input-bordered w-full " />

                                </div>
                            </div>
                            <div className=' flex gap-x-6 w-full'>
                                <div className=" w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Seller Email*</span>

                                    </label>
                                    <input type="text" name='sellerEmail' value={user.email} placeholder="seller name" className="input input-bordered w-full " />

                                </div>
                                <div className=" w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Available quantity*</span>

                                    </label>
                                    <input type="number" name='quantity' placeholder="available quantity" className="input input-bordered w-full " />

                                </div>
                            </div>
                            <div className=' flex gap-x-6 w-full'>
                                <div className=" w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Size*</span>

                                    </label>
                                    <input type="text" name='size' placeholder="size" className="input input-bordered w-full " />

                                </div>
                                <div className=" w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Color*</span>

                                    </label>
                                    <input type="text" name='color' placeholder="color" className="input input-bordered w-full " />

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
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL*</span>

                                </label>
                                <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Toy Details</span>

                                </label>
                                <textarea name='toyDetails' className="textarea textarea-bordered h-24" placeholder="toy details"></textarea>

                            </div>

                            <input type='submit' value='Add Item' className='btn btn-square bg-yellow-300 w-fit p-3 mt-2'></input>
                        </form>
                        <div className="modal-action mr-6 mb-6">
                            <form method="dialog mr-6 mb-6">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default ModifyToy;