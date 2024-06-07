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
    async checkWalletAddress(
        @Query('address') address: string,
        @Query('tokenType') tokenType: string,
    ): Promise<CustomHttpResponse> {
        return await this.cryptoService.checkWalletAddress(address, tokenType);
    }

    @ApiOperation({ summary: '출금 주소록 등록' })
    @Post('withdrawal/addressbook')
    async addWalletAddressBook(
        @Req() req,
        @Body() addWalletAddressBookReq: AddWalletAddressBookReq,
    ): Promise<CustomHttpResponse> {
        addWalletAddressBookReq.memberNo = req.user.memberNo;
        return await this.cryptoService.addWalletAddressBook(addWalletAddressBookReq);
    }

    @ApiOperation({ summary: '출금 주소록 조회' })
    @ApiQuery({ name: 'pageNo', description: '페이지 번호', required: false })
    @ApiQuery({ name: 'pageSize', description: '페이지 크기', required: false })
    @Get('withdrawal/addressbook')
    async getWalletAddressBookList(
        @Req() req,
        @Query('pageNo') pageNo: number = 1,
        @Query('pageSize') pageSize: number = 1000,
    ): Promise<CustomHttpResponse> {
        const memberNo: number = req.user.memberNo;
        return await this.cryptoService.getWalletAddressBookList(
            memberNo,
            pageNo,
            pageSize,
        );
    }

    @ApiOperation({ summary: '출금 주소록 수정' })
    @Put('withdrawal/addressbook')
    async updateWalletAddressBook(
        @Req() req,
        @Body() updWalletAddressBookReq: UpdWalletAddressBookReq,
    ): Promise<CustomHttpResponse> {
        updWalletAddressBookReq.memberNo = req.user.memberNo;
        return await this.cryptoService.updateWalletAddressBook(
            updWalletAddressBookReq,
        );
    }
    
    @ApiOperation({ summary: '출금 주소록 수정' })
    @Put('withdrawal/addressbook')
    async updateWalletAddressBook(
        @Req() req,
        @Body() updWalletAddressBookReq: UpdWalletAddressBookReq,
    ): Promise<CustomHttpResponse> {
        updWalletAddressBookReq.memberNo = req.user.memberNo;
        return await this.cryptoService.updateWalletAddressBook(
            updWalletAddressBookReq,
        );
    }

    @ApiOperation({ summary: '출금 주소록 삭제' })
    @ApiQuery({ name: 'addressNo', description: '주소록 번호' })
    @Delete('withdrawal/addressbook')
    async deleteWalletAddressBook(
        @Req() req,
        @Query('addressNo') addressNo: number,
    ): Promise<CustomHttpResponse> {
        const memberNo: number = req.user.memberNo;
        return await this.cryptoService.deleteWalletAddressBook(
            addressNo,
            memberNo,
        );
    }
    


    @ApiOperation({summary: '약관 조회'})
    @Get('terms')
    async getTerms(): Promise<CustomHttpResponse> {
        return await this.cryptoService.getTerms();
    }


}