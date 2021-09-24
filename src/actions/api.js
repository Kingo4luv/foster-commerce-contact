export const submitForm = async(payload) =>{

    try {
        const response = await fetch(`${process.env.VUE_APP_BASE_URL}actions/freeform/api/form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "X-Requested-With": "XMLHttpRequest",
                "HTTP_X_REQUESTED_WITH": "XMLHttpRequest"
            },
            body: JSON.stringify(payload),
        })
        await response.json()
        if (response.status === 200) {
            return {
                status: true,
                message: "Form successfully submitted. Our sales team will contact you soon"
            }
        }else{
            return {
                status: false,
                message: "Something went wrong! Please try again"
            }
        }
    } catch (err) {
        return {
            status: false,
            message: "Something went wrong! Please try again"
        }
    }
    
}