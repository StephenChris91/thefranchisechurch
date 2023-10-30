import { useForm } from 'react-hook-form';


const Signup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


    return ( 
        <section className="sign-up-wrapper">
            <div className="sign-up-container">
                <h2 className="sign-up-header">Thank you for joining us</h2>

                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <div className="input-forms">
                        <div>
                            <input {...register('firstName')} placeholder='First Name'/>
                            <input {...register('lastName', { required: true })} placeholder='Last Name'/>
                            {errors.lastName && <p>Last name is required.</p>}
                        </div>
                        <div>
                            <input type='email' {...register('email', { pattern: /\d+/ }, { required: true })} placeholder='Email Address'/>
                            {errors.email && <p>Please enter number for age.</p>}
                            <input type='date' {...register('date', {required: true})} className='date' placeholder='Date of Birth'/>
                            {errors.date && <p>Please select a date</p>}
                        </div>
                        <div>
                            <input type="number" {...register('phone', {required: true})} placeholder='Phone No'/>
                            {errors.phone && <p>Please provide a valid phone number</p>}
                            <input type="text" {...register('address', {required:true})} placeholder='Home Address'/>
                            {errors.address && <p>Please provide your address</p>}
                        </div>
                    </div>
                    

                    <div className='checkboxes'>
                        <h2>How can we help you</h2>
                        <form onSubmit={handleSubmit((data) => console.log(data))}>
                            <div>
                                <input name='firstQuestion' type="checkbox" {...register('I am a first time guest', {required: true})} />
                                <label htmlFor="firstQuestion" id='firstQuestion' className="form-check-label">I am a first time guest</label>
                            </div>
                            <div>
                                <input name='secondQuestion' type="checkbox" {...register('I am a first time guest', {required: true})} />
                                <label htmlFor="secondQuestion" id='secondQuestion' className="form-check-label">I am giving my life to Jesus</label>
                            </div>
                            <div>
                                <input name='thirdQuestion' type="checkbox" {...register('I am a first time guest', {required: true})} />
                                <label htmlFor="thirdQuestion" id='thirdQuestion' className="form-check-label">I am interested in learning more about baptism</label>
                            </div>
                            <div>
                                <input name='fourthQuestion' type="checkbox" {...register('I am a first time guest', {required: true})} />
                                <label htmlFor="fourthQuestion" id='fourthQuestion' className="form-check-label">I am interested in learning more about volunteering</label>
                            </div>

                        </form>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section> 
    );
}
 
export default Signup;