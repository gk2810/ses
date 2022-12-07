const  { SESClient,SendEmailCommand } = require("@aws-sdk/client-ses")

const client = new SESClient({
    region: 'ap-south-1',
    credentials:{

        secretAccessKey: 'kg1FYu1V8nVI20RLhqXnvbVdLny8hNGRyYrRTw5x',
        accessKeyId: 'AKIATVMVO62VBMN2JZPW'
    }
})

const createSendEmailCommand = (toAddress, fromAddress) => {
  return new SendEmailCommand({
    Destination: {
      /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: [
        toAddress,
        /* more To-email addresses */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: "===> EMAIL_TESTING <===",
        },
        Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "EMAIL_SUBJECT",
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ],
  });
};

const run = async () => {
  const sendEmailCommand = createSendEmailCommand(
    ["gunjankumbhani8@gmail.com"],
    "gunjankumbhani00@gmail.com"
  );

  try {
    return await client.send(sendEmailCommand);
  } catch (e) {
    console.error(e);
    return e;
  }
};

run();