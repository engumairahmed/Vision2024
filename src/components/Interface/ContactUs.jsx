import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

function ContactUs() {
    return (
        <>
            <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-gray-900 rounded-lg" >
                <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                    <div>
                        <h1 id='contact' className="text-6xl font-bold text-white" >Contact Us</h1>
                        <p id='cont_text' className="text-sm text-blue-300 mt-4 leading-relaxed">Have some big idea or brand to develop and need help? <br /> Then reach out we'd love to hear about you  and provide help.</p>

                        <ul className="mt-12 space-y-8">
                            <li className="flex items-center">
                            <MdMailOutline style={{ width: "17px", height: "17px" }} />

                                <a href="javascript:void(0)" className="text-white text-sm ml-4">
                                    info@example.com
                                </a>
                            </li>
                            <li className="flex items-center">
                            <LuPhone style={{ width: "17px", height: "17px" }} />
                                <a href="javascript:void(0)" className="text-white text-sm ml-4">
                                    +158 996 888
                                </a>
                            </li>
                            <li className="flex items-center">
                            <GrLocation style={{ width: "17px", height: "17px" }} />
                                <a href="javascript:void(0)" className="text-white text-sm ml-4">
                                    123 Street 256 House
                                </a>
                            </li>
                        </ul>

                        <ul className="flex mt-12 space-x-4">
                            <li className="bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                <SlSocialFacebook style={{ width: "18px", height: "18px" }}/>
                                </a>
                            </li>
                            <li className="bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                <SlSocialLinkedin style={{ width: "18px", height: "18px" }} />
                                </a>
                            </li>
                            <li className="bg-blue-900  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                <SlSocialInstagram style={{ width: "18px", height: "18px" }} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg">
                        <p className="text-sm font-semibold text-gray-800">I'm interested in...</p>

                        <div className="space-y-4 max-lg:mt-4">
                            <button type="button" className="px-4 py-2 rounded-lg bg-blue-900 text-white text-sm tracking-wider font-medium outline-none border-2 mr-4">Wholesaler</button>
                            <button type="button" className="px-4 py-2 rounded-lg bg-blue-900 text-white text-sm tracking-wider font-medium outline-none border-2  mr-4">Retailer</button>
                        </div>

                        <form className="mt-8 space-y-4">
                            <input type='text' placeholder='Name'
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-blue" />
                            <input type='email' placeholder='Email'
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-blue" />
                            <input type='text' placeholder='Subject'
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-blue" />
                            <textarea placeholder='Message' rows="6"
                                className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-blue"></textarea>
                            <button type='button'
                                className="text-white bg-blue-900  tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" viewBox="0 0 548.244 548.244">
                                    <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" cliRrule="evenodd" data-original="#000000" />
                                </svg>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs;

