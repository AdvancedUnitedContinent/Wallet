export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {}
    @ApiOperation({summary: '송금 요청'})
    @ApiBody({type: SendCreateReq})
    @Post('send')
    async createSend(@Req() req, @Body() sendCreateReq: SendCreateReq): Promise<CustomHttpResponse> {
        sendCreateReq.sender = req.user.memberNo;
        return await this.transactionService.createSend(sendCreateReq);
    }

    @ApiOperation({summary: '출금 요청'})
    @ApiBody({type: WithdrawalCreateReq})
    @Post('withdrawal')
    async createWithdrawal(@Req() req, @Body() withdrawalCreateReq: WithdrawalCreateReq): Promise<CustomHttpResponse> {
        withdrawalCreateReq.memberNo = req.user.memberNo;
        return await this.transactionService.createWithdrawal(withdrawalCreateReq);
    }
}