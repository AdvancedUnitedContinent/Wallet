export class CryptoController {
    constructor(private readonly cryptoService: CryptoService) {
    }

    @ApiOperation({summary: '코인 등록'})
    @ApiBody({type: CryptoCreateReq})
    @Post('')
    async createCrypto(@Body() cryptoCreateReq: CryptoCreateReq): Promise<CustomHttpResponse> {
        return await this.cryptoService.createCrypto(cryptoCreateReq);
    }

    @ApiOperation({summary: '전환 비율 조회'})
    @ApiQuery({name: 'fromSymbol', description: '코인 심볼'})
    @ApiQuery({name: 'toSymbol', description: '전환 심볼'})
    @Get('swap/price')
    async getSwapPrice(
        @Query('fromSymbol') fromSymbol: string,
        @Query('toSymbol') toSymbol: string
    ): Promise<CustomHttpResponse> {
        return await this.cryptoService.getSwapPrice(fromSymbol, toSymbol);
    }

}