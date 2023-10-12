/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';

import ModifyToy from '../ModifyToy/ModifyToy';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';

const MyToys = () => {
    const { user } = useContext(AuthContext)

    // const [userEmail, setUserEmail] = useState([])
    // useEffect(() => {
    //     fetch(`https://byte-brains-server.vercel.app/specificUser?sellerEmail=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserEmail(data)

    //         })
    // }, [])

    const {data: userEmail=[],isLoading : loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res= await fetch (`https://byte-brains-server.vercel.app/specificUser?sellerEmail=${user?.email}`);
            return res.json()
        }
    })

    const handleDeleteMyToys = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://byte-brains-server.vercel.app/my-toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                       refetch()

                    })

            }
        })
    }

    return (
        <div className='container mx-auto mt-10'>
            <Helmet>
                <title>MyToys | ByteBrains</title>

            </Helmet>
            <table className='table'>
                <thead>
                    <tr className='text-lg'>

                        <th>Toy Image</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
            </table>
            {
                userEmail.map(item => <ModifyToy key={item._id} item={item} handleDeleteMyToys={handleDeleteMyToys} ></ModifyToy>)
            }


        </div>
    );
};

export default MyToys;

















<div className="overflow-x-auto">
    <table className="table">
        {/* head */}
        <thead>
            <tr>

                <th>Toy Image</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {/* row 1 */}
            <tr>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

        </tbody>


    </table>
</div>