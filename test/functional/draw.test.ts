describe('Cash withdrawal tests', () => {
  it('Should withdraw successfully', async () => {
    const expectedResponse = {
      "success": true,
      "message": "Valor do saque: R$ 210. Entregar 1 nota de R$ 10 2 notas de R$ 100 "
    };
    const { body, status } = await global.testRequest.post('/draw').send({ value: 210 });
    expect(status).toBe(200);
    expect(body).toEqual(expectedResponse);
  });

  it('Should generate error', async () => {
    const expectedResponse = {
      "success": false,
      "message": "Informe um valor válido para o saque"
    };
    const { body, status } = await global.testRequest.post('/draw').send({ value: 8 });
    expect(status).toBe(200);
    expect(body).toEqual(expectedResponse);
  });

  it('Should generate error with negative values', async () => {
    const expectedResponse = {
      "success": false,
      "message": "Informe um valor positivo"
    };
    const { body, status } = await global.testRequest.post('/draw').send({ value: -10 });
    expect(status).toBe(200);
    expect(body).toEqual(expectedResponse);
  });

  it('Should generate error with non numeric value', async () => {
    const expectedResponse = {
      "message": "request.body.value should be number",
      "code": 400,
      "error": "Bad Request"
    };
    const { body, status } = await global.testRequest.post('/draw').send({ value: "test" });
    expect(status).toBe(400);
    expect(body).toEqual(expectedResponse);
  });
});
