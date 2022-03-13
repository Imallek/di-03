import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskModule } from 'src/disk/disk.module';
import { ComputerController } from './computer.controller';

@Module({
  controllers: [ComputerController],
  imports: [CpuModule, DiskModule]
})
export class ComputerModule { }
