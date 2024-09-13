export class WalletController {
    constructor(private readonly walletService: WalletService) {}
    @ApiOperation({summary: '지갑 생성'})
    @ApiBody({type: WalletCreateReq})
    @Post('')
    async createWallet(@Req() req, @Body() walletCreateReq: WalletCreateReq): Promise<CustomHttpResponse> {
        walletCreateReq.memberNo = req.user.memberNo;
        return await this.walletService.createWallet(walletCreateReq);
    }

    @ApiOperation({summary: '지갑 통합 생성'})
    @ApiBody({type: json})
    @Post('/all')
    async createAllWallet(@Req() req): Promise<CustomHttpResponse> {
        const memberNo: number = req.user.memberNo;
        return await this.walletService.createAllWallet(memberNo);
    }

    @ApiOperation({summary: '지갑 노출 여부 수정'})
    @ApiBody({type: WalletExposeUpdateReq})
    @Put('/expose')
    async updateWallet(@Req() req, @Body() walletExposeUpdateReq: WalletExposeUpdateReq): Promise<CustomHttpResponse> {
        walletExposeUpdateReq.memberNo = req.user.memberNo;
        return await this.walletService.updateWalletExpose(walletExposeUpdateReq);
    }

    @ApiOperation({summary: '지갑 목록 조회'})
    @Get('')
    async getWalletList(@Req() req): Promise<CustomHttpResponse> {
        const memberNo: number = req.user.memberNo;
        return await this.walletService.getWalletList(memberNo);
    }

    @ApiOperation({summary: '지갑 상세 조회'})
    @ApiQuery({name: 'coinSymbol', description: '코인 심볼'})
    @Get('/info')
    async getWalletDetail(
        @Req() req,
        @Query('coinSymbol') coinSymbol: string,
    ): Promise<CustomHttpResponse> {
        const memberNo: number = req.user.memberNo;
        return await this.walletService.getWalletDetail(memberNo, coinSymbol);
    }

    //TODO: Need to relocate to the BackOffice
    @ApiOperation({summary: '회원 지갑 목록 조회'})
    @ApiQuery({name: 'coinSymbol', description: '코인 심볼'})
    @Get('/member')
    async getMemberWalletList(
        @Query('coinSymbol') coinSymbol: string
    ): Promise<CustomHttpResponse> {
        return await this.walletService.getMemberWalletList(coinSymbol);
    }

}