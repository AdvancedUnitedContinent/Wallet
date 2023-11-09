async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  await app.listen(8000);
}
bootstrap();
