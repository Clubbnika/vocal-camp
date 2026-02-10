export const submitPaymentForm = (data: Record<string, string | string[]>) => {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://secure.wayforpay.com/pay';

  const addField = (name: string, value: string | string[]) => {
    const values = Array.isArray(value) ? value : [value];
    values.forEach((val) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = val;
      form.appendChild(input);
    });
  };

  Object.entries(data).forEach(([key, value]) => {
    addField(key, value);
  });

  addField('language', 'UA');

  document.body.appendChild(form);
  form.submit();

  setTimeout(() => {
    document.body.removeChild(form);
  }, 500);
};