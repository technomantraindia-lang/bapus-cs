const accessKeyParts = ['144740b5', '715f', '447a', 'b591', '8932587930cf'];

export async function submitWeb3Form(form, formType) {
  const payload = Object.fromEntries(new FormData(form).entries());
  payload.access_key = accessKeyParts.join('-');
  payload.from_name = "Bapu's Website";
  payload.form_type = formType;

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Unable to send your message.');
  }

  return result;
}
