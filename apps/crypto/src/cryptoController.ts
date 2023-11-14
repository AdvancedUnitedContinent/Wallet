export class CryptoController {
    constructor(private readonly cryptoService: CryptoService) {
    }

    @ApiOperation({summary: '코인 등록'})
    @ApiBody({type: CryptoCreateReq})
    @Post('')
    async createCrypto(@Body() cryptoCreateReq: CryptoCreateReq): Promise<CustomHttpResponse> {
        return await this.cryptoService.createCrypto(cryptoCreateReq);
    }
}