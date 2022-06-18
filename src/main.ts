import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { ValidationPipe } from "@nestjs/common";
const hbs = require("hbs");
const path = require("path");



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { bodyParser: false });
  app.useStaticAssets(join(__dirname, '..', "public"))
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  hbs.registerPartials(join(__dirname , '..','/views/partials'));
  app.setViewEngine('hbs');
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000)

};
bootstrap();