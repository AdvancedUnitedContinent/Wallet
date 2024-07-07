export class HistoryController {
    constructor(private readonly historyService: HistoryService) {}

    @ApiOperation({ summary: '거래 내역 조회' })
    @ApiQuery({ name: 'coinSymbol', description: '코인 심볼', required: false })
    @ApiQuery({ name: 'txType', description: '거래 타입', required: false })
    @ApiQuery({ name: 'startDate', description: '조회 시작일', required: false })
    @ApiQuery({ name: 'endDate', description: '조회 종료일', required: false })
    @ApiQuery({ name: 'pageNo', description: '페이지 번호', required: false })
    @ApiQuery({ name: 'pageSize', description: '페이지 크기', required: false })
    @ApiQuery({ name: 'sortType', description: '정렬 순서', required: false })
    @Get('')
    async getTransaction(
        @Req() req,
        @Query('coinSymbol') coinSymbol?: string,
        @Query('txType') txType?: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
        @Query('pageNo') pageNo?: number,
        @Query('pageSize') pageSize?: number,
        @Query('sortType') sortType?: string,
    ): Promise<CustomHttpResponse> {
        const memberNo: number = req.user.memberNo;
        return await this.historyService.getTransaction(memberNo, coinSymbol, txType, startDate, endDate, pageNo, pageSize, sortType);
    }

    @ApiOperation({summary: '거래 상세 조회'})
    @ApiQuery({name: 'txNo', description: '거래 번호'})
    @Get('/info')
    async getTransactionDetail(
        @Req() req,
        @Query('txNo') txNo: number
    ): Promise<CustomHttpResponse> {
        const memberNo: number = req.user.memberNo;
        return await this.historyService.getTransactionDetail(memberNo, txNo);
    }

}