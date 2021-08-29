import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className='grid place-items-center'>
            <Image 
                src='https://barmee.shop/wp-content/uploads/2020/04/18-185958_transparent-fb-icon-png-transparent-background-facebook-icon.png'
                alt=''
                height={400} width={400}
                objectFit='contain'
            />
            <h1 onClick={signIn} className='bg-blue-500 p-5 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
        </div>
    )
}

export default Login
