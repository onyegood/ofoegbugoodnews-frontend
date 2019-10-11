import axios from 'axios';
import {baseURL} from '../baseURL';

export default {
    customer : {
        updateCustomer: (customer, id) => axios
            .put(baseURL + `/api/customer/update/${id}`, {customer})
            .then(res => res.data.customer),

        deleteCustomer: id => axios
            .delete(baseURL + `/api/customer/delete/${id}`)
            .then(res => res.data.customer),     
    },

    customers : {
        getCustomers: () => axios
            .get(baseURL + "/api/customers")
            .then(res => res.data.customers)
    }

};