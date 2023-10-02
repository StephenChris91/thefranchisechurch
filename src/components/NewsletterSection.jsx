import { useForm } from "react-hook-form";



function NewsletterSection () {
    
    const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

    return (
        <>
            <div className='newsletter-wrapper'>
                <div className="newsletter-left">
                </div>
                <div className="newsletter-right">
                        <h3 className="newsletter-title">WEEKLY NEWSLETTERS</h3>
                        <h1 className="call-to-action">STAY UP TO DATE</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Name"{...register("name")} />
                            <input type="email" placeholder="Email"{...register("email")} />
                            <input type="email" placeholder="Phone Number (Optional)"{...register("email")} />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
            </div>
        </>
    )
}

export default NewsletterSection