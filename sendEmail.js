// const {SendEmailCommand } = require('@aws-sdk/client-ses');
const AWS = require('aws-sdk');
const aws_cred = {
    region: 'ap-south-1',
    secretAccessKey: 'kg1FYu1V8nVI20RLhqXnvbVdLny8hNGRyYrRTw5x',
    accessKeyId: 'AKIATVMVO62VBMN2JZPW'
}

const SES = new AWS.SES(aws_cred);

const params = {
    Destination: {
        ToAddresses: ["gunjankumbhani8@gmail.com"],
    },
    Message: {
        /* required */
        Body: {
            /* required */
            Html: {
                Charset: "UTF-8",
                Data: `
                <tr>
                    <th style="border: 1px solid #ddd; padding: 10px;">
                        #</th>
                    <th style="border: 1px solid #ddd; padding: 10px;"> Date</th>
                    <th style="border: 1px solid #ddd; padding: 10px;"> Interpreter</th>
                    <th style="border: 1px solid #ddd; padding: 10px;"> COI</th>
                    <th style="border: 1px solid #ddd; padding: 10px;"> COI Date </th>
                    <th style="border: 1px solid #ddd; padding: 10px;"> Type</th>
                    <th style="border: 1px solid #ddd; padding: 10px;"> Language</th>
                    <th>Court</th>
                </tr>`,
            },
            Text: {
                Charset: "UTF-8",
                Data: "this is text part",
            },
        },
        Subject: {
            Charset: "UTF-8",
            Data: "TESTING E-MAIL SENDING",
        },
    },
    Source: "gunjankumbhani00@gmail.com",
    ReplyToAddresses: [],
}

const sendMail = async () => {
    try {        
        const emailsent = await SES.sendEmail(params).promise().then(data=>{console.log(data);}).catch(e=>console.log(e));
    } catch (error) {
        console.log(error);
    }
}
sendMail();