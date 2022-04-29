import SuccessBar from '../../components/successBar/SuccessBar';
import './styles.scss';

const AccountPage = () => {
  return (
    <div className="account container">
        <SuccessBar />
        <div className='py-3'>
            <h1 className='ps-3 pb-3'>My account</h1>
            <div className='p-2 ps-4 pt-4 bg-light border rounded-top'>
                <p className='text-muted'>ACCOUNT DETAIL</p>
            </div>
            <div className='d-flex justify-content-between bg-light border p-2 '>
                <div className='ps-4 pt-2'>
                    <p>Name:</p>
                    <p className='text-muted'>Walker-0</p>
                </div>
                <div className='align-middle mt-4 pe-3'>
                    <button className='text-primary border  p-1 px-3 bg-light'>EDIT</button>
                </div>
                
            </div>

            <div className='d-flex justify-content-between bg-light border p-2 '>
                <div className='ps-4 pt-2'>
                    <p>Email:</p>
                    <p className='text-muted'>Cucumislush@gmail.com</p>
                </div>
                <div className='align-middle mt-4 pe-3'>
                    <button className='text-primary border  p-1 px-3 bg-light'>EDIT</button>
                </div>
                
            </div>

            <div className='d-flex justify-content-between bg-light border p-2 '>
                <div className='ps-4 pt-2'>
                    <p>Password:</p>
                    <p className='text-muted'>*********************</p>
                </div>
                <div className='align-middle mt-4 pe-3'>
                    <button className='text-primary border  p-1 px-3 bg-light'>EDIT</button>
                </div>
                
            </div>

            <div className='d-flex justify-content-between bg-light border p-2 '>
                <div className='ps-4 pt-2'>
                    <p>Phone number::</p>
                    <p className='text-muted'>+234 8128517012</p>
                </div>
                <div className='align-middle mt-4 pe-3'>
                    <button className='text-primary border  p-1 px-3 bg-light'>EDIT</button>
                </div>
                
            </div>

            <div className='d-flex justify-content-between bg-light border p-2 rounded-bottom'>
                <div className='ps-4 pt-2'>
                    <p>Shipping address:</p>
                    <p className='text-muted shippingAddress'>10 wole ogunjimi street, opebi road, ikeja Lagos.</p>
                </div>
                <div className='align-middle mt-4 pe-3'>
                    <button className='text-primary border  p-1 px-3 bg-light'>EDIT</button>
                </div>
                
            </div>


        </div>   
    </div>
  )
}

export default AccountPage