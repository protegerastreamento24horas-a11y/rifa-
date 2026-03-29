const axios = require('axios');

exports.handler = async (event, context) => {
  // Apenas aceita requisições POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { nome, email, total, numeros } = JSON.parse(event.body);
    const apiKey = process.env.ASAAS_API_KEY;
    const isSandbox = process.env.ASAAS_ENVIRONMENT === 'sandbox';
    const baseUrl = isSandbox ? 'https://sandbox.asaas.com/api/v3' : 'https://api.asaas.com/api/v3';

    if (!apiKey) {
      throw new Error("Configuração ausente: ASAAS_API_KEY não definida.");
    }

    const headers = {
      'access_token': apiKey,
      'Content-Type': 'application/json'
    };

    // 1. Criar ou buscar o cliente
    const customerResponse = await axios.post(`${baseUrl}/customers`, {
      name: nome,
      email: email
    }, { headers });

    const customerId = customerResponse.data.id;

    // 2. Criar a cobrança PIX
    const paymentResponse = await axios.post(`${baseUrl}/payments`, {
      customer: customerId,
      billingType: 'PIX',
      value: parseFloat(total),
      dueDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 24h de validade
      description: `Rifa BOSS - Números: ${numeros}`,
      externalReference: `rifa_${Date.now()}`
    }, { headers });

    const paymentId = paymentResponse.data.id;

    // 3. Obter o QR Code e Copia e Cola do PIX
    const pixResponse = await axios.get(`${baseUrl}/payments/${paymentId}/pixQrCode`, { headers });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        success: true,
        paymentId: paymentId,
        copyAndPaste: pixResponse.data.payload,
        qrCodeBase64: pixResponse.data.encodedImage,
        total: total,
        numeros: numeros
      })
    };

  } catch (error) {
    console.error('Erro na integração Asaas:', error.response ? error.response.data : error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: "Erro ao gerar cobrança PIX. Verifique as configurações da API.",
        details: error.response ? error.response.data : error.message
      })
    };
  }
};
