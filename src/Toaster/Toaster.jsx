import { toast } from "react-toastify"

export const registerToaster=(message)=>{
toast.success(message, {
className:' bg-green-100 text-whit font-semiBold ',
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
// theme: "colored",
})
}

export const loginToaster=(message)=>{
toast.success(message, {
className:' bg-green-100 text-whit font-semiBold ',
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
// theme: "colored",
})
}