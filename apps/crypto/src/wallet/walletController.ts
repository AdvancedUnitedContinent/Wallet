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
}