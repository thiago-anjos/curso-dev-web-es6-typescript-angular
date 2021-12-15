export const saudacao = () => {
  let data = new Date().toLocaleDateString();
  return `Olá, seja muito bem-vindo. Hoje é dia ${data}`;
};

export async function getAddress(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  return response.json();
}
