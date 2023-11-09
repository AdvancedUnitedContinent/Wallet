@Module({
  imports: [
  ],
  controllers: [
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class ApiGatewayModule {}
