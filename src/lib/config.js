const sendEmail = (merchant, receipt) => {
  return {
    url: 'https://www.natours.dev',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ***REMOVED***',
    },
    data: {
      personalizations: [
        {
          to: [
            {
              email: 'alguem@gmail.com',
            },
          ],
          dynamic_template_data: {
            merchant,
            receipt,
          },
        },
      ],
      from: {
        email: 'noreply@noreply.com.br',
      },
      template_id: ***REMOVED***',
    },
    method: 'POST',
    proxy: true,
  };
};

export default sendReceiptForEmail;