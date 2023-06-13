import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';

@Controller('certificates')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Post()
  create(@Body() createCertificateDto: CreateCertificateDto) {
    return this.certificateService.create(createCertificateDto);
  }

  @Get()
  findAll() {
    return this.certificateService.findAll();
  }

  @Patch(':id')
  async update(
    criteria: any,
    updateChiefComplainDto: UpdateChiefComplainDto,
  ): Promise<any> {
    console.log(criteria);
    const updateResult = await this.chiefComplainModel.findByIdAndUpdate(
      criteria,
      updateChiefComplainDto,
      { returnOriginal: false },
    );

    if (updateResult) {
      return updateResult;
    } else {
      throw new HttpException(
        'Chief Complain did not found!',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificateService.remove(+id);
  }
}
