

const formatDate = (date = Date.now()) => {
    const newDate= new Date(date);
    return newDate.toLocaleTimeString("en-US",{
        hour:"numeric",
        minute:"numeric",
        second:"numeric",
    })

}