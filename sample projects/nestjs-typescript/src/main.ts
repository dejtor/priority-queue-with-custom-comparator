/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';*/
import PriorityQueue from 'priority-queue-with-custom-comparator';

async function bootstrap() {
  /* const app = await NestFactory.create(AppModule);
   await app.listen(3000);*/

  const q = new PriorityQueue<number>({
    comparator: (a, b) => {
      return a - b < 0;
    },
  });
  q.pushMany([-1, 4, 8, -9]);
  q.push(2);
}
bootstrap();
