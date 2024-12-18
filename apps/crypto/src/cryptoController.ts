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

    @ApiOperation({summary: '코인 시세 조회'})
    @Get('exchangePrice')
    async getCryptoExchangePrice(): Promise<CustomHttpResponse> {
        return await this.cryptoService.getExchangePrice();
    }

    @ApiOperation({ summary: '송금 유효성 검사' })
    @ApiBody({ type: SendValidationReq })
    @Post('send/validation')
    async validateSend(
        @Req() req,
        @Body() sendValidationReq: SendValidationReq,
    ): Promise<CustomHttpResponse> {
        const memberNo: number = req.user.memberNo;
        return await this.cryptoService.validateSend(memberNo, sendValidationReq);
    }

    @ApiOperation({summary: '출금 지갑 유효성 검사'})
    @ApiQuery({name: 'address', description: '출금 주소'})
    @Get('withdrawal/address')
    async checkingWalletAddress(
        @Query('address') address: string,
        @Query('tokenType') tokenType: string,
    ): Promise<CustomHttpResponse> {
        return await this.cryptoService.checkWalletAddress(address, tokenType);
    }

    @ApiOperation({ summary: '출금 주소록 등록' })
    @Post('withdrawal/addressbook')
    async addWalletAddressBook(
        @Req() req,
        @Body() addWalletAddressBookRequest: AddWalletAddressBookRequest,
    ): Promise<CustomHttpResponse> { 
        addWalletAddressBookReq.memberNo = req.user.memberNo;
        return await this.cryptoService.addWalletAddressBook(addWalletAddressBookRequest);
    }




}