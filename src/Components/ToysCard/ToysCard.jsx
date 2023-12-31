import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ToysCard = ({ item }) => {
   
    
    const { toyImage, toyName, price, _id, } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    

    const handleViewDetails = (_id) => {
        if (!user) {
            Swal.fire({
                title: 'Please login to view details',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',  { state: { from: location }});
                }
            });
        } else {
            // If the user is logged in, navigate to the view details page
            navigate(`/viewDetails/${_id}`);
        }
    };

    return (
        <div className='container mx-auto' >
            <img src={toyImage} className='w-[300px]' alt='' />
            <p className='mt-5 text-xl '>{toyName}</p>
            <p className='mt-3'>$ {price}</p>

            <button onClick={()=>handleViewDetails(_id)} className=' px-4 py-1 border-gray-800 btn rounded-none hover:bg-yellow-500  border mt-3'>View Details</button>
        </div>
    );
};

export default ToysCard;