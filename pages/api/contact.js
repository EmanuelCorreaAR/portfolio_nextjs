import { transporter, mailOptions } from "@/config/nodemailer";

const CONTACT_MESSAGE_FIELD = {
    name: "Name",
    email: "Email",
    phone_number: "Phone Number",
    subject: "Subject",
    message: "Message",
}

const generateEmailContent = (data) => {
    const stringData = Object.entries(data).reduce((str, [key, val]) => str += `${CONTACT_MESSAGE_FIELD[key]} :\n${val}} \n \n`
        , "")

    const htmlData = Object.entries(data).reduce((str, [key, val]) => str += `<h1>${CONTACT_MESSAGE_FIELD[key]}</h1><p>${val}</p>`
        , "")
    return {
        text: stringData,
        html: htmlData
    }
}



const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        if (!data.name || !data.email || !data.message || !data.subject) {
            return res.status(400).json({ message: "Bad Request" })
        }
        try {
            await transporter.sendMail({
                ...mailOptions,
                ...generateEmailContent(data),
                subject: data.subject,
                text: "This is a test string",
                
            })
            return res.status(200).json({ success: true })
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }

    }

    return res.status(400).json({ message: "Bad Request" })
}

export default handler