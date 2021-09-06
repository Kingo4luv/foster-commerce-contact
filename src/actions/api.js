export const submitForm = async(payload) =>{
   
        await fetch(`${process.env.VUE_APP_BASE_URL}actions/freeform/api/form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })

        // await rawResponse.json()
        return {
            status: true,
            message: "Form successfully submitted. Our sales team will contact you soon"
        }
    
}