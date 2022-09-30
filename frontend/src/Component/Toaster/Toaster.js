import { toast } from 'react-toastify';


export const successToaster = (msg) => {
    return toast.success(msg);
}

export const errorToaster = (msg) => {
    return toast.error(msg);
}