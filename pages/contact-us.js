/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";


export default function ContactUs() {
    const defaultForm = {
        name: '',
        email: '',
        contactHandle: '',
        about: '',
        intWith: 'telegram',
        intChatId: '',
    }
    const [fromData, setfromData] = useState(defaultForm)
    const [fromError, setFromError] = useState({})

    const formHandler = (val, key) => {
        setfromData({ ...fromData, [key]: val })
    }

    const clearForm = () => {
        setfromData({ ...defaultForm })
        setFromError({})
    }

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validateForm = () => {
        let localVar = {}
        if (!fromData.name && !fromData.name.length) {
            localVar['name'] = ['This field is required']
        }
        if (!fromData.email && !fromData.email.length) {
            localVar['email'] = ['This field is required']
        }
        if (fromData.email && fromData.email.length && !validateEmail(fromData.email)) {
            localVar['email'] = ['Invalid email format']
        }
        if (!fromData.contactHandle && !fromData.contactHandle.length) {
            localVar['contactHandle'] = ['This field is required']
        }
        if (!fromData.about && !fromData.about.length) {
            localVar['about'] = ['This field is required']
        }
        setFromError(localVar)

        if (Object.keys(localVar).length) {
            return false
        } else {
            return true
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (validateForm()) {
            axios.post('/api/contact-us',fromData).then(resp => {
                console.log(resp.data)
            }).catch(e => {
                console.log(e)
            })
        } else
            console.log(fromData)
    }

    return (
        <>
            <IndexNavbar fixed />
            <section className="header relative pt-16 items-center bg-blueGray-100 flex h-screen max-h-460-px">
                <div className="justify-center text-center flex flex-wrap">
                    <div className="w-full md:w-6/12 px-12 md:px-4">
                        <h2 className="font-semibold text-4xl">Contact Us</h2>
                        <p className="text-lg leading-relaxed mt-4 mb-24 text-blueGray-500">
                            Exciting news! Form Master is here to simplify your form generation needs and streamline integration with Telegram. 🚀✉️ To seamlessly integrate your forms, we invite you to share your form details and Telegram information with us. It's a FREE service!
                        </p>
                    </div>
                </div>
            </section>
            <section className="pb-16 bg-blueGray-200 relative pt-32">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-blueGray-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>

                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg relative z-10">
                        <div className="w-full bg-blueGray-100  rounded-lg ">
                            <p className="text-4xl text-center mt-12">
                                <span role="img" aria-label="love">
                                    🖖🏻
                                </span>
                            </p>
                            <div className="sm:block flex flex-col mt-10">
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <form>
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            Contact Details
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        value={fromData.name}
                                                        placeholder="Ronak Bokaria"
                                                        onChange={(e) => formHandler(e.target.value, 'name')}
                                                    />
                                                    {fromError.name ? <span className="text-sm text-red-500"> {fromError.name.join(',')} </span> : ''}
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="jesse@example.com"
                                                        value={fromData.email}
                                                        onChange={(e) => formHandler(e.target.value, 'email')}
                                                    />
                                                    {fromError.email ? <span className="text-sm text-red-500"> {fromError.email.join(',')} </span> : ''}

                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Telegram/Twitter Handle
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="@ronakjain2012"
                                                        value={fromData.contactHandle}
                                                        onChange={(e) => formHandler(e.target.value, 'contactHandle')}
                                                    />
                                                    {fromError.contactHandle ? <span className="text-sm text-red-500"> {fromError.contactHandle.join(',')} </span> : ''}

                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"> &nbsp;
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-12/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Query / Form Fields / Complaint
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        rows="4"
                                                        value={fromData.about}
                                                        onChange={(e) => formHandler(e.target.value, 'about')}
                                                        placeholder="Write your query or about the form structure for example (Name, email, phoneNumber, areacode, address...)"
                                                    ></textarea>
                                                    {fromError.about ? <span className="text-sm text-red-500"> {fromError.about.join(',')} </span> : ''}

                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            Integration Details
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Integration with
                                                    </label>

                                                    <select
                                                        value={fromData.intWith}
                                                        onChange={(e) => formHandler(e.target.value, 'intWith')}
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="whatever" id="frm-whatever">
                                                        <option value="telegram">Telegram</option>
                                                    </select>
                                                    {fromError.intWith ? <span className="text-sm text-red-500"> {fromError.intWith.join(',')} </span> : ''}

                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Telegram Chat ID/Telegram handle to receive responses
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="@FormMaster13_Bot"
                                                        onChange={(e) => formHandler(e.target.value, 'intChatId')}
                                                        value={fromData.intChatId}
                                                    />
                                                    {fromError.intChatId ? <span className="text-sm text-red-500"> {fromError.intChatId.join(',')} </span> : ''}

                                                </div>
                                            </div>

                                        </div>
                                        <div className="px-4 mt-6">
                                            <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                                onClick={submitForm}>
                                                Submit
                                            </button>
                                            <button
                                                onClick={clearForm}
                                                className="active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg border-solid  border-lightBlue-500 mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                Clear
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="text-center mt-16"></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
