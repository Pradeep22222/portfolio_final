import messageSchema from "./messageSchem.js"

export const sendMessage = (obj) => {
    return messageSchema(obj).save()
}