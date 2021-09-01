export const submitForm = async(payload) =>{
    try {
        const rawResponse = await fetch(`${process.env.VUE_APP_BASE_URL}actions/freeform/api/form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })

        const response = await rawResponse.json()
        if (response.status === 201) {
            return {
                status: true,
                message: "Form successfully submitted. Our sales team will contact you soon"
            }
        }
    } catch (err) {
        return {
            status: false,
            message: "Something went wrong! Please try again"
        }
    }
}