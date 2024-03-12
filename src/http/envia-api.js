import api from '/api';



export const envia = (dados) => api.post('/auth/enviar-cotacao', dados)
