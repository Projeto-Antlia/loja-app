import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  Put,
  Query,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Query() params: any) {
    return params.categoryId 
      ? this.productsService.findAllProductsByCategory(params.categoryId) 
      : this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Post(':productId/upload-image')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @Param('productId') productId: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5000000 }),
          new FileTypeValidator({ fileType: 'image/jpeg|image/png' }),
        ]
      })
    ) 
    file: Express.Multer.File
  ) {
    await this.productsService.uploadImage(productId, file);
  }

  @Get(':productId/image')
  async getFile(
    @Param('productId') productId: string,
    @Res({ passthrough: true }) res: Response
  ) : Promise<StreamableFile> {

    const image = await this.productsService.getImage(productId)

    res.set({'Content-Type': image.mimetype});
    return new StreamableFile(image.bytes);
  }
}
