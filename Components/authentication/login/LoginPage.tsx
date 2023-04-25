import EyeHide from "@/Components/Icons/EyeHide";
import EyeShow from "@/Components/Icons/EyeShow";
import Link from "next/link";
import { useState } from 'react';
import { useForm } from "react-hook-form";

interface IFormInput {
    email: string;
    password: any;
}
const LoginPage = () => {
    const [passwordShow, setPasswordShow] = useState<boolean>(false);
    //form input function-----------------------------------------------
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit = (formData: IFormInput) => {
        // console.log(formData)
    }
    //next-----------------------------------------------------
    return (
        <div className="text-secondary container grid_place_center min-h-screen ">
            <div className="w-full  text-center">
                {/* ------------title------------ */}
                <div className="text-center">
                    <h3 className="text-secondary text-xl lg:text-3xl font-semibold tracking-wide">Login To Your Account</h3>
                    <p className="text-secondary/35
                ">Choose your fevorite manue from 200+ resipie </p>
                </div>
                <div className="mt-6 lg:mt-16 w-full flex flex-col lg:flex-row lg:justify-between">
                    {/* ------------with email and password------------ */}
                    <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2 w-full">
                        <div className="px-0 lg:px-20">
                            <label htmlFor="email" />
                            <input type="email" id="email" placeholder="Your Email" {...register("email")} className="inputClass w-full placeholder:text-md border-2 border-background-light rounded-sm tracking-wider" />
                        </div>
                        <div className="px-0 lg:px-20">
                            <div className="relative w-full">
                                <label htmlFor="password" />
                                <input type={passwordShow ? "text" : "password"} id="password" placeholder="Your Password" {...register("password")} className="inputClass w-full placeholder:text-md border-2 border-background-light rounded-sm tracking-wider " />
                                {
                                    !passwordShow &&
                                    <span onClick={() => setPasswordShow((pre: boolean) => !pre)} className="absolute transform translate-y-[50%] right-4 cursor-pointer">
                                        <EyeShow moreClass="w-[1.6rem] h-[1.6rem] fill-secondary/60" />
                                    </span>
                                }
                                {
                                    passwordShow &&
                                    <span onClick={() => setPasswordShow((pre: boolean) => !pre)} className="absolute transform translate-y-[50%] right-4 cursor-pointer">
                                        <EyeHide moreClass="w-[1.6rem] h-[1.6rem] fill-secondary/60" />
                                    </span>
                                }
                            </div>
                        </div>
                        <div className="px-0 lg:px-20">
                            <button type="submit" className="bg-secondary/60 w-full py-2 lg:py-3 text-md border-2 border-secondary/60 rounded-sm text-background-light font-medium">Login to Your Account</button>
                        </div>
                    </form>
                    {/* ------------with google, github, facebook------------ */}
                    <div className="mt-8 lg:mt-0 flex flex-col gap-2 w-full">
                        <div className="px-0 lg:px-20">
                            <button className="bg-background-light w-full py-2 lg:py-3 text-md border-2 border-secondary/60 rounded-sm">Login With Google</button>
                        </div>
                        <div className="px-0 lg:px-20">
                            <button className="bg-background-light w-full py-2 lg:py-3 text-md border-2 border-secondary/60 rounded-sm">Login With Google</button>
                        </div>
                        <div className="px-0 lg:px-20">
                            <button className="bg-background-light w-full py-2 lg:py-3 text-md border-2 border-secondary/60 rounded-sm">Login With Google</button>
                        </div>
                    </div>
                </div>
                {/* ------------forget password------------ */}
                <div className="mt-2 lg:mt-10 flex flex-col items-center">
                    <Link href={"/sign_up"} className=""><span className="hover:text-secondary text-secondary/60 duration-300 underline text-sm tracking-wide">Don&apos;t have any account sign up?</span></Link>
                    <Link href={"/sign_up"} className=""><span className="hover:text-secondary text-secondary/60 duration-300 underline text-sm tracking-wide">Forget Password?</span></Link>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;